"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { Mail, MapPin, Terminal } from "lucide-react";

/* ================= TYPING HOOK ================= */
function useTyping(text: string, speed = 35) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
}

/* ================= TERMINAL LINE ================= */
const TerminalLine = ({ text }: { text: string }) => {
  const typed = useTyping(text, 22);
  return (
    <p className="whitespace-pre-wrap break-words">
      {typed}
      <span className="animate-pulse">▌</span>
    </p>
  );
};

/* ================= PAGE ================= */
export default function ContactPage() {
  const title = useTyping("contact.tsx", 40);

  const [command, setCommand] = useState("");
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidCommand =
    command.trim().toLowerCase() === "send;" &&
    name.trim() &&
    email.trim() &&
    message.trim() &&
    emailRegex.test(email);

  const handleSubmit = async () => {
    if (!isValidCommand || loading) return;

    setLoading(true);
    try {
      await fetch("https://z-backend-neon.vercel.app/api/subscribe/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          summary: message,
        }),
      });

      setNotif("✔ Message sent successfully");
      setCommand("");
      setName("");
      setEmail("");
      setMessage("");
      setEmailError("");
    } catch {
      setNotif("✖ Failed to send message");
    } finally {
      setLoading(false);
      setTimeout(() => setNotif(null), 4000);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!value) {
      setEmailError("");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please put correct email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="min-h-screen text-[var(--foreground)]">
      {/* NOTIFICATION */}
      <AnimatePresence>
        {notif && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-6 right-6 px-4 py-3 rounded-lg
                       bg-[var(--sun)] text-black text-sm font-semibold
                       shadow-xl z-50"
          >
            {notif}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e1117]">

          {/* WINDOW BAR */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/10">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs opacity-60 font-mono">{title}</span>
            <span />
          </div>

          {/* BODY */}
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">

            {/* SIDEBAR */}
            <aside className="bg-[#0b0f19] border-b md:border-b-0 md:border-r border-white/10 p-4 text-sm font-mono">
              <p className="opacity-60 mb-3">EXPLORER</p>
              <ul className="space-y-2">
                <li>📁 app</li>
                <li className="ml-4">📄 home.tsx</li>
                <li className="ml-4 text-[var(--sun)]">📄 contact.tsx</li>
              </ul>
            </aside>

            {/* EDITOR */}
            <section className="p-4 sm:p-6 md:p-8 space-y-8 md:space-y-10">

              {/* TERMINAL INFO */}
              <div className="bg-black/40 border border-white/10 rounded-lg p-4
                              font-mono text-xs sm:text-sm overflow-hidden">
                <TerminalLine text="$ whoami" />
                <p className="ml-4 text-[var(--sun)] break-words">Anchal Sahani</p>

                <div className="mt-4">
                  <TerminalLine text="$ contact --info" />
                  <p className="ml-4 flex items-center gap-2 break-all">
                    <Mail size={14} /> sahanianchal7@gmail.com
                  </p>
                  <p className="ml-4 flex items-center gap-2 break-words">
                    <MapPin size={14} /> Delhi, India
                  </p>
                </div>

                <div className="mt-4 opacity-80">
                  <TerminalLine text={`$ echo "Hi 👋 feel free to ask any queries below"`} />
                </div>
              </div>

              {/* TERMINAL FORM INPUTS */}
              <div className="space-y-4 font-mono text-sm">

                <div className="flex items-center gap-3 min-w-0 px-4 py-3 rounded-lg
                                bg-white/5 backdrop-blur-xl border border-white/15">
                  <span className="text-[var(--sun)]">$</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    className="flex-1 bg-transparent outline-none
                               text-[var(--foreground)]
                               placeholder:text-white/30"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3 min-w-0 px-4 py-3 rounded-lg
                                  bg-white/5 backdrop-blur-xl border border-white/15">
                    <span className="text-[var(--sun)]">$</span>
                    <input
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      placeholder="email"
                      className="flex-1 bg-transparent outline-none
                                 text-[var(--foreground)]
                                 placeholder:text-white/30"
                    />
                  </div>

                  {emailError && (
                    <p className="text-xs text-red-400 ml-1">
                      {emailError}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3 min-w-0 px-4 py-3 rounded-lg
                                bg-white/5 backdrop-blur-xl border border-white/15">
                  <span className="text-[var(--sun)] mt-1">$</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="message"
                    rows={3}
                    className="flex-1 bg-transparent outline-none resize-none
                               text-[var(--foreground)]
                               placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* TERMINAL SEND */}
              <div className="relative flex items-center gap-3 min-w-0 px-4 py-3
                              rounded-lg bg-white/5 backdrop-blur-xl
                              border border-white/15 font-mono text-sm
                              shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <Terminal size={16} className="text-[var(--sun)]" />
                <span className="text-[var(--sun)]">$</span>

                <input
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="type send;"
                  className="flex-1 bg-transparent outline-none
                             text-[var(--foreground)]
                             placeholder:text-white/30"
                />

                <motion.div
                  animate={{
                    opacity: isValidCommand ? 1 : 0.3,
                    scale: isValidCommand ? 1.05 : 1,
                  }}
                  className="px-3 py-1 rounded-md border border-white/20
                             bg-white/5 text-xs"
                >
                  ENTER
                </motion.div>
                {isValidCommand && (
                <span
                  className="absolute inset-0 rounded-lg
                    bg-[radial-gradient(circle_at_50%_120%,rgba(62,248,169,0.25),transparent_70%)]
                    pointer-events-none"
                />
              )}

              </div>

              <p className="text-xs font-mono opacity-50">
                Fill details → type <span className="text-[var(--sun)]">send;</span> → press Enter
              </p>

            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
