"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { blogPosts } from "@/lib/blogs";

const categories = ["ALL", "VFX", "CGI", "FILM", "MOTION", "SMM"];

export default function BlogsPage() {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = filter === "ALL" || post.category === filter;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-1 bg-obsidian pt-24 bg-cinematic relative">
      {/* Decorative Top Glow — consistent with About page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-ember/40 to-transparent pointer-events-none" />

      {/* Page Hero Header */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-16 sm:pb-20">
        <div className="max-w-3xl group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
          <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            Studio Insights
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            <span className="text-gradient-silver">READ &</span>{" "}
            <span className="text-gradient-ember">LEARN</span>
          </h1>
          <p className="text-silver/80 font-body text-sm sm:text-base mt-6 max-w-xl leading-relaxed">
            In-depth guides, industry trends, and creative workflows from our production desk.
          </p>
        </div>
      </section>

      {/* Blogs Grid & Filter Section */}
      <section className="border-t border-white/5 py-16 sm:py-24 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          {/* Controls: Search and Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-14 border-b border-white/5 pb-8">
            {/* Category filter buttons */}
            <div className="flex gap-2 flex-wrap order-2 md:order-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-xs tracking-[0.15em] font-heading font-semibold border transition-all duration-300 rounded-sm hover:-translate-y-0.5 hover:scale-105 transform ${
                    filter === c
                      ? "border-ember text-ember bg-ember/5"
                      : "border-white/10 text-silver/50 hover:text-silver hover:border-white/25"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-md w-full order-1 md:order-2 flex items-center border border-white/10 bg-gunmetal/30 px-4 py-2.5 hover:border-white/20 focus-within:border-ember transition-colors duration-300">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm text-silver font-body outline-none w-full pr-8 placeholder:text-silver/30"
              />
              <Icon name="Search" size={16} className="text-silver/40 absolute right-4" />
            </div>
          </div>

          {/* Grid Layout */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="card-panel overflow-hidden group flex flex-col justify-between h-full relative transition-all duration-300 hover:-translate-y-1 hover:border-ember/20 hover:shadow-lg hover:shadow-ember/5 cursor-default"
                >
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ember via-ember-soft to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <div>
                    {/* Cover image */}
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <span className="absolute top-4 left-4 border border-ember/40 bg-black/75 px-3 py-1 text-[9px] tracking-widest font-heading font-semibold text-ember uppercase">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2.5 text-[10px] text-silver/40 font-body uppercase tracking-wider mb-3">
                        <span>{post.date}</span>
                        <span className="text-ember/60">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white leading-snug group-hover:text-ember transition-colors duration-300 mb-3">
                        <Link href={`/blogs/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-silver/50 text-sm font-body leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/5 mt-2">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-silver/70 group-hover:text-ember transition-colors duration-300 uppercase"
                    >
                      Read Article <Icon name="ArrowRight" size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-5 text-silver/20">
                <Icon name="FileSearch" size={30} />
              </div>
              <h3 className="font-heading text-lg font-bold text-silver/70 uppercase tracking-wider">
                No articles found
              </h3>
              <p className="text-silver/40 font-body text-sm mt-2">
                Try widening your search terms or selecting another category.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
