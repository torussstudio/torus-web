// STUDIO FULL PAGE 





import { NavLink } from "@/types";


export const NAV_LINKS: NavLink[] = [
  {
    label: "STUDIO",
    href: "#studio",
  },

  {
    label: "AREAS OF PRACTICE",
    href: "#areas-of-practice",
  },

  {
    label: "ARCHIVE",
    href: "#archive",
  },

  {
    label: "CONTACT",
    href: "#contact",
  },

  {
    label: "BLOG",
    href: "#blog",
  },

  {
    label: "SHOP",
    href: "#shop",
  },
];

// hero

import {
  FaInstagram,
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