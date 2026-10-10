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
  { number: "01", label: "Creative", href: "#creative" },
  { number: "02", label: "Editions", href: "#editions" },
  { number: "03", label: "Cohort", href: "#cohort" },
];

// artwork

 // photo row — auto-scrolls sideways (dummy descriptions, swap later)
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
   {
     title: "Editions",
     image: "/images/editions.avif",
   },
   {
     title: "Conversations",
     image: "/images/curiosity.avif",
   },
   {
     title: "Direction",
     image: "/images/creativedirection.avif",
   },
 ];
 
 export const stats = [
  {
    value: "100+",
    label: "Projects",
    lines: ["Projects"],
  },
  {
    value: "10+",
    label: "Years of practice",
    lines: ["Years", "of practice"],
  },
  {
    value: "6000+",
    label: "Artworks curated, created and sourced",
    lines: ["Artworks curated, created", "and sourced"],
  },
];

  //creative

   export const cards = [
  {
    number: "01",
    category: "Creative",
    title: "Brands, systems, and digital experiences.",
    titleLines: ["Brands, systems, and", "digital experiences."],
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
    href: "#",
  },

  {
    number: "02",
    category: "Editions",
    title: "Artworks, objects, and physical expressions.",
    titleLines: ["Artworks, objects, and", "physical expressions."],
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
    footerDesc: "artworks curated, created, and sourced since 2015.",
    href: "#",
  },

  {
    number: "03",
    category: "Cohort",
    title: "Learning, dialogue, and collective creative experiences.",
    titleLines: ["Learning, dialogue,", "and collective creative", "experiences."],
    icon: "■",
    desc: "Cohort brings people together through workshops, conversations, exhibitions, cultural initiatives, and collaborative projects.",
    image: "/images/cohart.avif",
    items: [
      "Workshops & Learning",
      "Exhibitions",
      "Conversations",
      "Collective Initiatives",
    ],
    footerTitle: "",
    footerDesc:
      "A growing network of creators, students, artists, institutions, and collaborators.",
    href: "#",
  },
];
  // archive

 export const works = [
  {
    year: "2026",
    country: "SPAIN",
    title: "The Spanish Alchemist",
    image: "/images/alchemist-desk-overhead.jpg",
    href: "/archive/the-spanish-alchemist",
    desc: "Building a skincare brand around freshness, efficacy, and a different way of thinking about shelf life.",
    descLines: ["Building a skincare brand around freshness,", "efficacy, and a different way of thinking about", "shelf life."],
    tags: [
      "Brand Strategy",
      "Identity",
      "Packaging",
      "Digital",
      "Creative Direction",
    ],
  },

  {
    year: "2023",
    country: "USA",
    title: "Exult Global",
    image: "/trust-hero.jpg",
    href: "#",
    desc: "Building a SaaS/RPA automation brand across identity, digital growth, events, and enterprise communication.",
    descLines: ["Branding / Website / SEO / Content Strategy / UI/UX / Email Marketing / Pitch Decks"],
    tags: [
      "Brand Strategy",
      "Website",
      "SEO",
      "UI/UX",
      "Email Marketing",
      "Pitch Decks"

    ],
  },
];


