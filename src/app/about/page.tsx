"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bio } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="João Lutz"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[11px] font-mono-tight tracking-[0.2em] uppercase text-accent mb-6">
                About
              </p>
              <h1 className="text-5xl md:text-7xl font-serif italic mb-3">
                {bio.fullName}
              </h1>
              <p className="text-foreground/50 text-lg font-light mb-10">
                {bio.tagline}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground/70 leading-[1.8] font-light text-lg max-w-xl"
            >
              {bio.description}
            </motion.p>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 gap-8"
            >
              <div>
                <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-2">
                  Based in
                </p>
                <p className="text-sm font-light">{bio.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-2">
                  Previously
                </p>
                <p className="text-sm font-light">{bio.previousLocation}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-2">
                  Representation
                </p>
                <p className="text-sm font-light">
                  {bio.representation}{" "}
                  <span className="text-foreground/30">
                    ({bio.representationRegion})
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-foreground/30 mb-2">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/____lutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-accent hover:text-accent/70 transition-colors"
                >
                  @{bio.instagram}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="px-6 md:px-10 py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="text-accent text-3xl md:text-4xl font-serif italic">
              Clients
            </span>
            <div className="flex-1 h-[1px] bg-foreground/10" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Netflix",
              "McDonalds",
              "Bradesco Seguros",
              "Quinto Andar",
              "O'Neil",
              "Athleta Magazine",
              "Ministry of Design",
              "Crème Company",
            ].map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-foreground/5 rounded-sm p-6 flex items-center justify-center hover:border-accent/30 transition-colors duration-500"
              >
                <span className="text-sm text-foreground/50 font-light text-center">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
