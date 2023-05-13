import Accordian from "./components/Accordian";
import Feature from "./components/Feature";
import Features2 from "./components/Features2";
import FeatureBlocks from "./components/FeatureBlocks";
import FeatureZigZag from "./components/FeatureZigZag";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroHome from "./components/HeroHome";

import Newsletter from "./components/Newsletter";
import PageIllustration from "./components/PageIllustration";
import Reviews from "./components/Reviews";
import Testimonials from "./components/Testimonials";

import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
   {/* <PageIllustration/> */}
        </div>
       
      <HeroHome/>
    
      <FeatureBlocks/>
      <Feature/>
      <Features2/>
      <Reviews/>
      <Accordian/>
      {/* <FeatureZigZag/> */}
      {/* <Testimonials/> */}
      <Newsletter/>
      </main>
      <Footer/>
    </main>
  )
  }