// areas

 type Practice = {
   id: string;
   title: string[];
   /** design line breaks (desktop) */
   description: string[];
   details: string[];
   /** leave empty until the photo is added to /public/images */
   image?: string;
 };
 
 export const practices: Practice[] = [
   {
     id: "01",
     title: ["Branding", "and Strategy"],
     description:
       ["Building clear,", "distinctive brands and", "the systems that hold", "them together."],
     details: [
       "Brand Strategy /",
       "Positioning  /",
       "Visual Identity  /",
       " Brand Architecture /",
       "Packaging /",
       "Brand Messaging",
     ],
   },
 
   {
     id: "02",
     title: ["Web", "and Digital"],
     description:
       ["Creating websites and digital", "products that balance usability,", "expression, storytelling, and", "business goals."],
     details: [
       "Website Design & Development /",
       "Ecommerce / Motion / UI/UX /",
       "Digital Products /",
       "Interaction Design",
     ],
   },
 
   {
     id: "03",
     title: ["Communication", "and Growth"],
     description:
       ["Helping brands communicate", "consistently across campaigns,", "content, digital channels, and", "everyday customer interactions."],
     details: [
       "Campaigns  /",
       "Content Systems  /",
       "Social Communication /",
       "Creative Direction  /",
       "Copy & Narrative /",
       " Ongoing Brand Communication",
     ],
   },
 
   {
     id: "04",
     title: ["Art", "and Editions"],
     description:
       ["Bringing art and", "physical expression", "into spaces, brands,", "and cultural projects."],
     details: [
       "Art Consultation  /",
       "Artwork Sourcing  /",
       "Commissions /",
       "Merchandise  /",
       " Print & Publishing /",
       "Objects",
     ],
   },
 
   {
     id: "05",
     title: ["Culture and", "Collective Projects"],
     description:
       ["Creating experiences that", "bring people together around", "learning, creativity, culture,", "and exchange."],
     details: [
       "Workshops /",
       "Exhibitions /",
       " Installations /",
       "Collaborations /",
       "Creative Gatherings",
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


// =========================================================
// ARCHIVE PAGE — The Spanish Alchemist case study
// ---------------------------------------------------------
// Text + images for /archive. To swap a placeholder for a
// real photo, set `src` (e.g. "/images/tsa-hero.jpg"). When
// `src` is empty the page shows a labelled placeholder.
// =========================================================

export type ArchiveMedia = {
  src?: string;
  alt: string;
  /** "dark" renders the solid dark block used in the design */
  tone?: "light" | "dark";
};

export const tsaHero = {
  title: "The Spanish Alchemist",
  intro:
    "Turning a fresh skincare idea from Alicante into a launch-ready brand, packaging, e-commerce, and digital system.",
  services: [
    "Naming / Identity System / Packaging / E-Commerce",
    "Social Media / Email Marketing",
  ],
  meta: ["Barcelona, Spain", "2025 - Present"],
  team:
    "Hari (Lead), Abhinav, Archana, Sreejith, Arun Anand, Vibish, Raunak, Kishor, Rahul",
  heroImage: {
    src: "/images/spanish-alchemist-main.jpg",
    alt: "The Spanish Alchemist — brand hero",
  } as ArchiveMedia,
};

export const tsaChallenge = {
  label: "The Challenge",
  heading: ["Rethinking freshness", "in skincare."],
  intro:
    "When the project came to us, the task was to build a complete brand ecosystem around a clear idea of skincare made fresh, in smaller batches. And when we began exploring the project, what stood out was not just the product itself, but the larger contradiction surrounding the skincare industry. The category had become increasingly focused on shelf life, preservation, and mass distribution.",
  leadIn: "The challenge was more interesting:",
  highlight: "how to make people believe in the idea of freshly made skincare.",
  left:
    "Freshness is already a familiar idea in skincare. It is often used loosely to suggest something natural. But the brand’s idea of fresh was connected to the time closest to manufacturing, when the formulation is newly prepared, and the product is closer to its peak performance.",
  right: [
    "The challenge was not just to say “freshly made skincare,” but to help customers understand and believe what freshness actually means.",
    "So we approached the project not as a conventional skincare identity but as a broader exercise in building a world around freshness, proof, and modern ritual.",
  ],
};

export const tsaQuestion = {
  label: "The Question",
  body:
    "From naming and identity to packaging, e-commerce, social media, email marketing, digital assets, and content direction, the project became a full brand system ready for launch, built around one question:",
  question: "How do we make freshness feel real to the customer?",
  image: { alt: "Hand sketching molecular bubble forms" } as ArchiveMedia,
};

export const tsaNaming = {
  label: "The Naming",
  heading: ["Naming the world before", "designing it."],
  body:
    "The name ‘The Spanish Alchemist’ was finalized after exploring multiple naming directions. It gave the brand a world that could hold both science and emotion. The idea of the alchemist brought in a strong creative base, hands-on experimentation, transformation, natural ingredients, ritual, precision, and the search for something rare. It also allowed us to build symbolic references such as the Philosopher’s Stone, the cycle of seasons, and the ritualistic nature of selfcare, helping us move away from the usual skincare language and build a brand that felt more distinct.",
  images: [
    { src: "/images/tsa-meeting.jpg", alt: "Naming workshop" },
    { src: "/images/tsa-installation.jpg", alt: "Projection installation" },
    { src: "/images/tsa-field.jpg", alt: "Field exploration" },
  ] as ArchiveMedia[],
};

export const tsaIdentity = {
  label: "The Identity",
  heading: ["A personal identity with", "a proof system."],
  body: [
    "The identity was built to feel both human and trustworthy. The brand did not have to look purely clinical. It also did not have to look overly soft, beige, or generic. TSA could sit in a more ownable space: freshly prepared skincare from its lab in Alicante, Spain, shaped with Mediterranean warmth.",
    "The challenge was to create an identity that could work across bottles, boxes, stickers, seals, tissue paper, social posts, website pages, printed inserts, and emailers. TSA needed a flexible identity system.",
  ],
  image: { alt: "Moodboard with material swatches" } as ArchiveMedia,
};

export const tsaSystem = {
  label: "The System",
  heading: ["Building the world of", "the Alchemist."],
  intro:
    "We created a flexible identity system with three key layers: the full The Spanish Alchemist logo, the shorter TSA signature, and the circular TSA seal. Each had a specific role.",
   layers: [
    {
      title: "The seal",
      text: ["like a freshness stamp, a mark of trust,", "approval, and authenticity."],
      image: { alt: "The seal" } as ArchiveMedia,
    },
    {
      title: "The full logo",
      text: ["created brand presence."],
      image: { alt: "The full logo" } as ArchiveMedia,
    },
    {
      title: "The TSA signature",
      text: ["worked across smaller moments."],
      image: { alt: "The TSA signature" } as ArchiveMedia,
    },
  ],

    noteLabel: "The Impact",
  note:
    "Instead of creating a purely corporate skincare logo, we developed a handcrafted signature-style mark. It gave the brand the feeling of a real presence behind the product: the Alchemist, someone involved in the making, testing, and care behind each formulation. This thinking extended into the packaging language as well.",
  signature: {
    caption: "Signature mark",
    image: { alt: "Signature mark", tone: "dark" } as ArchiveMedia,
  },
  seal: {
    caption: "The seal",
    image: { alt: "The seal", tone: "dark" } as ArchiveMedia,
  },
};

export const tsaProof = {
  label: "Proof",
  heading: ["Making “made fresh”", "visible."],
  body:
    "In skincare, freshness is usually hidden inside production cycles, batch records, and expiry dates. For TSA, we brought those details forward. Manufacturing dates, batch codes, handwritten freshness labels, and product codes became part of the brand story and the customer experience rather than being treated as boring mandatory information.",
  points: [
    "Manufacturing Dates",
    "Batch Codes",
    "Handwritten Freshness Labels",
    "Product Codes",
  ],
  statement: "Made Fresh Just For You",
  statementNote:
    "Lines like “Made Fresh Just For You” became a simple expression of this world.",
  summary:
    "Together, these details made the brand’s freshness process more visible to the customer. The freshness, timing, and care behind each product were made visible through a language of dates, codes, and labels. The narrative, proof points, and visual language helped make the fresh manufacturing concept clearly felt.",
  image: { alt: "Freshness label detail", tone: "dark" } as ArchiveMedia,
};

export const tsaProduct = {
  label: "The Product",
  heading: ["Making the product", "instantly recognisable."],
  subheading: "The red bottle, the code, and the shelf memory.",
  body: [
    "One of the strongest visual decisions was the translucent red bottle that extended the alchemist world into the product itself. Its colour drew from the idea of the Philosopher’s Stone, reflecting subtle cues of intensity, transformation, and potency. It made the product feel active, alive, and instantly recognisable.",
    "However, the product line also needed clear navigation, helping customers understand the range while keeping the brand visually unified. So instead of changing the entire bottle language for every product, we retained the red bottle as the core brand cue and built a smaller coding system through geometric markers, accent colours, line labels, and visual details. This kept each product distinct while keeping the range recognisable, easy to understand, and scalable.",
  ],
  imageMain: { alt: "Model holding the red TSA bottle" } as ArchiveMedia,
  imageSecondary: { alt: "TSA product range on a tray" } as ArchiveMedia,
};

export const tsaPackaging = {
  label: "Packaging",
  heading: ["Packaging as the first", "conversation."],
  left:
    "The packaging system was designed as the customer’s first physical conversation with the brand. Each panel had a clear role, from introducing the promise and explaining the formulation to showcasing the product line, skin concerns, ingredients, usage, QR codes, batch details, and a freshness message.",
  right: [
    "Micro and nano encapsulation technologies also became important visual and communication anchors. They helped bring out the brand’s focus on potency, formulation precision, laboratory testing, and controlled active delivery. We translated this into soft molecular graphics inspired by capsules, cells, bubbles, and active delivery systems. These forms helped the science feel understandable without making the brand feel clinical or intimidating.",
    "Small details like structured typography, handwritten labels, seals, product codes, molecular graphics, batch information, and lab-inspired layouts played an important role too. Together, they made the brand feel precise, personal, credible, and considered.",
  ],
  wide: { alt: "Model with TSA box and bottle" } as ArchiveMedia,
  pair: [
    { alt: "Cleanser packaging dieline" },
    { alt: "Serum packaging dieline" },
  ] as ArchiveMedia[],
};

export const tsaSensory = {
  // NOTE: the design PDF repeats "THE PRODUCT" here — confirm the label
  label: "The Product",
  heading: "The Sensory Layer of the Brand",
  body: [
    "Material direction shaped how TSA felt across both physical and digital touchpoints.",
    "Glass, texture, depth, light, and subtle sensory cues informed the bottle, packaging, website, social content, and digital assets. The same feeling of tactility was carried from the product in hand to the way it appeared on screen. This helped the brand feel consistent across every interaction.",
  ],
  image: { alt: "People gathered in a warm interior" } as ArchiveMedia,
};

export const tsaDigital = {
  label: "Digital",
  heading: ["Extending TSA", "beyond packaging."],
  body: [
    "We extended the same system into a successful e-commerce website, digital assets, social media design, email marketing, and content direction. The red bottle, TSA seal, lab-inspired typography, square brackets, handwritten labels, product codes, molecular graphics, playful print pieces, and Spanish cues became repeated memory markers across every platform.",
    "On social media, freshness was also communicated and shown through culture, lifestyle, science, and everyday freshness cues: flowers, bread, apples, sea, sunlight, skin, laboratory details, and the atmosphere of Alicante. This gave the brand more room to speak. TSA could talk about skincare but also about time, preparation, freshness, routine, and care without sounding repetitive.",
  ],
  wide: { alt: "Campaign portrait" } as ArchiveMedia,
  trio: [
    { alt: "Packaging dieline 1" },
    { alt: "Packaging dieline 2" },
    { alt: "Packaging dieline 3" },
  ] as ArchiveMedia[],
};

export const tsaOutcome = {
  label: "The Outcome",
  heading: ["Building a complete brand", "ecosystem."],
  intro: "The Spanish Alchemist started as a fresh skincare concept.",
  highlight:
    "It became a complete brand system built across name, identity, packaging, website, content, social media, email, and customer experience.",
  columns: [
    "Together, these choices helped TSA enter the market with a clear identity, a distinct visual presence, a strong product language, and a brand experience that made freshness feel visible, personal, and easy to trust.",
    "The work has also continued beyond the initial launch system. As the brand grows, we continue to support TSA across content, campaigns, digital communication, lead-generation, and new customer experiences, strengthening the brand’s presence across different touchpoints.",
    "What has been built so far is a living brand ecosystem; it is a foundation that keeps expanding with the brand, shaped by new ideas, market responses, and the opportunities that continue to emerge.",
  ],
  image: { alt: "Two models with TSA bottles" } as ArchiveMedia,
  collage: { alt: "TSA collage — sea, portrait and lab" } as ArchiveMedia,
};

export const tsaReflections = {
  heading: "Reflections",
  statement:
    "The Spanish Alchemist became an exploration into freshness, sensory experience, intentional consumption, and the relationship between science and ritual, rather than just a skincare identity.",
  note:
    "For us, the project represented the kind of work we are most drawn to, where branding becomes a way of shaping not just perception, but philosophy, behavior, and experience.",
};

// =========================================================
// ARCHIVE PAGE — Exult Global case study
// =========================================================

// The design (Illustrator) never breaks a line inside a hyphenated word
// like "low-code" or "25–30K"; browsers do. A word-joiner after
// each in-word hyphen keeps those words together, so lines wrap like the
// design. Image paths (`src`) are left untouched.
function keepHyphenatedWords<T>(value: T): T {
  if (typeof value === "string") {
    return value.replace(/(\w)([-–])(?=\w)/g, "$1$2\u2060") as T;
  }
  if (Array.isArray(value)) return value.map(keepHyphenatedWords) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, k === "src" ? v : keepHyphenatedWords(v)]),
    ) as T;
  }
  return value;
}

