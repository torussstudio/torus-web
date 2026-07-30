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