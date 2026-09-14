import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/seo-head";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";
import SocialLinks from "@/components/social-links";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Please tell us a bit more about your project (min 20 characters)"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Banjul, The Gambia",
    href: null,
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "info@solotechdigital.com",
    href: "mailto:info@solotechdigital.com",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+220 753 2757",
    href: "tel:+2207532757",
  },
  {
    icon: <MessageCircle size={22} />,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/2207532757",
  },
];


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactForm>({

    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(values: ContactForm) {
    console.log(values);
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col w-full">
      <SeoHead
        title="Contact Us"
        path="/contact"
        description="Start a project with Solotech Digital LLC. Contact us for web design, branding, social media management, and digital marketing services in The Gambia."
      />
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="text-gradient">Powerful</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Ready to take your business to the next level? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 px-6 md:px-12 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeUp} className="lg:col-span-2 space-y-6">
              <div className="glass-panel p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1E0A32]/25 flex items-center justify-center text-[#9CB633] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#9CB633] transition-colors font-medium"
                            data-testid={`contact-link-${item.label.toLowerCase()}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 mt-8 pt-8">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <SocialLinks size="sm" />
                </div>
              </div>

              {/* Quick CTA */}
              <a
                href="https://wa.me/2207532757"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-cta"
                className="glass-panel p-6 rounded-2xl flex items-center gap-4 border-[#9CB633]/30 hover:border-[#9CB633]/60 transition-all hover:-translate-y-0.5 block"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold mb-0.5">Chat on WhatsApp</div>
                  <div className="text-white/50 text-sm">Typically replies within minutes</div>
                </div>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="lg:col-span-3">
              <div className="glass-panel p-10 rounded-3xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#9CB633]/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-[#9CB633]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-white/60 text-lg">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-8">Start a Project</h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white/70">Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Ousman Jallow"
                                    data-testid="input-name"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white/70">Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="email"
                                    placeholder="ousman@yourbusiness.com"
                                    data-testid="input-email"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white/70">Service Needed</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-service" className="bg-white/5 border-white/10 text-white focus:border-purple-500/50">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-[#0f0f1a] border-white/10">
                                    <SelectItem value="web">Web Design & Development</SelectItem>
                                    <SelectItem value="branding">Branding & Graphic Design</SelectItem>
                                    <SelectItem value="social">Social Media Management</SelectItem>
                                    <SelectItem value="photo">Photography & Videography</SelectItem>
                                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                                    <SelectItem value="launchpad">Solotech LaunchPad</SelectItem>
                                    <SelectItem value="other">Other / Multiple Services</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white/70">Budget Range</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-budget" className="bg-white/5 border-white/10 text-white focus:border-purple-500/50">
                                      <SelectValue placeholder="Select your budget" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-[#0f0f1a] border-white/10">
                                    <SelectItem value="under-5k">Under D5,000</SelectItem>
                                    <SelectItem value="5k-15k">D5,000 – D15,000</SelectItem>
                                    <SelectItem value="15k-30k">D15,000 – D30,000</SelectItem>
                                    <SelectItem value="30k-60k">D30,000 – D60,000</SelectItem>
                                    <SelectItem value="60k-plus">D60,000+</SelectItem>
                                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70">Phone / WhatsApp (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="+220 XXX XXXX"
                                  data-testid="input-phone"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70">Tell Us About Your Project</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder="Tell us what you need, your goals, timeline, and any other relevant details..."
                                  data-testid="textarea-message"
                                  rows={5}
                                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 resize-none"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex flex-col items-center gap-2">
                          <Button
                            type="submit"
                            size="lg"
                            data-testid="button-submit"
                            className="w-full bg-gradient-solotech text-white rounded-full py-3 px-8 text-base border-0 hover:scale-[1.02] transition-transform"
                          >
                            Send Message
                          </Button>
                          <p className="text-white/45 text-sm">We'll Reply in 24hrs</p>
                        </div>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
