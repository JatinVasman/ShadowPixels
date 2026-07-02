export type Service = {
  key: string;
  icon: string;
  title: string;
  tagline: string;
  included: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    key: "smm",
    icon: "Smartphone",
    title: "Social Media Management",
    tagline:
      "Grow your brand with strategic content and consistent online presence.",
    featured: true,
    included: [
      "Social Media Audit",
      "Competitor Analysis",
      "Content Strategy",
      "Monthly Content Calendar",
      "Graphic Designing",
      "Reels Editing",
      "Caption Writing",
      "Hashtag Research",
      "Posting & Scheduling",
      "Story Management",
      "Brand Consistency",
      "Trend Research",
    ],
  },
  {
    key: "graphic-design",
    icon: "Palette",
    title: "Graphic Design",
    tagline:
      "Professional visuals that build brand identity and drive engagement.",
    included: [
      "Brand Identity Design",
      "Logo Design",
      "Social Media Creatives",
      "Marketing Creatives",
      "Print Design",
      "Business Stationery",
      "Packaging Design",
      "Brochures & Flyers",
    ],
  },
  {
    key: "motion-graphics",
    icon: "Clapperboard",
    title: "Motion Graphics",
    tagline:
      "Dynamic animations that capture attention and communicate ideas.",
    included: [
      "Logo Animation",
      "Motion Posters",
      "Promotional Videos",
      "Explainer Videos",
      "Animated Advertisements",
      "Typography Animation",
    ],
  },
  {
    key: "video-editing",
    icon: "Film",
    title: "Video Editing",
    tagline: "High-quality editing for brands, creators and businesses.",
    featured: true,
    included: [
      "Instagram Reels",
      "YouTube Videos",
      "Shorts",
      "Product Videos",
      "Corporate Videos",
      "Podcasts",
      "Documentary Editing",
      "Color Grading",
      "Sound Design & Audio Enhancement",
    ],
  },
  {
    key: "vfx-cgi",
    icon: "Flame",
    title: "VFX & CGI",
    tagline: "Cinematic visual effects for commercial and creative productions.",
    featured: true,
    included: [
      "Object Removal",
      "CGI Integration",
      "Green Screen Compositing",
      "Camera Tracking",
      "Screen Replacement",
      "Fire, Smoke & Magic FX",
      "Rotoscoping & Paint",
      "Matte Painting",
    ],
  },
];

export type SmmPackage = {
  name: string;
  price: string;
  period: string;
  highlight?: boolean;
  features: string[];
};

export const smmPackages: SmmPackage[] = [
  {
    name: "Basic Package",
    price: "₹6,799",
    period: "/ Month",
    features: [
      "Social Media Audit",
      "Competitor Analysis",
      "Content Strategy",
      "Monthly Content Calendar",
      "12 Graphic Posts",
      "4 Reels Editing",
      "Caption Writing",
      "Hashtag Research",
      "Posting & Scheduling",
      "Story Management",
      "Monthly Report",
    ],
  },
  {
    name: "Premium Package",
    price: "₹12,799",
    period: "/ Month",
    highlight: true,
    features: [
      "Everything in Basic",
      "20 Graphic Posts",
      "8 Reels",
      "Advanced Content Strategy",
      "Brand Consistency",
      "Trend Research",
      "Priority Support",
      "Performance Insights",
    ],
  },
  {
    name: "Advance Package",
    price: "₹21,299",
    period: "/ Month",
    features: [
      "Complete Social Media Management",
      "30 Posts",
      "12 Reels",
      "Story Management",
      "Content Planning",
      "Competitor Tracking",
      "Trend Research",
      "Monthly Strategy Meeting",
      "Priority Delivery",
    ],
  },
];

export type PriceItem = {
  name: string;
  price: string;
};

export type PriceGroup = {
  key: string;
  icon: string;
  title: string;
  items: PriceItem[];
};