export const exultHero = keepHyphenatedWords({
  title: "Exult Global",
  intro:
    "Building a SaaS/RPA automation brand across identity, digital growth, events, and enterprise communication.",
  services: [
    "Branding / Website / SEO / Content Strategy / Events / UI/UX /",
    "Email Marketing / Pitch Decks / Explainer Videos",
  ],
  meta: ["California, USA", "2023 – Present", "SaaS & RPA"],
  team:
    "Hari, Archana, Sreejith, Arun Anand, Vibish, Raunak, Aishwarya, Ranjith",
  heroImage: { alt: "Exult Global — brand hero", tone: "dark" } as ArchiveMedia,
});

export const exultChallenge = keepHyphenatedWords({
  label: "The Challenge",
  heading: ["When automation", "needed a language", "people could trust."],
  intro: [
    "Exult Global entered the market with a practical belief: automation should not be reserved only for the largest enterprises with the biggest budgets.",
    "The company was developing RPA, SaaS, and low-code/no-code solutions to help businesses automate workflows, build dashboards, and improve efficiency across departments. Sales, accounts, operations, projects, reporting; the solutions could be shaped module by module, depending on what each team needed.",
  ],
  image: { alt: "Exult Global — challenge visual", tone: "dark" } as ArchiveMedia,
  left:
    "Many automation platforms in the market were expensive, rigid, and difficult to customise. Exult Global wanted to offer something more accessible and flexible: Microsoft-powered automation solutions that were dependable, customisable, and viable.",
  leadIn:
    "But the challenge was that the communication could easily become too technical.",
  highlight:
    "Exult Global needed to explain automation without overwhelming people.",
  after:
    "It needed to sell enterprise capability while still feeling approachable to companies looking for practical transformation.",
});

