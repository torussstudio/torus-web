import { StoryCards } from '../components/sections/studio/Studiostory';
export const NAV_LINKS = [
  {
    label: "STUDIO",
    href: "/studio",
  },
  {
    label: "AREAS OF PRACTICE",
    href: "/areas-of-practice",
  },
  {
    label: "ARCHIVE",
    href: "/archive",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
  {
    label: "BLOG",
    href: "/blog",
  },
  {
    label: "SHOP",
    href: "/shop",
  },
];

// hero

import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

export const SOCIAL_LINKS = [

{
    icon: FaLinkedin,
    href: "https://twitter.com",
    label: "Twitter",
  },

  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },

  {
    icon: FaPinterest,
    href: "https://pinterest.com",
    label: "Pinterest",
  },

  
];

export const socialss = [
  FaLinkedin,
  FaInstagram,
  FaPinterest,
  
];

export const links = [
  { number: "01", label: "Creative" },
  { number: "02", label: "Editions" },
  { number: "03", label: "Cohort" },
];

// artwork

 export const spaces = [
   {
     title: "Work Spaces",
     image: "/images/artwork1.avif",
   },
   {
     title: "Experiments",
     image: "/images/cohart.avif",
   },
   {
     title: "Collaboration",
     image: "/images/creative.avif",
   },
 ];
 
 export const stats = [
  {
    value: "100+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Years of practice",
  },
  {
    value: "6000+",
    label: "Artworks curated, created and sourced",
  },
];

  //creative

   export const cards = [
  {
    number: "01",
    category: "Creative",
    title: "Brands, systems, and digital experiences.",
    icon: "●",
    desc: "We help businesses become clearer, more distinctive, and more coherent across the ways they are seen, understood, and experienced.",
    image: "/images/creative.avif",
    items: [
      "Brand Strategy & Identity",
      "Websites & Digital Experiences",
      "Communication & Content Systems",
      "Creative Direction",
    ],
    footerTitle: "100+",
    footerDesc: "projects across industries and geographies",
  },

  {
    number: "02",
    category: "Editions",
    title: "Artworks, objects, and physical expressions.",
    icon: "▲",
    desc: "We work with architects, interior designers, brands, institutions, and individuals to curate, source, create, and commission artworks and other physical expressions.",
    image: "/images/editions.avif",
    items: [
      "Art Consultation",
      "Artwork Sourcing & Creation",
      "Objects & Merchandise",
      "Print & Publishing",
    ],
    footerTitle: "6000+",
    footerDesc: "artworks curated, created,  sourced since 2015",
  },

  {
    number: "03",
    category: "Cohort",
    title: "Learning, dialogue, and collective creative experiences.",
    icon: "■",
    desc: "Cohort brings people together through workshops, conversations, exhibitions, cultural initiatives, and collaborative projects.",
    image: "/images/cohart.avif",
    items: [
      "Workshops",
      "Exhibitions",
      "Conversations",
      "Collective Initiatives",
    ],
    footerTitle: "",
    footerDesc:
      "A growing network of creators, students, artists, institutions and collaborators.",
  },
];
  // archive

 export const works = [
  {
    year: "2026",
    country: "SPAIN",
    title: "The Spanish Alchemist",
    image: "/trust-hero.jpg",
    desc: "Building a skincare brand around freshness, efficacy, and a different way of thinking about shelf life.",
    tags: [
      "Brand Strategy",
      "Identity",
      "Packaging",
      "Digital",
      "Creative Direction",
    ],
  },

  {
    year: "2026",
    country: "INDIA",
    title: "Invisible Museum",
    image: "/trust-hero.jpg",
    desc: "Reimagining heritage discovery through public interaction and spatial storytelling.",
    tags: [
      "Spatial Experience",
      "Cultural Initiative",
    ],
  },

  {
    year: "XXXX",
    country: "USA / EUROPE / AUSTRALIA",
    title: "[ International Project ]",
    image: "/trust-hero.jpg",
    desc: "[One-line description]",
    tags: [
      "Strategy",
      "Identity",
      "Digital",
    ],
  },
];


