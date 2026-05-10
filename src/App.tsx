import { useEffect } from "react";
import Lenis from "lenis";

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
    <main className="min-h-screen bg-[#FFFF]  overflow-hidden">
      <div className="mx-auto w-full">
        <Hero>
          <Header />
        </Hero>
      </div>

      <ForWhom />
      <Key />
      <Why />
      <Service />
      <Work />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}