export const exultPartnership = keepHyphenatedWords({
  label: "The Partnership",
  lead:
    "That is where Toruss became part of the journey, not only as a design partner, but as a strategic creative partner.",
  body:
    "Our partnership grew across branding, website, content, SEO, social media, event marketing, email campaigns, product UI/UX, pitch decks, infographics, explainer videos, and client-facing design support.",
  image: { alt: "Partnership sketch" } as ArchiveMedia,
});

export const exultIdentity = keepHyphenatedWords({
  label: "The Identity",
  heading: ["Establishing the brand’s", "first face."],
  intro: [
    "The first step was to give Exult Global a strong visual foundation. Exult Global needed a logo that could feel technology-driven, and dependable, while carrying a sense of progress and possibility.",
    "The colour palette was built around pastel blue and gold, blue for trust, calmness, and approachability; gold for success, strength, and dependability.",
  ],
  images: [
    { src: "/images/tsa-meeting.jpg", alt: "Identity workshop" },
    { src: "/images/tsa-installation.jpg", alt: "Identity exploration" },
    { src: "/images/tsa-field.jpg", alt: "Identity in context" },
  ] as ArchiveMedia[],
  left:
    "The logo combined a wordmark with an icon designed around the brand’s core ideas. The geometric X became a direct reference to Exult, while also suggesting multiplier, a symbol for improving productivity and amplifying efficiency. The icon also carried the feel of a dial, representing fine-tuning, optimisation, and process control. At another level, it suggested a bridge, reflecting Exult’s role in helping businesses move from where they are to where they want to be.",
  right: [
    "Within the wordmark, the letter X was shaped to subtly suggest infinity, connecting the identity to the idea of limitless possibilities.",
    "Together, the identity gave Exult Global a visual foundation that was simple, meaningful, and flexible enough to grow across digital, sales, product, and event environments.",
  ],
});

