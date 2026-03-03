import { motion } from "framer-motion"
import { Github, Twitter, Globe } from "lucide-react"

export function CreatorProfile() {
    return (
        <section className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted sticky top-24">
                        The Creator
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-foreground rounded-none grayscale hover:grayscale-0 transition-all duration-500 border border-border relative overflow-hidden group">
                            <div className="absolute inset-0 noise-texture opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center text-background text-4xl font-black uppercase tracking-tighter">
                                YG
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-4xl font-black tracking-tighter">Yashashav Goyal</h3>
                            <p className="text-xl text-muted leading-relaxed max-w-xl">
                                Engineer, tinkerer, and minimalist. I build tools that I want to use. Climon is the result of years of refinement in terminal workflows and high-performance systems.
                            </p>
                            <div className="flex gap-6 pt-4">
                                <a href="#" className="text-muted hover:text-foreground transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-muted hover:text-foreground transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-muted hover:text-foreground transition-colors">
                                    <Globe className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
