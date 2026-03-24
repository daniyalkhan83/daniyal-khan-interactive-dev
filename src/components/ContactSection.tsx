import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Let's work together</h3>
            <p className="text-muted-foreground">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
            <div className="space-y-4">
              <a href="mailto:daniyalkhan9766@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </span>
                daniyalkhan9766@gmail.com
              </a>
              <a href="tel:+923291797162" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </span>
                +92 329 1797162
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {["name", "email", "message"].map((field) => (
              <div key={field} className="relative">
                <label className="text-sm text-muted-foreground capitalize mb-1 block">{field}</label>
                {field === "message" ? (
                  <textarea
                    rows={4}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-muted rounded-xl px-4 py-3 text-foreground outline-none transition-all duration-300 resize-none ${
                      focused === field ? "ring-2 ring-primary shadow-lg shadow-primary/10" : "ring-1 ring-border"
                    }`}
                    placeholder={`Your ${field}...`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-muted rounded-xl px-4 py-3 text-foreground outline-none transition-all duration-300 ${
                      focused === field ? "ring-2 ring-primary shadow-lg shadow-primary/10" : "ring-1 ring-border"
                    }`}
                    placeholder={`Your ${field}...`}
                  />
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-xl font-medium text-primary-foreground flex items-center justify-center gap-2 glow-effect"
              style={{ background: "var(--gradient-primary)" }}
            >
              Send Message <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
