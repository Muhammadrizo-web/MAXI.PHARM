import { useEffect } from "react";
import Lenis from "lenis";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";
import Key from "./components/Key";
import Why from "./components/Why";
import Service from "./components/Service";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

import ServiceDetail from "./pages/ServiceDetail";

function Home() {
  return (
    <main className="min-h-screen bg-[#FFFF] overflow-hidden">
      <section id="hero" className="mx-auto w-full">
        <Hero>
          <Header />
        </Hero>
      </section>

      <section id="about">
        <ForWhom />
      </section>

      <section id="key">
        <Key />
      </section>

      <section id="why">
        <Why />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="process">
        <Work />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contacts">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}