import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { blogPosts } from "@/lib/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Post | ShadowPixels Studio" };

  return {
    title: `${post.title} | ShadowPixels Studio`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="flex-1 bg-obsidian pt-32 flex items-center justify-center">
        <div className="text-center py-20">
          <Icon name="Frown" size={48} className="text-silver/30 mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-white">Post Not Found</h1>
          <Link href="/blogs" className="text-ember font-body text-sm hover:underline mt-4 inline-block">
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  const parseInline = (text: string) => {
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("[") && part.includes("](")) {
        const textEnd = part.indexOf("](");
        const linkText = part.slice(1, textEnd);
        const url = part.slice(textEnd + 2, -1);
        const isInternal = url.startsWith("/") || url.includes("shadowpixels.studio");
        return (
          <a
            key={i}
            href={url}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            className="text-ember hover:underline font-semibold"
          >
            {linkText}
          </a>
        );
      }
      return part;
    });
  };

  // Parse markdown-style text into premium JSX elements
  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle Code Blocks & Diagrams
      if (trimmed.startsWith("```") || trimmed.startsWith("`` `")) {
        const codeLines = trimmed.split("\n");
        const cleanCode = codeLines
          .filter((line) => !line.trim().startsWith("```") && !line.trim().startsWith("`` `"))
          .join("\n");
        return (
          <pre key={idx} className="bg-gunmetal/40 border border-white/5 p-5 my-6 rounded-sm font-mono text-xs text-silver/70 overflow-x-auto leading-relaxed">
            <code className="block">{cleanCode}</code>
          </pre>
        );
      }

      if (trimmed.startsWith("#### ")) {
        return (
          <h4 key={idx} className="font-heading text-base sm:text-lg font-bold text-white mt-6 mb-3 uppercase tracking-wide">
            {trimmed.replace("####", "").trim()}
          </h4>
        );
      }

      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="font-heading text-lg sm:text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wide">
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="font-heading text-xl sm:text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">
            {trimmed.replace("##", "").trim()}
          </h2>
        );
      }

      if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
        const listItems = trimmed.split("\n").map((li) => li.replace(/^[*-\s]+/, "").trim());
        return (
          <ul key={idx} className="space-y-3 my-5 list-disc pl-5 font-body text-silver/70 text-sm sm:text-base leading-relaxed">
            {listItems.map((item, itemIdx) => (
              <li key={itemIdx}>{parseInline(item)}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={idx} className="font-body text-silver/70 text-sm sm:text-base leading-relaxed mb-4">
          {parseInline(trimmed)}
        </p>
      );
    });
  };

  // Filter out the current post to show "Recent Articles" in the sidebar
  const recentPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="flex-1 bg-obsidian pt-16">
      <article className="relative py-16 sm:py-24 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ember rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-silver/50 hover:text-ember transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 transform uppercase mb-10"
          >
            <Icon name="ArrowLeft" size={14} /> Back to Blogs
          </Link>

          {/* Grid Layout to fill side empty space */}
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            
            {/* Left Column: Main Article */}
            <div className="max-w-3xl w-full">
              {/* Heading block */}
              <header className="mb-10">
                <span className="inline-block border border-ember/40 bg-black/75 px-3 py-1 text-[9px] tracking-widest font-heading font-semibold text-ember uppercase mb-4">
                  {post.category}
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-2 text-xs text-silver/40 font-body uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </header>

              {/* Hero cover image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/5 mb-12">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover opacity-90"
                />
              </div>

              {/* Body content */}
              <div className="prose prose-invert max-w-none">
                {renderContent(post.content)}
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 w-full">
              
              {/* Recent Articles Widget */}
              <div className="card-panel p-6">
                <h4 className="font-heading text-xs tracking-[0.2em] text-silver uppercase mb-6 pb-3 border-b border-white/5">
                  Recent Articles
                </h4>
                <div className="space-y-5">
                  {recentPosts.map((rp) => (
                    <div key={rp.slug} className="flex gap-4 group">
                      <div className="w-16 h-12 shrink-0 relative overflow-hidden border border-white/5 bg-gunmetal/30">
                        <Image
                          src={rp.coverImage}
                          alt={rp.title}
                          fill
                          sizes="64px"
                          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-0.5">
                        <span className="text-[8px] tracking-wider text-ember font-body uppercase">
                          {rp.category}
                        </span>
                        <h5 className="font-heading text-[10px] font-bold text-white uppercase leading-snug tracking-wider group-hover:text-ember transition-colors duration-300 line-clamp-2">
                          <Link href={`/blogs/${rp.slug}`}>{rp.title}</Link>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </article>
    </main>
  );
}
