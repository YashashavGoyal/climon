"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AboutHero } from "@/components/sections/AboutHero"
import { OriginStory } from "@/components/sections/OriginStory"
import { NoList } from "@/components/sections/NoList"
import { TechStackGrid } from "@/components/sections/TechStackGrid"
import { CreatorProfile } from "@/components/sections/CreatorProfile"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col selection:bg-foreground selection:text-background relative">
            <Navbar />

            <main className="flex-1 relative">
                {/* Page-wide noise texture for that editorial feel */}
                <div className="fixed inset-0 noise-texture opacity-[0.02] pointer-events-none z-50" />

                <div className="max-w-7xl mx-auto px-6">
                    <AboutHero />
                    <OriginStory />
                    <NoList />
                    <TechStackGrid />
                    <CreatorProfile />
                </div>
            </main>

            <Footer />
        </div>
    )
}
