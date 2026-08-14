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
  FaTwitter,
} from "react-icons/fa";

export const SOCIAL_LINKS = [
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

  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

export const socialss = [
  FaInstagram,
  FaPinterest,
  FaTwitter,
];

export const links = [
  { number: "01", label: "CREATIVE" },
  { number: "02", label: "EDITIONS" },
  { number: "03", label: "COHORT" },
];

// artwork

  export const menu = [
    "ARTWORKS & PRINTS",
    "EDITIONS",
    "IDENTITY SYSTEMS",
    "WORKS & STUDIOS",
    "OBJECTS",
  ];

  //creative

   export const cards = [
    {
      number: "01",
      title: "CREATIVE",
      icon: "●",
      desc: "Building brands, systems, and digital experiences with clarity, depth, and character.",
      image:"/images/creative.avif",
      items: [
        "Brand Strategy & Systems",
        "Digital Experiences",
        "Communication Design",
        "Creative Direction",
      ],
      footerTitle: "100+",
      footerDesc: "projects across industries and geographies",
    },
    {
      number: "02",
      title: "EDITIONS",
      icon: "▲",
      desc: "An evolving collection of artworks, objects, merchandise, and experimental explorations.",
      image:"/images/editions.avif",
      items: [
        "Artworks & Creative Explorations",
        "Merchandise",
        "Objects",
        "Publishing",
      ],
      footerTitle: "6000+",
      footerDesc: "artworks curated, created, & sourced since 2015",
    },
    {
      number: "03",
      title: "COHORT",
      icon: "■",
      desc: "Creating spaces for learning, dialogue, collaboration, and collective creative growth.",
      image:"/images/cohart.avif",
      items: [
        "Workshops",
        "Exhibitions",
        "Conversations",
        "Collective Initiatives",
      ],
      footerTitle: "",
      footerDesc:
        "A growing network of creators, students, artists, and collaborators",
    },
  ];

  // archive

  export const works = [
  {
    year: "2026",
    country: "SPAIN",
    title: "THE SPANISH ALCHEMIST",
    image: "/trust-hero.jpg",
    desc: "Building a skincare brand rooted in freshness, performance, and cultural identity.",
    tags: ["Brand Identity", "Packaging", "Digital"],
    shape: "circle",
  },
  {
    year: "2025",
    country: "INDIA",
    title: "THE INVISIBLE MUSEUM",
    image: "/trust-hero.jpg",
    desc: "Reimagining heritage discovery through public interaction and spatial storytelling.",
    tags: ["Spatial Experience", "Cultural Initiative"],
    shape: "square",
  },
];

// areas

 export const practices = [
  {
    number: "01",
    title: "STRATEGY &\nIDENTITY SYSTEMS",
    desc: "Building brands with clarity, character, and long-term coherence.",
    image:"/images/communication.avif",
    items: [
      "UI/UX Design",
      "Website Design & Development",
      "Interaction Design",
      "Digital Systems",
      "Motion & Microinteractions",
    ],
  },

  {
    number: "02",
    title: "DIGITAL\nEXPERIENCES",
    desc: "From websites to product interfaces, we create digital experiences that balance usability, storytelling, and visual clarity.",
    image:"/images/creativedirection.avif ",
    items: [
      "UI/UX Design",
      "Website Design & Development",
      "Interaction Design",
      "Digital Systems",
      "Motion & Microinteractions",
    ],
  },

  {
    number: "03",
    title: "COMMUNICA-\nTION&CONTENT",
    desc: "Creating systems of expression across campaigns, content, and ongoing brand communication.",
    image:"/images/objects.avif",
        items: [
      "UI/UX Design",
      "Website Design & Development",
      "Interaction Design",
      "Digital Systems",
      "Motion & Microinteractions",
    ],
  },

  {
    number: "04",
    title: "CREATIVE\nDIRECTION",
    desc: "Developing visual systems and narratives that guide products, campaigns, and evolving cultural identities.",
    image:"/images/strategy.avif",
        items: [
      "Campaign Direction",
      "Art Direction",
      "Brand Systems",
      "Visual Storytelling",
      "Motion Direction",
    ],
  },

  {
    number: "05",
    title: "OBJECTS &\nINSTALLATIONS",
    desc: "Exploring physical experiences through objects, environments, and tactile systems.",
    image:"/images/digital.avif",
    items: [
      "Spatial Design",
      "Installation Concepts",
      "Material Systems",
      "Interactive Objects",
      "Exhibition Design",
    ],
  },
];

// studionote

export const values = [
  {
    no: "01",
    title: "CLARITY",
    sub: "OVER NOISE",
    green: false,
  },
  {
    no: "02",
    title: "CURIOSITY",
    sub: "OVER ASSUMPTION",
    green: true,
  },
  {
    no: "03",
    title: "PROCESS",
    sub: "OVER POSTURING",
    green: false,
  },
  {
    no: "04",
    title: "GOOD",
    sub: "CONVERSATIONS",
    green: false,
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
  studioImage: string;
  studioImageAlt: string;
  closingCaption: string;
};

export const narrative: Narrative = {
  heading: "RETHINKING FRESHNESS IN SKINCARE.",
  body: "When the project came to us, it was to build a launch-ready brand system around a clear idea of skincare made fresh, in smaller batches. And when we began exploring the project, what stood out was not just the product itself, but the larger contradiction surrounding the skincare industry. The category had become increasingly focused on shelf life, preservation, and mass distribution.",
  eyebrow: "The challenge was more interesting:",
  statement: "how to make people believe in the idea of freshly made skincare.",
  detailImage: "/images/cohart.avif",
  detailImageAlt: "Person viewing an art installation through glass",
  detailCaption:
    "The idea of \"fresh\" is already a familiar word in skincare. It is often used loosely to suggest something natural. But the brand's idea of fresh was connected to the time closest to manufacturing, when the formulation is newly prepared, and the product is closer to its peak performance.",
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
    alt: "Hand writing in a notebook beside coffee",
    className:
      "left-[14%] top-0 w-[25%] aspect-[170/128]",
  },
  {
    src: "/images/collage-2.jpg",
    alt: "Small archival workshop photo",
    className:
      "left-[-3%] top-[21%] w-[10.5%] aspect-[71/94]",
  },
  {
    src: "/images/collage-3.jpg",
    alt: "Team gathered around a window discussing work",
    className:
      "left-[21%] top-[24%] w-[18.5%] aspect-[125/222]",
  },
  {
    src: "/images/collage-4.jpg",
    alt: "Sunlit stack of printed papers",
    className:
      "left-[58.5%] top-[9%] w-[22.5%] aspect-[151/210]",
  },
  {
    src: "/images/collage-5.jpg",
    alt: "Close-up of hands on a keyboard",
    className:
      "left-[78%] top-[45%] w-[20%] aspect-[135/110]",
  },
  {
    src: "/images/collage-6.jpg",
    alt: "Studio workspace with pinned reference boards",
    className:
      "left-[-5.7%] top-[58%] w-[55.5%] aspect-[373/275]",
    mobileAspect: "aspect-[373/275]",
  },
];

export const mobileAspects = [
  "aspect-[170/128]",
  "aspect-[71/94]",
  "aspect-[125/222]",
  "aspect-[151/210]",
  "aspect-[135/110]",
  "aspect-[373/275]",
];