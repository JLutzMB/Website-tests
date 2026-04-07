"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { photoProjects, videoProjects } from "@/lib/data";

const feedImages = [
  ...photoProjects.flatMap((p) => p.images),
  ...videoProjects.map((v) => v.thumbnail),
];

export default function FeedPage() {
  return (
    <>
      <section className="pt-28 md:pt-40 pb-8 md:pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-mono-tight tracking-[0.2em] uppercase text-accent mb-6">
              Gallery
            </p>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-6">
              Feed
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="px-6 md:px-10 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
          {feedImages.map((img, i) => (
            <motion.div
              key={`${img}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (i % 6) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-4 break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-sm group ${
                  i % 5 === 0
                    ? "aspect-[3/4]"
                    : i % 5 === 1
                    ? "aspect-square"
                    : i % 5 === 2
                    ? "aspect-[4/5]"
                    : i % 5 === 3
                    ? "aspect-[3/2]"
                    : "aspect-[2/3]"
                }`}
              >
                <Image
                  src={img}
                  alt={`Feed image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
