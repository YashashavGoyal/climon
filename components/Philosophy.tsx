"use client"

import { ShieldCheck, Zap, Github } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "Zero Dependencies",
        description: "Compiled binaries. No Python/Node modules required. Just download and run.",
        icon: Zap,
    },
    {
        title: "Type-Safe",
        description: "Built with Rust/Go for maximum stability and enterprise-grade reliability.",
        icon: ShieldCheck,
    },
    {
        title: "Open Source",
        description: "MIT Licensed. Transparent development forever. Join our community on GitHub.",
        icon: Github,
    },
]

export function Philosophy() {
    return (
        <section className="mt-12 py-12 border-y border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="size-16 bg-muted/10 rounded-3xl flex items-center justify-center mb-8">
                            <feature.icon className="h-8 w-8 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{feature.title}</h3>
                        <p className="text-muted leading-relaxed max-w-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
