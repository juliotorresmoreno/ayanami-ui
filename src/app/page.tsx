import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import UseCases from "@/components/UsesCases";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Petra - AI Powered Solutions</title>
        <meta name="description" content="Soluciones de IA con bases de datos vectoriales." />
      </Head>

      <Header />
      <Hero />
      <About />
      <Features />
      <UseCases />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  );
}
