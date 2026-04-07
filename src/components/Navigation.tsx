"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/feed", label: "Feed" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get in Touch" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between px-6 md:px-10 py-5">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-serif italic text-foreground tracking-tight transition-colors duration-300 group-hover:text-accent">
              Lutz
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-mono-tight rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-foreground/70 hover:text-foreground hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Instagram pill */}
            <a
              href="https://instagram.com/____lutz"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-[13px] font-mono-tight rounded-full border border-foreground/10 text-foreground/50 hover:border-accent hover:text-accent transition-all duration-300"
            >
              IG
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full bg-foreground/5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 6, backgroundColor: "#fff" }
                  : { rotate: 0, y: 0, backgroundColor: "#1a1a1a" }
              }
              className="block w-5 h-[1.5px] origin-center"
            />
            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1, backgroundColor: "#1a1a1a" }
              }
              className="block w-5 h-[1.5px]"
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -6, backgroundColor: "#fff" }
                  : { rotate: 0, y: 0, backgroundColor: "#1a1a1a" }
              }
              className="block w-5 h-[1.5px] origin-center"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-panel-bg flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-serif italic text-white/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <a
                  href="https://instagram.com/____lutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-accent transition-colors font-mono-tight"
                >
                  @____lutz
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Socials Pill - Desktop */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href="https://cremecompany.tv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white text-[11px] font-mono-tight tracking-wide uppercase rounded-full hover:bg-accent/90 transition-colors duration-300 shadow-lg shadow-accent/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Crème Company
        </a>
      </div>
    </>
  );
}
