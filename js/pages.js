(function () {
  const page = document.documentElement.getAttribute("data-page");
  const root = document.documentElement.getAttribute("data-root") || "";

  if (page === "home") {
    const PRO_MONTHLY = 2000;
    const PRO_ANNUAL = 18000;
    const SAVE = PRO_MONTHLY * 12 - PRO_ANNUAL;
    let annual = true;
    const toggle = document.getElementById("billing-toggle");
    const priceEl = document.getElementById("pro-price");
    const labelEl = document.getElementById("pro-label");
    const saveEl = document.getElementById("pro-save");
    const ctaEl = document.getElementById("pro-cta");
    const monthlyLbl = document.getElementById("lbl-monthly");
    const annualLbl = document.getElementById("lbl-annual");
    const saveBadge = document.getElementById("save-badge");
    function renderPrice() {
      const p = annual ? PRO_ANNUAL : PRO_MONTHLY;
      const lab = annual ? "/year" : "/month";
      if (priceEl) priceEl.textContent = "D" + p.toLocaleString();
      if (labelEl) labelEl.textContent = lab;
      if (ctaEl) ctaEl.textContent = "Get Pro — D" + p.toLocaleString() + lab;
      if (toggle) toggle.classList.toggle("on", annual);
      if (monthlyLbl) monthlyLbl.style.color = annual ? "rgba(255,255,255,.4)" : "#fff";
      if (annualLbl) annualLbl.style.color = annual ? "#fff" : "rgba(255,255,255,.4)";
      if (saveBadge) saveBadge.style.display = annual ? "inline-flex" : "none";
      if (saveEl) {
        saveEl.innerHTML = annual
          ? '<span style="text-decoration:line-through;opacity:.45">D' + (PRO_MONTHLY * 12).toLocaleString() + '/year</span> <strong>Save D' + SAVE.toLocaleString() + '</strong>'
          : "Switch to annual to save D" + SAVE.toLocaleString();
      }
    }
    if (toggle) {
      toggle.addEventListener("click", function () { annual = !annual; renderPrice(); });
    }
    renderPrice();
    const open = document.getElementById("pro-details-open");
    const close = document.getElementById("pro-details-close");
    const modal = document.getElementById("pro-modal");
    const bg = document.getElementById("pro-modal-bg");
    function showModal(v) {
      if (modal) modal.classList.toggle("open", v);
      if (bg) bg.classList.toggle("open", v);
    }
    if (open) open.addEventListener("click", function () { showModal(true); });
    if (close) close.addEventListener("click", function () { showModal(false); });
    if (bg) bg.addEventListener("click", function () { showModal(false); });
  }

  if (page === "contact") {
    const form = document.getElementById("contact-form");
    const success = document.getElementById("contact-success");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let ok = true;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const service = form.service.value;
      const budget = form.budget.value;
      const message = form.message.value.trim();
      const phone = form.phone.value.trim();
      function fail(id, cond) {
        const f = document.getElementById(id);
        if (!f) return;
        if (cond) { f.classList.add("invalid"); ok = false; }
        else f.classList.remove("invalid");
      }
      fail("f-name", name.length < 2);
      fail("f-email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      fail("f-service", !service);
      fail("f-budget", !budget);
      fail("f-message", message.length < 20);
      if (!ok) return;
      const text = [
        "New project enquiry from the Solotech website",
        "Name: " + name,
        "Email: " + email,
        phone ? "Phone: " + phone : "",
        "Service: " + service,
        "Budget: " + budget,
        "Message: " + message,
      ].filter(Boolean).join("\n");
      window.open("https://wa.me/2207532757?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
      form.hidden = true;
      if (success) success.hidden = false;
    });
  }

  if (page === "work") {
    const buttons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-cat]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const f = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.classList.toggle("on", b === btn); });
        cards.forEach(function (c) {
          c.style.display = f === "All" || c.getAttribute("data-cat") === f ? "" : "none";
        });
      });
    });
  }

  const lb = document.getElementById("lightbox");
  if (lb) {
    const img = document.getElementById("lb-img");
    const title = document.getElementById("lb-title");
    const client = document.getElementById("lb-client");
    const desc = document.getElementById("lb-desc");
    const tags = document.getElementById("lb-tags");
    const live = document.getElementById("lb-live");
    const items = Array.from(document.querySelectorAll("[data-lb]"));
    let i = 0;
    function show(n) {
      i = n;
      const el = items[i];
      if (!el) return;
      const d = JSON.parse(el.getAttribute("data-lb"));
      img.src = d.image.startsWith("http") || d.image.startsWith(root) ? d.image : root + d.image.replace(/^\//, "");
      img.alt = d.title;
      title.textContent = d.title;
      client.textContent = d.client || "";
      desc.textContent = d.desc || "";
      tags.innerHTML = (d.tags || []).map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("");
      if (live) {
        if (d.url) { live.href = d.url; live.style.display = "inline-flex"; }
        else live.style.display = "none";
      }
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function hide() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }
    items.forEach(function (el, idx) {
      el.addEventListener("click", function () { show(idx); });
    });
    document.querySelectorAll("[data-lb-close]").forEach(function (b) { b.addEventListener("click", hide); });
    const prev = document.getElementById("lb-prev");
    const next = document.getElementById("lb-next");
    if (prev) prev.addEventListener("click", function (e) { e.stopPropagation(); show(Math.max(0, i - 1)); });
    if (next) next.addEventListener("click", function (e) { e.stopPropagation(); show(Math.min(items.length - 1, i + 1)); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") hide();
      if (e.key === "ArrowLeft") show(Math.max(0, i - 1));
      if (e.key === "ArrowRight") show(Math.min(items.length - 1, i + 1));
    });
  }

  if (page === "store") {
    document.querySelectorAll(".product").forEach(function (card) {
      const swatches = card.querySelectorAll(".swatch");
      const sizes = card.querySelectorAll(".size");
      const colorName = card.querySelector(".color-name");
      const order = card.querySelector(".order-link");
      const name = card.getAttribute("data-name");
      const colorNames = (card.getAttribute("data-colors") || "").split("|");
      let color = colorNames[0] || "";
      let size = card.getAttribute("data-default-size") || "";
      function update() {
        const label = name + (color ? " — " + color : "") + (size ? ", Size " + size : "");
        if (order) order.href = "https://wa.me/2207532757?text=" + encodeURIComponent("Hi Solotech Digital! I'm interested in ordering: *" + label + "*. Please let me know the details.");
      }
      swatches.forEach(function (s, idx) {
        s.addEventListener("click", function () {
          swatches.forEach(function (x) { x.classList.remove("on"); });
          s.classList.add("on");
          color = colorNames[idx] || color;
          if (colorName) colorName.textContent = color;
          update();
        });
      });
      sizes.forEach(function (s) {
        s.addEventListener("click", function () {
          sizes.forEach(function (x) { x.classList.remove("on"); });
          s.classList.add("on");
          size = s.textContent.trim();
          update();
        });
      });
      update();
      const ph = card.querySelector(".ph");
      if (ph) {
        ph.addEventListener("click", function () {
          const src = ph.querySelector("img").src;
          const box = document.getElementById("img-lb");
          const im = document.getElementById("img-lb-src");
          if (box && im) { im.src = src; box.classList.add("open"); }
        });
      }
    });
    const imgLb = document.getElementById("img-lb");
    if (imgLb) imgLb.addEventListener("click", function () { imgLb.classList.remove("open"); });
  }
})();