export const exultWebsite = keepHyphenatedWords({
  label: "The Website",
  heading: ["Turning a complex", "technical service into a", "clear digital journey."],
  body: [
    "Once the identity was in place, the website became Exult Global’s most important explanation tool.",
    "The brand had to speak about RPA, Power Platform, Power Automate, Power Apps, Power BI, Microsoft Fabric, low-code/no-code development, dashboards, workflow optimisation, and digital transformation. These were valuable services, but they needed to be presented in a way that business owners, decision-makers, and department heads could quickly understand.",
  ],
  image: { alt: "Website design process" } as ArchiveMedia,
  lead: "The website had to simplify this world without reducing its credibility.",
  note:
    "We worked across content structure, layout, UI/UX design, and development to create a website that was informative, structured, and easy to move through. The narrative was built to help users quickly understand what Exult Global offered, who it served, and how its solutions could help businesses automate work, improve decision-making, and reduce operational friction.",
});

export const exultContent = keepHyphenatedWords({
  label: "The Content",
  heading: ["Building visibility", "through useful content."],
  body:
    "For Exult Global, content was not treated as filler for the website. It became a way to educate the market. For a SaaS/RPA company, visibility is not built only through design. It is built through useful explanations, search-friendly content, and consistent thought leadership.",
  points: ["Keyword Research", "Blog Planning", "SEO", "Structured Content"],
  images: [
    { alt: "Content planning" },
    { alt: "Blog sketching" },
    { alt: "Content team session" },
  ] as ArchiveMedia[],
  left:
    "We worked on keyword research, blog planning, SEO, and structured content development around topics that mattered to the brand’s audience to help Exult Global become more discoverable to the right audience.",
  right:
    "The blogs were written to simplify technical ideas without diluting them. They helped Exult Global speak to decision-makers who may not understand every technical layer, but clearly understood the pain of manual work, scattered data, slow reporting, and inefficient processes.",
});

