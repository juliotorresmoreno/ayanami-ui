import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import UseCases from "@/components/UsesCases";
import HowItWorks from "@/components/HowItWorks";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home"
        description="Explore Petra AI's innovative solutions for AI-driven data analysis and vector databases."
      />

      <main>
        <Header />
        <Hero />
        <About />
        <Features />
        <UseCases />
        <HowItWorks />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