// areas

 type Practice = {
   id: string;
   title: string[];
   description: string;
   details: string[];
   image: string;
 };
 
 export const practices: Practice[] = [
   {
     id: "01",
     title: ["Branding", "and Strategy"],
     description:
       "Building clear, distinctive brands and the systems that hold them together.",
     image: "/images/practice-branding.jpg",
     details: [
       "Brand Strategy /",
       "Visual Identity /",
       "Brand Positioning /",
       "Naming & Messaging /",
       "Brand Guidelines",
     ],
   },
 
   {
     id: "02",
     title: ["Web", "and Digital"],
     description:
       "Creating websites and digital products that balance usability, expression, storytelling, and business goals.",
     image: "/images/practice-web.jpg",
     details: [
       "Website Design & Development ",
       "Ecommerce / Motion / UI/UX /",
       "Digital Products /",
       "Interaction Design",
     ],
   },
 
   {
     id: "03",
     title: ["Communication", "and Growth"],
     description:
       "Helping brands communicate consistently across campaigns, content, digital channels, and everyday customer interactions.",
     image: "/images/practice-communication.jpg",
     details: [
       "Campaign Strategy /",
       "Content & Communication /",
       "Social Media /",
       "Digital Campaigns /",
       "Creative Direction",
     ],
   },
 
   {
     id: "04",
     title: ["Art", "and Editions"],
     description:
       "Bringing art and physical expression into spaces, brands, and cultural projects.",
     image: "/images/practice-art.jpg",
     details: [
       "Art Direction /",
       "Art Curation /",
       "Artwork Sourcing /",
       "Print & Publishing /",
       "Objects & Editions",
     ],
   },
 
   {
     id: "05",
     title: ["Culture and", "Collective Projects"],
     description:
       "Creating experiences that bring people together around learning, creativity, culture, and exchange.",
     image: "/images/practice-culture.jpg",
     details: [
       "Workshops & Learning /",
       "Exhibitions /",
       "Cultural Programs /",
       "Collaborative Projects /",
       "Community Initiatives",
     ],
   },
 ];
// STUDIO SECTION

// hero

export const tabs = [
  { number: "01", lines: ["A BRAND AFFECTS", "PERCEPTION"] },
  { number: "02", lines: ["A WEBSITE", "AFFECTS TRUST"] },
  { number: "03", lines: ["A SPACE AFFECTS", "BEHAVIOUR"] },
  { number: "04", lines: ["A SYSTEM AFFECTS", "CLARITY"] },
  { number: "05", lines: ["A DETAIL AFFECTS", "CREDIBILITY"] },
  { number: "06", lines: ["A STORY AFFECTS", "CONNECTION"] },
];

export const socials = [
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaPinterest, href: "#", label: "Pinterest" },
];

// studiohero

export const cardss = [
  {
    title: "Branding gradually led to communication systems.",
  },
  {
    title: "Communication led to digital experiences.",
  },
  {
    title: "Digital experiences led to storytelling.",
  },
  {
    title: "Storytelling led to atmosphere, environments, objects, archives, and collective initiatives. ",
  },
];

// studio expression

type Expression = {
  index: string;
  name: string;
  items: string[];
  description: string;
  image: string;
  alt: string;
};

 export const expressions: Expression[] = [
  {
    index: "01",
    name: "CREATIVE",
    items: [
      "Branding & Strategy",
      "Visual Identity Systems",
      "Websites & UI/UX",
      "Communication Design & Storytelling",
      "Digital Ecosystems",
      "Long-term Brand Thinking",
    ],
    description:
      "Focused on perception, communication, digital experiences, and systems thinking — shaping how businesses, founders, and institutions are understood, experienced, and remembered over time.",
    image: "/images/digital.avif",
    alt: "Toruss designer at work in the studio",
  },
  {
    index: "02",
    name: "EDITIONS",
    items: [
      "Artworks",
      "Objects",
      "Prints",
      "Merchandise",
      "Spatial Atmosphere",
      "Creative Experimentation",
    ],
    description:
      "The studio's slower, more exploratory expression — where design drifts into art, materiality, collectibility, and observation.",
    image: "/images/creative.avif",
    alt: "Studio space with editions and objects on display",
  },
  {
    index: "03",
    name: "COHORT",
    items: [
      "Workshops",
      "Exhibitions",
      "Screenings & Conversations",
      "Learning Initiatives",
      "Public Explorations",
      "Interdisciplinary collaborations",
    ],
    description:
      "The collective and cultural side of the studio — where it opens itself outward, into dialogue, experimentation, and community.",
    image: "/images/editions.avif",
    alt: "Group of collaborators gathered around a table",
  },
];

// studiowethink

export const bullets = [
  "A hospitality brand can feel calming before a guest \n even arrives.",
  "A digital product can feel trustworthy beforea single \a feature is explored.",
  "A beautifully paced website can quietly create confidence without \n the  user fully realizing why.",
];

// culturesection

export const cultureGridImages = [
  { src: "/images/strategy.avif", alt: "Team member working at a desk" },
  { src: "/images/heroimage.avif", alt: "Silhouette during a collective screening" },
  { src: "/images/editions.avif", alt: "Team member outdoors on a break" },
];

// whatwevalue section

export const valuess = [
  { number: "01", lines: ["CLARITY", "OVER NOISE"] },
  { number: "02", lines: ["DEPTH OVER", "TREND CYCLES"] },
  { number: "03", lines: ["SYSTEMS OVER", "SURFACE STYLING"] },
];

export const futureImages = [
  { src: "/images/editions.avif", alt: "Team collaborating around a table" },
  { src: "/images/footer.avif", alt: "Person seated facing a projected screen" },
  { src: "/images/objects.avif", alt: "Person leaning on a railing outdoors" },
];

// ARCHIVE SECTION

// Archive Hero

type Project = {
  title: string;
  location: string;
  period: string;
  projectLead: string;
  contributors: string[];
  heroImage: string;
  heroImageAlt: string;
  thumbImage: string;
  thumbImageAlt: string;
};

