"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const links = [
  { number: "01", label: "CREATIVE" },
  { number: "02", label: "EDITIONS" },
  { number: "03", label: "COHORT" },
];

const socials = [
  FaInstagram,
  FaPinterest,
  FaTwitter,
];

export default function StudioHero() {
  return (
   <section className="relative h-[750px] w-full overflow-hidden bg-[#e7e5e1]">
      {/* HERO */}
      <div
        className="
          relative
          grid
          grid-cols-1
          lg:grid-cols-[0.78fr_1.22fr]
          min-h-screen
        "
      >
        {/* LEFT */}
        <div
          className="
            relative
            flex
            flex-col
            justify-center
            px-8
            md:px-16
            lg:px-20
            py-16
          "
        >
          {/* Vertical Label */}
          <div
            className="
    hidden
    lg:flex
    absolute
    left-8
    top-[20%]
    -translate-y-1/2
    flex-col
    items-center
  "
          >
            <div className="h-6 w-px bg-black/30 mb-4 ml-[5px] -mt-16" />

            <span
              className="
    font-think
    text-[16px]
    uppercase
    tracking-[0.18em]
    text-black/50
    ml-[5px]
  "
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(360deg)",
              }}
            >
              STUDIO
            </span>
          </div>

          <div className="max-w-[980px] mt-[-85px]">
            {/* HEADING */}
      <h1
  className="
    font-display
    origin-left
    md:text-[2.7rem]
    lg:text-[3rem]
    xl:text-[3.3rem]
    leading-[0.99]
    tracking-[0.03em]
    text-black
    pl-[30px]
    whitespace-nowrap
    
  "
>
  A MULTIDIMENSIONAL
  <br />
  STUDIO SHAPING BRANDS,
  <br />
  CULTURE, AND CREATIVE 
  <br />
  EXPRESSION.
</h1>

            {/* TEXT */}
            <p
              className="
  mt-10
  max-w-[480px]
  text-[17px]
  leading-[1.7]
  font-[400]
  tracking-[0.01em]
  text-black/50
  pl-[30px]
  font-rethink
"
            >
              Toruss works across branding, identity systems, digital
              experiences, objects, artistic explorations, and collective
              initiatives, building ideas that are clear, enduring, and deeply
              considered.
            </p>

            {/* LINKS */}
         <div
  className="
    mt-[38px]
    flex
    w-[423px]
    flex-col
    ml-[21px]
  "
>
  {links.map((link) => (
    <div
      key={link.number}
      className="
        group
        flex
        items-center
        justify-start
        border-b
        border-[#1d1d1d]
        pt-[18px]
        pb-[13px]
        cursor-pointer
        
      "
    >
      {/* LEFT SIDE */}
      <div className="flex  items-center gap-[170px]">
        <span
          className="
            text-[28px]
            leading-none
            font-light
            text-[#1d1d1d]
            transition-transform
            duration-300
            group-hover:translate-x-[4px]
            pl-[50px]
          "
        >
          →
        </span>

        <span
          className="
            text-[18px]
            leading-none
            font-think
            uppercase
            tracking-[0.12em]
            text-[#80AD76] translate-x-[35px]
           
          "
        >
          {link.number}
        </span>
      </div>

      {/* RIGHT SIDE */}
      <span
        className="
          text-[18px]
          leading-none
          font-think
          uppercase
          tracking-[0.08em]
          text-[#80AD76]
          ml-[55px]
        "
      >
        {link.label}
      </span>
    </div>
  ))}
</div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            hidden
            lg:flex
            items-center
            justify-end
            py-16
            pr-20
            mb-[80px]
            -translate-x-[10px]
          "
        >
          <div
            className="
              relative
              h-[620px]
              w-[620px]
              overflow-hidden
            "
          >
            <Image
              src="/trust-hero.jpg"
              alt="Studio Hero"
              fill
              priority
              sizes="50vw"
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* SOCIALS */}
       <div
  className="
    hidden
    lg:flex
    absolute
    right-10
    top-150
    -translate-y-1/2
    flex-col
    gap-6
  "
>
  {socials.map((Icon, index) => (
    <a
      key={index}
      href="#"
      className="
        text-black/35
        hover:text-black
        transition-colors
      "
    >
      <Icon className="text-[22px] " />
    </a>
  ))}
</div>
      </div>
    </section>
  );
}
