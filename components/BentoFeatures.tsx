"use client"

import { motion } from "framer-motion"
import { BentoCard } from "./BentoCard"
import {
    Terminal,
    Zap,
    ShieldCheck,
    RefreshCw
} from "lucide-react"

export function BentoFeatures() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="mt-32">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted">Why Climon?</h2>
                <div className="h-px flex-1 bg-border ml-4"></div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                <motion.div variants={item}>
                    <BentoCard
                        icon={Terminal}
                        title="Standardized"
                        description="One syntax for all tools. No more memorizing flag permutations for every utility."
                        className="h-full"
                    />
                </motion.div>

                <motion.div variants={item}>
                    <BentoCard
                        icon={Zap}
                        title="Fast"
                        description="Written in Python/TS, compiled to static binaries. Zero startup latency, industrial performance."
                        className="h-full"
                    />
                </motion.div>

                <motion.div variants={item}>
                    <BentoCard
                        icon={ShieldCheck}
                        title="Type-Safe"
                        description="Autocomplete support out of the box. Hover for docs, stay in the flow."
                        className="h-full"
                    />
                </motion.div>

                <motion.div variants={item}>
                    <BentoCard
                        icon={RefreshCw}
                        title="Update"
                        description="Keep your entire belt sharp. Update all tools with a single 'climon update' command."
                        className="h-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
