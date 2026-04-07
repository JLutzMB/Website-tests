"use client";

import { motion } from "framer-motion";
import { bio } from "@/lib/data";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-10 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 py-16">
        {/* Left: Info */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-mono-tight tracking-[0.2em] uppercase text-accent mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-7xl font-serif italic leading-[1.05] mb-8">
              Get in
              <br />
              Touch
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/60 font-light leading-[1.8] max-w-md text-base"
          >
            {bio.description}
          </motion.p>
        </div>

        {/* Right: Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-10">
            {/* Email */}
            <div>
              <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-3">
                Email
              </p>
              <a
                href={`mailto:${bio.email}`}
                className="text-xl md:text-2xl font-light hover:text-accent transition-colors duration-300 underline decoration-foreground/10 underline-offset-4 hover:decoration-accent"
              >
                {bio.email}
              </a>
            </div>

            {/* Instagram */}
            <div>
              <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-3">
                Instagram
              </p>
              <a
                href="https://instagram.com/____lutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-light hover:text-accent transition-colors duration-300 underline decoration-foreground/10 underline-offset-4 hover:decoration-accent"
              >
                @{bio.instagram}
              </a>
            </div>

            {/* Representation */}
            <div>
              <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-3">
                Rep: {bio.representationRegion}
              </p>
              <a
                href="https://cremecompany.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-light hover:text-accent transition-colors duration-300 underline decoration-foreground/10 underline-offset-4 hover:decoration-accent"
              >
                {bio.representation}
              </a>
            </div>

            {/* Location */}
            <div className="pt-6 border-t border-foreground/5">
              <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-3">
                Location
              </p>
              <p className="text-base font-light text-foreground/60">
                {bio.location} — Previously {bio.previousLocation}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