export const exultMarks = keepHyphenatedWords({
  signature: {
    caption: "Signature mark",
    image: { alt: "Signature mark", tone: "dark" } as ArchiveMedia,
  },
  seal: {
    caption: "The seal",
    image: { alt: "The seal", tone: "dark" } as ArchiveMedia,
  },
});

export const exultImpact = keepHyphenatedWords({
  label: "The Impact",
  stat: "~300% Traffic Growth",
  body:
    "This content-led approach contributed to stronger website activity, including an approximate 300% growth in website traffic after launch. The brand also gained visibility through LLM platforms, where Exult Global was referred to as a leading Microsoft Solution Provider in the California region, contributing to meaningful business opportunities and new client conversations.",
});

export const exultCommunication = keepHyphenatedWords({
  label: "The Communication",
  heading: ["Giving the brand a consistent", "voice across platforms."],
  intro:
    "As Exult Global grew, the communication system had to move beyond the website.",
  platforms: [
    {
      name: "LinkedIn",
      title: ["Grew to 25–30K", "Followers"],
      // DUMMY copy — replace with final text
      body:
        "LinkedIn became the main channel for thought leadership. Regular posts on automation, Microsoft solutions, and client stories helped the brand grow from zero to around 25–30K followers.",
      image: { alt: "LinkedIn content" } as ArchiveMedia,
    },
    {
      name: "Instagram",
      title: ["Engaging Content.", "Consistent Visibility."],
      body: "Instagram played a different role. It carried shorter, more engaging, educational, and event-led content that helped the brand stay visible and consistent.",
      image: { alt: "Instagram content" } as ArchiveMedia,
    },
    {
      name: "Medium",
      title: ["Deeper Insights.", "Simplified Visually."],
      // DUMMY copy — replace with final text
      body:
        "Medium carried longer articles that explained technical ideas in more depth. Simple visuals and clear structure made complex topics easier for decision-makers to follow.",
      image: { alt: "Medium articles" } as ArchiveMedia,
    },
    {
      name: "Podcasts",
      title: ["More Formats.", "Stronger Brand Recall."],
      // DUMMY copy — replace with final text
      body:
        "Podcasts added a conversational format around automation and digital transformation, giving the brand a voice people could listen to and remember.",
      image: { alt: "Podcasts" } as ArchiveMedia,
    },
  ],
  // which platform is open when the page loads (Instagram in the design)
  defaultOpen: 1,
  impactLabel: "The Impact",
  impact:
    "Together, these platforms helped Exult Global move from simply having a digital presence to building an identifiable brand voice.",
});

