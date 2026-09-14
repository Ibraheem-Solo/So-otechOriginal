(function () {
  const html = document.documentElement;
  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    try { localStorage.setItem("solotech-theme", theme); } catch (e) {}
  }
  (function initTheme() {
    let theme = null;
    try { theme = localStorage.getItem("solotech-theme"); } catch (e) {}
    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    html.setAttribute("data-theme", theme);
  })();

  const root = html.getAttribute("data-root") || "";
  const page = html.getAttribute("data-page") || "";
  const year = new Date().getFullYear();

  const icon = {
    phone: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>',
    menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    x: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    chat: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
    send: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
    cookie: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="8" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/><circle cx="10" cy="15" r="1" fill="currentColor"/></svg>',
    chevron: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
    sun: '<svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon: '<svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/></svg>',
  };

  const nav = [
    ["Home", "index.html"],
    ["About", "about.html"],
    ["Services", "services.html"],
    ["Work", "work.html"],
    ["Academy", "academy.html"],
    ["Store", "store.html"],
    ["Contact", "contact.html"],
  ];

  function href(file) {
    return root + file;
  }

  function isActive(file) {
    if (page === "fixit" && file === "services.html") return false;
    if (page === "home" && file === "index.html") return true;
    return page + ".html" === file;
  }

  const socials = `
    <div class="socials">
      <a href="https://www.facebook.com/share/18bkFet8wR/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.271h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg></a>
      <a href="https://x.com/solotechdesigns" target="_blank" rel="noopener noreferrer" aria-label="X"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.961l4.267 5.643 4.766-5.643Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
      <a href="https://www.instagram.com/solotechdigital" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
      <a href="https://discord.gg/uzdmT2mXq" target="_blank" rel="noopener noreferrer" aria-label="Discord"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.098.246-.198.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg></a>
      <a href="https://www.tiktok.com/@solotechdigital" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg></a>
    </div>`;

  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="orbs" aria-hidden="true"><div class="orb orb-a"></div><div class="orb orb-b"></div><div class="orb orb-c"></div></div>
      <div class="topbar" id="topbar">
        <div class="topbar-inner">
          <div style="display:flex;align-items:center;gap:.5rem"><span class="dot"></span><span>We're online — ready to start your project</span></div>
          <div style="display:flex;align-items:center;gap:1rem">
            <a href="tel:+2207532757" style="display:flex;align-items:center;gap:.4rem">${icon.phone} +220 753 2757</a>
            <a href="mailto:info@solotechdigital.com" style="display:flex;align-items:center;gap:.4rem">${icon.mail} info@solotechdigital.com</a>
          </div>
        </div>
      </div>
      <header class="site" id="header">
        <div class="nav-row">
          <div class="brand"><a href="${href("index.html")}"><img src="${root}public/logo.png" alt="Solotech Digital"></a></div>
          <nav class="desktop">${nav.map(([l, f]) => `<a href="${href(f)}" class="${isActive(f) ? "active" : ""}">${l}</a>`).join("")}</nav>
          <div class="nav-right">
            <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Toggle light and dark mode">${icon.sun}${icon.moon}</button>
            <a class="btn btn-primary nav-cta" href="${href("contact.html")}" id="nav-cta">Start a Project</a>
            <button class="menu-btn" id="menu-btn" aria-label="Open menu">${icon.menu}</button>
          </div>
        </div>
        <div class="mobile-nav" id="mobile-nav">
          ${nav.map(([l, f]) => `<a href="${href(f)}" class="${isActive(f) ? "active" : ""}">${l}</a>`).join("")}
          <a class="btn btn-primary btn-full" href="${href("contact.html")}" style="margin-top:.75rem">Start a Project</a>
        </div>
      </header>`;
  }

  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="site">
        <div class="container footer-grid">
          <div class="footer-brand">
            <img src="${root}public/logo.png" alt="Solotech Digital">
            <p>Solotech Digital is a next-generation creative agency based in The Gambia. We build digital experiences that drive growth for ambitious African businesses.</p>
            ${socials}
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="${href("about.html")}">About Us</a></li>
              <li><a href="${href("work.html")}">Our Work</a></li>
              <li><a href="${href("academy.html")}">Academy</a></li>
              <li><a href="${href("store.html")}">Store</a></li>
              <li><a href="${href("services/fixit.html")}">Solotech FixIT</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Banjul, The Gambia</li>
              <li><a href="mailto:info@solotechdigital.com">info@solotechdigital.com</a></li>
              <li><a href="tel:+2207532757">+220 753 2757</a></li>
            </ul>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>© ${year} Solotech Digital LLC. All rights reserved.</p>
          <div class="legal"><a href="${href("terms.html")}">Terms of Service</a><a href="${href("privacy.html")}">Privacy Notice</a></div>
        </div>
      </footer>
      <button class="wa-fab" id="wa-fab" aria-label="Chat on WhatsApp">${icon.chat}</button>
      <div class="wa-bubble" id="wa-bubble">Need help? Chat with us now 👋 <button type="button" id="wa-bubble-x" aria-label="Dismiss" style="position:absolute;top:-8px;right:-8px;width:20px;height:20px;border-radius:50%;background:#e5e7eb;color:#6b7280;font-size:12px">×</button></div>
      <div class="wa-panel" id="wa-panel">
        <div class="wa-head">
          <div>
            <div style="font-weight:600;font-size:.9rem">Solotech Digital</div>
            <div style="color:#86efac;font-size:.75rem">Typically replies fast</div>
          </div>
          <button type="button" id="wa-close" aria-label="Close chat">${icon.chevron}</button>
        </div>
        <div class="wa-body">
          <div class="wa-msg">Hi there! 👋 How can Solotech Digital help you today? Pick a topic to start chatting.</div>
          ${[
            ["Web Design & Development", "Hi! I'm interested in getting a website designed and developed for my business. Can we talk?"],
            ["Branding & Graphic Design", "Hi! I need help with branding and graphic design for my business. Can we discuss?"],
            ["Social Media Management", "Hi! I'm looking for social media management services. Can we chat about what's available?"],
            ["Photography & Videography", "Hi! I'd like to book a photography or videography session. Can we discuss availability?"],
            ["Digital Marketing", "Hi! I need help with digital marketing for my business. Can we talk about how Solotech can help?"],
            ["Solotech LaunchPad (Website in 24hrs)", "Hi! I'm interested in the Solotech LaunchPad — I want to launch my website fast. Can you help?"],
            ["General Enquiry", "Hi! I'd like to learn more about Solotech Digital's services. Can we chat?"],
          ].map(([l, m]) => `<a class="wa-opt" target="_blank" rel="noopener noreferrer" href="https://wa.me/2207532757?text=${encodeURIComponent(m)}">${l}</a>`).join("")}
        </div>
        <div class="wa-foot">
          <input id="wa-custom" type="text" placeholder="Type a custom message...">
          <button class="wa-send" id="wa-send" aria-label="Send">${icon.send}</button>
        </div>
      </div>
      <div class="cookie" id="cookie">
        <div>${icon.cookie}</div>
        <div style="flex:1">
          <p><strong>We use cookies</strong>We use cookies to improve your experience and analyse site traffic. See our <a href="${href("privacy.html")}">Privacy Notice</a> for details.</p>
        </div>
        <div style="display:flex;gap:.5rem">
          <button type="button" id="cookie-reject" class="btn btn-ghost" style="padding:.4rem .9rem;font-size:.75rem">Reject</button>
          <button type="button" id="cookie-accept" class="btn btn-lime" style="padding:.4rem .9rem;font-size:.75rem">Accept</button>
        </div>
      </div>`;
  }

  const header = document.getElementById("header");
  const topbar = document.getElementById("topbar");
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
    });
  }
  window.addEventListener("scroll", function () {
    const y = window.scrollY > 20;
    if (header) header.classList.toggle("scrolled", y);
    if (topbar) topbar.classList.toggle("hide", y);
  });

  const menuBtn = document.getElementById("menu-btn");
  const mobile = document.getElementById("mobile-nav");
  if (menuBtn && mobile) {
    menuBtn.addEventListener("click", function () {
      const open = mobile.classList.toggle("open");
      menuBtn.innerHTML = open ? icon.x : icon.menu;
    });
  }

  const fab = document.getElementById("wa-fab");
  const panel = document.getElementById("wa-panel");
  const bubble = document.getElementById("wa-bubble");
  function openWa() {
    if (panel) panel.classList.add("open");
    if (bubble) bubble.classList.remove("show");
    if (fab) fab.innerHTML = icon.x;
  }
  function closeWa() {
    if (panel) panel.classList.remove("open");
    if (fab) fab.innerHTML = icon.chat;
  }
  if (fab) {
    fab.addEventListener("click", function () {
      if (panel && panel.classList.contains("open")) closeWa();
      else openWa();
    });
  }
  const waClose = document.getElementById("wa-close");
  if (waClose) waClose.addEventListener("click", closeWa);
  setTimeout(function () {
    if (bubble && panel && !panel.classList.contains("open") && !localStorage.getItem("solotech-wa-bubble")) {
      bubble.classList.add("show");
    }
  }, 4000);
  const bubbleX = document.getElementById("wa-bubble-x");
  if (bubbleX) {
    bubbleX.addEventListener("click", function (e) {
      e.stopPropagation();
      bubble.classList.remove("show");
      localStorage.setItem("solotech-wa-bubble", "1");
    });
  }
  const waSend = document.getElementById("wa-send");
  const waCustom = document.getElementById("wa-custom");
  function sendCustom() {
    const t = (waCustom && waCustom.value || "").trim();
    if (!t) return;
    window.open("https://wa.me/2207532757?text=" + encodeURIComponent(t), "_blank", "noopener,noreferrer");
    closeWa();
  }
  if (waSend) waSend.addEventListener("click", sendCustom);
  if (waCustom) waCustom.addEventListener("keydown", function (e) { if (e.key === "Enter") sendCustom(); });

  const cookie = document.getElementById("cookie");
  if (cookie && !localStorage.getItem("solotech-cookie-consent")) {
    setTimeout(function () { cookie.classList.add("show"); }, 1200);
  }
  function setCookie(v) {
    localStorage.setItem("solotech-cookie-consent", v);
    if (cookie) cookie.classList.remove("show");
  }
  const acc = document.getElementById("cookie-accept");
  const rej = document.getElementById("cookie-reject");
  if (acc) acc.addEventListener("click", function () { setCookie("accepted"); });
  if (rej) rej.addEventListener("click", function () { setCookie("rejected"); });

  window.siteRoot = root;
  window.waLink = function (msg) {
    return "https://wa.me/2207532757?text=" + encodeURIComponent(msg);
  };
})();
