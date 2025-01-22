import Header from "../components/Header";
import Hero from "../components/HeroForm";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Footer from "../components/Footer";
import PropertySection from "../components/PropertySection";
import Manage from "../components/Manage";
import Maximize from "../components/Maximize";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PropertySection />
      <Manage />
      <Features />
      <Maximize />
      <Partners />
      <Services />
      <Footer />
      
    </>
  );
}
