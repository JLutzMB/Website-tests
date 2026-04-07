"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { photoProjects } from "@/lib/data";

export default function ProjectPage() {
  const params = useParams();
  const project = photoProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-5xl font-serif italic text-foreground mb-4">
            Not Found
          </h1>
          <Link
            href="/"
            className="text-accent text-sm font-mono-tight hover:underline"
          >
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = photoProjects.findIndex(
    (p) => p.slug === project.slug
  );
  const nextProject =
    photoProjects[(currentIndex + 1) % photoProjects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[75vh] md:h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/"
                  className="text-[11px] font-mono-tight tracking-wide uppercase text-white/40 hover:text-white transition-colors"
                >
                  Work
                </Link>
                <span className="text-white/20">/</span>
                <span className="text-[11px] font-mono-tight tracking-wide uppercase text-accent">
                  {project.subtitle}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white leading-[0.95]">
                {project.title}
              </h1>

              <div className="flex items-center gap-6 mt-6">
                <span className="text-[11px] font-mono-tight text-white/40">
                  {project.location}, {project.year}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">
          {project.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative overflow-hidden rounded-sm"
            >
              <div
                className={`relative ${
                  i === 0
                    ? "aspect-[16/10]"
                    : i % 2 === 0
                    ? "aspect-[3/2]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} — ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="border-t border-foreground/5">
        <Link href={`/work/${nextProject.slug}`} className="group block">
          <div className="px-6 md:px-10 py-16 md:py-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-[11px] font-mono-tight tracking-[0.2em] uppercase text-foreground/40 mb-4">
                  Next Project
                </p>
                <h2 className="text-3xl md:text-5xl font-serif italic group-hover:text-accent transition-colors duration-500">
                  {nextProject.title}
                </h2>
                <p className="text-sm text-foreground/40 mt-2 font-mono-tight">
                  {nextProject.subtitle} — {nextProject.location},{" "}
                  {nextProject.year}
                </p>
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-500">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-foreground/30 group-hover:text-accent transition-colors duration-500"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