export const exultEvent = keepHyphenatedWords({
  label: "The Product",
  heading: ["Turning an international", "event into a brand and", "lead-generation", "opportunity."],
  body: [
    "Exult Global’s participation at The Microsoft Fabric Community Conference (FabCon) became an important moment for brand visibility.",
    "Our role covered end-to-end digital event marketing, including promotional, educational, and informative content across multiple formats. We worked on event communication, branding collateral, merchandise, and the design language for the event environment.",
  ],
  imageMain: { alt: "FabCon event booth", tone: "dark" } as ArchiveMedia,
  imageSecondary: { alt: "Event collateral", tone: "dark" } as ArchiveMedia,
});

export const exultEmail = keepHyphenatedWords({
  statement: ["Email marketing played a major role", "in the event campaign."],
  left:
    "We developed focused, lead-specific email sequences with careful audience profiling, planning, drafting, designing, scheduling, subject-line development, hooks, and message structures. The campaign included a mix of educational, informative, and offer-led communication, while carrying Exult Global’s visual language consistently across each email.",
  right:
    "The campaign achieved approximately 45% open rate and around 10% conversion rate, making email an important contributor to event engagement and lead generation.",
  wide: { alt: "Email campaign designs", tone: "dark" } as ArchiveMedia,
  pair: [
    { alt: "Email design 1", tone: "dark" },
    { alt: "Email design 2", tone: "dark" },
  ] as ArchiveMedia[],
  showcaseLabel: "The Product",
  showcase: { alt: "Event showcase", tone: "dark" } as ArchiveMedia,
});

export const exultDigital = keepHyphenatedWords({
  label: "Digital",
  heading: ["Supporting the", "brand inside sales", "rooms and product", "experiences."],
  leadIn:
    "As the partnership continued, Toruss’ role expanded into places where the brand had to perform more directly:",
  highlight:
    "Pitch presentations, client conversations, product demos, and dashboard experiences.",
  body:
    "We designed pitch decks that helped Exult Global explain its solutions with more clarity and confidence. These decks were used for presentations, sales conversations, and explanatory purposes, turning complex offerings into structured, persuasive stories.",
  wide: { alt: "Pitch deck designs", tone: "dark" } as ArchiveMedia,
  left:
    "Explainer videos served a similar purpose. We identified relevant topics, developed scripts, produced the videos, and published them across digital platforms. They addressed real pain points faced by the target audience and showed how Exult Global’s solutions could solve them. Some were also used in pitch presentations and event displays.",
  right:
    "The work also extended into UI/UX design for several dashboards, across web and mobile-optimised interfaces. This allowed us to support not only how Exult Global communicated its solutions, but also how some of those solutions were experienced by users.",
  trio: [
    { alt: "Dashboard UI 1", tone: "dark" },
    { alt: "Dashboard UI 2", tone: "dark" },
    { alt: "Dashboard UI 3", tone: "dark" },
  ] as ArchiveMedia[],
});

