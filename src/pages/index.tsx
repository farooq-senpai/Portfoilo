import Head from "next/head";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { CursorGlow } from "@/components/CursorGlow";
import { InteractiveBackground } from "@/components/InteractiveBackground";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Other } from "@/sections/Other";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Shaik Abdul Farooq | Portfolio</title>

        <meta
          name="description"
          content="Modern AI, Full Stack and Cybersecurity Portfolio"
        />
      </Head>

      <main className="relative overflow-hidden pb-20">

        <InteractiveBackground />
        <CursorGlow />

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Other />

      </main>

      <Footer />
    </>
  );
}