export const project: Project = {
  title: "THE SPANISH ALCHEMIST",
  location: "Alicante, Spain",
  period: "2025 – Present",
  projectLead: "Hari Sankar",
  contributors: [
    "Abhinav",
    "Archana",
    "Arun Anand",
    "Vibish",
    "Raunak",
    "Kishor",
  ],
  heroImage: "/images/spanish-alchemist-main.jpg",
  heroImageAlt: "Designer reviewing mood-board photographs and fabric swatches",
  thumbImage: "/images/spanish-alchemist-thumb.jpg",
  thumbImageAlt: "Hand holding a stack of polaroid photographs",
};

// Project Narrative

type Narrative = {
  heading: string; // two-line heading
  body: string;
  eyebrow: string;
  statement: string; // big pull-quote style line, wraps to 2 lines
  detailImage: string;
  detailImageAlt: string;
  detailCaption: string;
   detailSubCaption: string;
  studioImage: string;
  studioImageAlt: string;
  closingCaption: string;
};

export const narrative: Narrative = {
  heading: "Rethinking freshness in skincare.",
  body: "When the project came to us, it was to build a launch-ready brand system around a clear idea of skincare made fresh, in smaller batches. And when we began exploring the project, what stood out was not just the product itself, but the larger contradiction surrounding the skincare industry. The category had become increasingly focused on shelf life, preservation, and mass distribution.",
  eyebrow: "The challenge was more interesting:",
  statement: "how to make people believe in the idea of freshly made skincare.",
  detailImage: "/images/cohart.avif",
  detailImageAlt: "Person viewing an art installation through glass",
  detailCaption:
    "The idea of \"fresh\" is already a familiar word in skincare. It is often used loosely to suggest something natural. But the brand's idea of fresh was connected to the time closest to manufacturing, when the formulation is newly prepared, and the product is closer to its peak performance.",
  detailSubCaption:"The challenge was not just to say \"freshly made skincare\,” but to help customers understand and believe what freshness actually means.",
    studioImage: "/images/studio.avif",
  studioImageAlt: "Design team collaborating around a table in a bright studio loft",
  closingCaption:
    "So we approached the project not as a conventional skincare identity but as a broader exercise in building a world around freshness, proof, and modern ritual.",
};

// Project Overview

type Overview = {
  statement: string;
  location: string;
  period: string;
  services: string[]; // rendered as a "/"-joined line, wraps naturally
  image: string;
  imageAlt: string;
};

export const overview: Overview = {
  statement:
    "TURNING A FRESH SKINCARE IDEA FROM ALICANTE INTO A LAUNCH-READY BRAND, PACKAGING, E-COMMERCE, AND DIGITAL SYSTEM.",
  location: "Alicante, Spain",
  period: "2025 – Present",
  services: [
    "Naming",
    "Identity System",
    "Packaging",
    "E-Commerce",
    "Social Media",
    "Email Marketing",
  ],
  image: "/images/skincare-hero.jpg",
  imageAlt: "Creative working at a desk surrounded by colorful packaging mockups",
};

// STudio MoodBoard

export const images = [
  {
    src: "/images/collage-1.jpg",
    alt: "Hands flipping through printed pages on a desk",
    className: "left-[20%] top-[0%] w-[26%] h-[9%]",
  },
  {
    src: "/images/collage-2.jpg",
    alt: "People gathered at a counter",
    className: "left-[1%] top-[15.33%] w-[10%] h-[6.67%]",
  },
  {
    src: "/images/collage-3.jpg",
    alt: "Stack of papers on a desk lit by sunlight",
    className: "left-[58%] top-[8%] w-[22%] h-[12.67%]",
  },
  {
    src: "/images/collage-4.jpg",
    alt: "Team gathered around a table by a window",
    className: "left-[27%] top-[18%] w-[19%] h-[15.33%]",
  },
  {
    src: "/images/collage-5.jpg",
    alt: "Close-up of hands on a mixing console",
    className: "left-[73%] top-[32%] w-[20%] h-[7.33%]",
  },
  {
    src: "/images/collage-6.jpg",
    alt: "Person mixing at a desk with a coffee mug",
    className: "left-[11%] top-[39.33%] w-[38%] h-[10%]",
  },
  {
    src: "/images/collage-2.jpg",
    alt: "Two people reviewing prints on a large table",
    className: "left-[68%] top-[50%] w-[37%] h-[16.67%]",
  },
  {
    src: "/images/collage-5.jpg",
    alt: "Hands sorting through printed photos",
    className: "left-[17%] top-[58.67%] w-[16%] h-[10%]",
  },
 {
  src: "/images/creative.avif",
  alt: "Studio wall pinned with sketches and reference photos beside a scale model",
  className: "left-[2%] top-[74.67%] w-[95%] h-[25.33%]",
},
];

// Per-image aspect ratio for the mobile single-column stack,
// derived from the same w/h proportions as the desktop layout above.
export const mobileAspects = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[9/16]",
  "aspect-[5/4]",
  "aspect-video",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[16/10]",
];