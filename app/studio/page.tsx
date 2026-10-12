// import Footer from "@/components/common/Footer";
// import Navbar from "@/components/common/Navbar";
// import CultureSection from "@/components/sections/studio/Culturesection";
// import StudioArchives from "@/components/sections/studio/Studioarchives";
// import StudioClosing from "@/components/sections/studio/Studioclosing";
// import StudioExpressions from "@/components/sections/studio/Studioexpressions";
// import StudioHero from "@/components/sections/studio/Studiohero";
// import StudioHowWeThink from "@/components/sections/studio/Studiohowwethink";
// import StudioIntro from "@/components/sections/studio/StudioIntro";
// import StudioStory from "@/components/sections/studio/Studiostory";
// import WhatWeValue from "@/components/sections/studio/Whatwevalue";
// import WhyIntentionallySmall from "@/components/sections/studio/WhyIntentionallySmall";



// export const metadata = {
//   title: "Studio | Toruss",
//   description:
//     "Toruss is a multidimensional studio shaping brands, culture, and creative expression.",
// };

// export default function StudioPage() {
//   return (
//     <main>
//         <Navbar/>
//       <StudioHero />
//       <StudioStory />
//       <StudioExpressions />
//       <StudioHowWeThink />
//       <CultureSection />
//       <WhyIntentionallySmall />
//       <StudioArchives />
//       <WhatWeValue />
//       <StudioIntro />
//       <StudioClosing />
//       <Footer />
//     </main>
//   );
// }


import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function StudioPage() {
  return (
    <main>
      <Navbar />

      {/* page content goes here */}
      <div></div>

      <Footer />
    </main>
  );
}
