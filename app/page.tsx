"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-gray-200">
       <BackToTop/>
      <Navbar />

      <Hero />

      <Projects />

      <Skills/>

      <Footer />
    </main>
  );
}
