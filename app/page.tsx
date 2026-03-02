"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroInput } from "@/components/HeroInput"
import { TerminalSimulation } from "@/components/TerminalSimulation"
import { ToolGrid } from "@/components/ToolGrid"
import { TechSpecs } from "@/components/TechSpecs"
import { Philosophy } from "@/components/Philosophy"
import { InstallTabs } from "@/components/InstallTabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-foreground selection:text-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6">
          {/* 1. Hero Section (The Hook) */}
          <section className="py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center"
            >
              <h1 className="text-6xl md:text-8xl leading-[1.3] font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                The Developer Utility Belt
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-3xl mb-12 font-medium leading-relaxed">
                A unified ecosystem of high-performance CLI tools. <br className="hidden md:block" />
                Install once, run anywhere. Built for the modern engineer.
              </p>

              <HeroInput command="climon install all" />
            </motion.div>
          </section>

          {/* 2. Terminal Simulation (The Proof) */}
          <section className="py-12">
            <div className="flex flex-col items-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-8">Live Demonstration</h2>
              <TerminalSimulation />
            </div>
          </section>

          {/* 3. Ecosystem Grid (The Bento Box) */}
          <ToolGrid />

          {/* 5. "Why Climon?" (The Philosophy) */}
          {/* Placing Philosophy before Specs for better flow */}
          <Philosophy />

          {/* 4. Technical Specs (The Data Sheet) */}
          <TechSpecs />

          {/* 6. Universal Installation (The Closer) */}
          <InstallTabs />
        </div>
      </main>

      {/* 7. Footer (The Sitemap) */}
      <Footer />
    </div>
  )
}
