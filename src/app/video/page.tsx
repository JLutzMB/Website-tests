"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { videoProjects } from "@/lib/data";

export default function VideoPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 md:pt-40 pb-8 md:pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-mono-tight tracking-[0.2em] uppercase text-accent mb-6">
              Moving Image
            </p>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-6">
              Video
            </h1>
            <p className="text-foreground/50 font-light max-w-xl text-base leading-relaxed">
              Direction and cinematography across documentary, commercial, and
              fashion film. Photography and filmmaking as complementary tools for
              multidimensional storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 md:px-10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {videoProjects.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Thumbnail with play */}
              <div className="group relative aspect-video overflow-hidden rounded-sm cursor-pointer">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:border-accent transition-all duration-500">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="ml-1"
                    >
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-mono-tight text-accent tracking-wide mb-1">
                    {video.client}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif italic">
                    &ldquo;{video.title}&rdquo;
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono-tight text-foreground/40">
                    {video.location}
                  </span>
                  <span className="text-[11px] font-mono-tight text-accent">
                    {video.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
