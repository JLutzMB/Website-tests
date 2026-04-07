"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { videoProjects, photoProjects } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="João Lutz"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            {/* Left: Title */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[11px] font-mono-tight tracking-[0.2em] uppercase text-accent mb-6"
              >
                001_LUTZ
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic text-white leading-[0.9] tracking-tight"
              >
                João
                <br />
                Lutz
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 text-white/50 text-sm md:text-base font-light max-w-md leading-relaxed"
              >
                Photographer & Director — São Paulo.
                <br />
                Portraiture, fashion, and film.
              </motion.p>
            </div>

            {/* Right: Quick nav */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col gap-3"
            >
              {["Feed", "IG", "Get in Touch"].map((label) => {
                const href =
                  label === "Feed"
                    ? "/feed"
                    : label === "IG"
                    ? "https://instagram.com/____lutz"
                    : "/contact";
                const isExternal = label === "IG";
                return (
                  <Link
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    className="px-5 py-2.5 border border-white/20 rounded-full text-[12px] font-mono-tight text-white/70 hover:border-accent hover:text-accent transition-all duration-300 text-center"
                  >
                    {label}
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] font-mono-tight tracking-[0.3em] uppercase text-white/30">
            Scroll
          </span>
          <motion.div
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] bg-white/30"
            style={{ maxHeight: 40 }}
          />
        </motion.div>
      </section>

      {/* VIDEO Section */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="text-accent text-5xl md:text-7xl font-serif italic">
              Video
            </span>
            <div className="flex-1 h-[1px] bg-foreground/10" />
            <span className="text-[11px] font-mono-tight text-foreground/40 tracking-wide">
              {videoProjects.length} Projects
            </span>
          </motion.div>

          {/* Video list */}
          <div className="space-y-0">
            {videoProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-b border-foreground/5 py-6 md:py-8"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Thumbnail */}
                  <div className="col-span-2 md:col-span-1">
                    <div className="relative aspect-square overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  </div>

                  {/* Client */}
                  <div className="col-span-10 md:col-span-4">
                    <p className="text-base md:text-lg font-light group-hover:text-accent transition-colors duration-300">
                      {project.client}
                    </p>
                  </div>

                  {/* Title */}
                  <div className="hidden md:block md:col-span-4">
                    <p className="text-sm text-foreground/50 font-light italic">
                      &ldquo;{project.title}&rdquo;
                    </p>
                  </div>

                  {/* Location + Year */}
                  <div className="hidden md:flex md:col-span-3 items-center justify-end gap-4">
                    <span className="text-[11px] font-mono-tight text-foreground/40">
                      {project.location}
                    </span>
                    <span className="text-[11px] font-mono-tight text-accent">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto h-[1px] bg-foreground/5" />
      </div>

      {/* PHOTO Section */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="text-accent text-5xl md:text-7xl font-serif italic">
              Photo
            </span>
            <div className="flex-1 h-[1px] bg-foreground/10" />
            <span className="text-[11px] font-mono-tight text-foreground/40 tracking-wide">
              {photoProjects.length} Projects
            </span>
          </motion.div>

          {/* Photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {photoProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-6">
                      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] font-mono-tight tracking-[0.2em] uppercase text-accent">
                          View Project
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-mono-tight text-foreground/40 mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="text-lg font-light group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[11px] font-mono-tight text-foreground/40">
                        {project.location}
                      </span>
                      <span className="text-[11px] font-mono-tight text-accent">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-36 bg-panel-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent text-[11px] font-mono-tight tracking-[0.3em] uppercase mb-6">
              Available for work
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white leading-[1.1] mb-8">
              Let&apos;s make
              <br />
              something{" "}
              <span className="text-accent">together.</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-[12px] font-mono-tight text-white/70 hover:border-accent hover:text-accent transition-all duration-300 uppercase tracking-wider"
            >
              Get in Touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
