import { futureOfCgi } from "./blog-posts/future-of-cgi";
import { masteringColorGrading } from "./blog-posts/mastering-color-grading";
import { rotoscopingSecrets } from "./blog-posts/rotoscoping-secrets";
import { smmStrategy } from "./blog-posts/smm-strategy";
import { motionDesign } from "./blog-posts/motion-design";
import { unrealEngine } from "./blog-posts/unreal-engine";
import { soundDesign } from "./blog-posts/sound-design";
import { compositingVfx } from "./blog-posts/compositing-vfx";
import { logoBranding } from "./blog-posts/logo-branding";
import { embersAe } from "./blog-posts/embers-ae";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: "VFX" | "CGI" | "FILM" | "MOTION" | "SMM";
  coverImage: string;
};

export const blogPosts: BlogPost[] = [
  futureOfCgi,
  masteringColorGrading,
  rotoscopingSecrets,
  smmStrategy,
  motionDesign,
  unrealEngine,
  soundDesign,
  compositingVfx,
  logoBranding,
  embersAe,
];