export const exultOutcome = keepHyphenatedWords({
  label: "The Outcome",
  heading: ["A long-term creative", "partnership."],
  intro:
    "From its inception, Exult Global has grown into a 100+ member company working across diverse industries and service areas. As the company evolved, Toruss has continued to be part of that journey, not only as a design partner, but as a strategic creative partner supporting the brand across identity, website, content, SEO, social media, events, email marketing, sales enablement, dashboard UI/UX, and client-facing design requirements.",
  columns: [
    "The partnership has helped Exult Global build a communication ecosystem around automation, optimisation, and digital transformation.",
    "The impact has been visible across growth touchpoints: website traffic increased by approximately 300%, LinkedIn grew from zero to around 25–30K followers, and the Fab Con email campaign achieved approximately 45% open rate with around 10% conversion.",
    "These numbers reflect a larger shift: Exult Global has been reaching more people, entering stronger conversations, and building credibility with the right audience.",
  ],
  image: { alt: "Exult Global team", tone: "dark" } as ArchiveMedia,
  collage: { alt: "Exult Global collage", tone: "dark" } as ArchiveMedia,
});

export const exultReflections = keepHyphenatedWords({
  heading: "Reflections",
  intro: "Exult Global has been a project about translation:",
  statement:
    "Translating automation into business value, technical services into clear communication, and a Microsoft-powered solution ecosystem into a brand people could understand and trust.",
  note:
    "For Toruss, the project reflects the value of staying close to a brand as it evolves. When the work spans identity, website, SEO, content, events, email, product UI, pitch decks, and videos, consistency cannot come from design alone. It comes from understanding the business closely enough to keep shaping the right message, in the right format, for each stage of its growth.",
});

// =========================================================
// ARCHIVE — project list (navbar dropdown + "Next Project")
// ---------------------------------------------------------
// Order here = order in the navbar dropdown and the "01 / 02"
// number on each project's hero. Add new projects here.
// =========================================================

export type ArchiveProjectSummary = {
  slug: string;
  title: string;
  year: string;
  country: string;
  category: string;
  thumb: ArchiveMedia;
};

export const archiveProjects: ArchiveProjectSummary[] = [
  {
    slug: "the-spanish-alchemist",
    title: "The Spanish Alchemist",
    year: "2025",
    country: "Spain",
    category: "Naming / Identity System / Packaging",
    thumb: { src: "/images/spanish-alchemist-thumb.jpg", alt: "The Spanish Alchemist" },
  },
  {
    slug: "exult-global",
    title: "Exult Global",
    year: "2023",
    country: "USA",
    category: "Branding / Website / SEO / Events",
    thumb: { alt: "Exult Global" },
  },
];

export const archiveHref = (slug: string) => `/archive/${slug}`;

// =========================================================
// FOOTER
// =========================================================

export const footerContent = {
  image: { src: "/images/footer.avif", alt: "Toruss studio desk" },
  sideLabel: "Get in touch",
  title: "Let's shape what's next.",
  paragraphs: [
    ["If you're building, rethinking, or evolving something", "meaningful, we'd love to understand where you are headed."],
    ["No pitch. No rush. Just a light conversation to begin with."],
  ],
  cta: { label: "Tell us what you’re building", href: "/contact" },
  // TODO: add the real profile URLs
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Pinterest", href: "#" },
  ],
  contact: [
    { label: "+91 812 9675 834", href: "tel:+918129675834" },
    { label: "info@toruss.studio", href: "mailto:info@toruss.studio" },
    { label: "Palakkad, Kerala, India - 678001" },
  ],
  copyright: ["© 2026", "TORUSS STUDIO.", "ALL RIGHTS RESERVED."],
};