export const priceGroups: PriceGroup[] = [
  {
    key: "graphic-design",
    icon: "Palette",
    title: "Graphic Design",
    items: [
      { name: "Logo Design", price: "Starting at ₹2,099" },
      { name: "Brand Identity", price: "₹6,799 – ₹16,999" },
      { name: "Social Media Post", price: "₹349 / Design" },
      { name: "Carousel Design", price: "₹849" },
      { name: "Marketing Creative", price: "₹699" },
      { name: "Business Card", price: "₹599" },
      { name: "Brochure (Bi-Fold)", price: "₹1,699" },
      { name: "Flyer / Poster", price: "₹699" },
      { name: "Packaging Design", price: "Starting at ₹3,399" },
      { name: "Print Design", price: "Starting at ₹849" },
    ],
  },
  {
    key: "motion-graphics",
    icon: "Clapperboard",
    title: "Motion Graphics",
    items: [
      { name: "Logo Animation", price: "₹2,499" },
      { name: "Motion Poster", price: "₹2,099" },
      { name: "Explainer Video", price: "₹5,999" },
      { name: "Promotional Video", price: "₹4,299" },
      { name: "Animated Advertisement", price: "₹5,999" },
      { name: "Typography Animation", price: "₹2,499" },
    ],
  },
  {
    key: "video-editing",
    icon: "Film",
    title: "Video Editing",
    items: [
      { name: "Instagram Reel", price: "₹849" },
      { name: "YouTube Shorts", price: "₹849" },
      { name: "YouTube Video", price: "Starting at ₹2,499" },
      { name: "Corporate Video", price: "₹5,099" },
      { name: "Product Video", price: "₹3,399" },
      { name: "Podcast Editing", price: "₹2,099" },
      { name: "Documentary Editing", price: "Starting at ₹6,799" },
      { name: "Color Grading", price: "₹1,299" },
      { name: "Sound Design", price: "₹849" },
    ],
  },
  {
    key: "vfx-cgi",
    icon: "Flame",
    title: "VFX & CGI",
    items: [
      { name: "Object Removal", price: "Starting at ₹2,499" },
      { name: "CGI Integration", price: "Starting at ₹5,999" },
      { name: "Green Screen", price: "₹3,399" },
      { name: "Camera Tracking", price: "₹2,499" },
      { name: "Screen Replacement", price: "₹2,499" },
      { name: "Fire / Smoke FX", price: "Starting at ₹4,299" },
      { name: "Rotoscoping & Paint", price: "₹2,099 / Shot" },
      { name: "Matte Painting", price: "Starting at ₹6,799" },
    ],
  },
];

export const expressDelivery = [
  { label: "24 Hours Delivery", extra: "+30%" },
  { label: "48 Hours Delivery", extra: "+20%" },
];

export const paymentTerms = ["50% Advance", "50% Before Final Delivery"];

export const values = [
  {
    icon: "Target",
    title: "Precise",
    desc: "Detail-oriented & perfect execution",
  },
  {
    icon: "Clapperboard",
    title: "Cinematic",
    desc: "Story-driven visuals",
  },
  {
    icon: "Sparkles",
    title: "Impactful",
    desc: "Strong visuals that stay",
  },
  {
    icon: "Mountain",
    title: "Bold",
    desc: "Fearless creativity & innovation",
  },
];

export const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Global Clients" },
];

export const coreValues = [
  { icon: "Heart", title: "Passion", desc: "We love what we do and it shows in our work." },
  { icon: "Lightbulb", title: "Innovation", desc: "We embrace new ideas and cutting-edge tech." },
  { icon: "Gem", title: "Quality", desc: "We never compromise on the quality of visuals." },
  { icon: "Users", title: "Collaboration", desc: "We believe great work comes from teamwork." },
];

export const whyChooseUs = [
  {
    title: "Creative & Strategic Approach",
    desc: "We don't just create visuals; we align them with your brand's growth and market positioning.",
  },
  {
    title: "Premium Quality Design",
    desc: "High-end cinematic aesthetics tailored to make your brand stand out from the noise.",
  },
  {
    title: "Client-Focused Solutions",
    desc: "Your goals are our goals. We build tailored visual experiences that achieve specific results.",
  },
  {
    title: "Fast Turnaround Time",
    desc: "Efficient workflows that guarantee prompt delivery without ever sacrificing quality.",
  },
  {
    title: "Attention to Detail",
    desc: "Precision in every pixel, frame, and transition, ensuring professional visual standards.",
  },
  {
    title: "Modern & Cinematic Visual Style",
    desc: "Cutting-edge VFX, bold layouts, and cinematic grading that demand viewer attention.",
  },
  {
    title: "Reliable Communication",
    desc: "Transparent updates, prompt responses, and structured collaboration from start to finish.",
  },
];

export const testimonials = [
  {
    quote: "ShadowPixels transformed our brand presence with their cinematic video editing. Rishabh and his team have an incredible eye for detail, delivering visuals that truly leave a mark.",
    author: "Alex Carter",
    role: "Founder, ZenithTech",
    rating: 5,
  },
  {
    quote: "Their motion graphics and VFX work is next level. Fast turnaround times, top-tier communication, and absolute perfection in every single frame they delivered.",
    author: "Sarah Jenkins",
    role: "Marketing Lead, Velo Media",
    rating: 5,
  },
  {
    quote: "The social media management services of ShadowPixels helped us double our Instagram engagement in just two months. Their strategic content calendar is a game-changer.",
    author: "Rohan Sharma",
    role: "Tech Content Creator",
    rating: 5,
  },
  {
    quote: "Stunning visual design that captured our brand essence perfectly. They combine creativity and business logic in a way that very few creative studios can do.",
    author: "Marcus Vance",
    role: "CEO, Horizon Agency",
    rating: 5,
  },
];

export const founder = {
  name: "Rishabh Srivastava",
  role: "Founder & Creative Director",
  titles: ["VFX Artist", "Video Editor", "Motion Graphics Designer"],
  bio: "Rishabh Srivastava founded ShadowPixels Studio with a passion for transforming ideas into visually compelling stories. With years of expertise in cinematic VFX, high-end video editing, and dynamic motion graphics, he leads the creative vision of the studio to help brands, businesses, and creators deliver memorable and impactful visual experiences.",
};
