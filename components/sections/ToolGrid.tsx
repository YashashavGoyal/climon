"use client"

import {
    Globe,
    Bot,
    Radar,
    Terminal,
    ArrowUpRight,
    Activity,
    ShieldCheck
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import toolsData from "@/content/tools/tools.json"

const iconMap: Record<string, any> = {
    Globe,
    Bot,
    Radar,
    Terminal,
    Activity,
    ShieldCheck
}

// Show the primary 3 tools on the homepage
const tools = toolsData.slice(0, 3);

export function ToolGrid() {
    return (
        <section className="mt-12">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted">The Ecosystem</h2>
                <div className="h-px flex-1 bg-border ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-card border border-border rounded-lg p-8 flex flex-col justify-between hover:border-foreground/20 transition-all hover:bg-card-hover hover:-translate-y-1"
                    >
                        <div>
                            <div className="flex items-start justify-between mb-8">
                                <div className="size-12 bg-foreground text-background rounded flex items-center justify-center">
                                    {(() => {
                                        const Icon = iconMap[tool.icon] || Terminal
                                        return <Icon className="h-6 w-6" />
                                    })()}
                                </div>
                                <div className={`px-2.5 py-1 rounded border text-[10px] font-bold uppercase tracking-widest ${tool.status === 'Stable' ? 'border-green-500/20 text-green-500 bg-green-500/10' :
                                        tool.status === 'Beta' ? 'border-amber-500/20 text-amber-500 bg-amber-500/10' :
                                            'border-border text-muted bg-muted/10'
                                    }`}>
                                    {tool.status}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 tracking-tight">
                                {tool.title}
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-40 transition-opacity" />
                            </h3>
                            <p className="text-muted text-sm leading-relaxed mb-8 font-medium">
                                {tool.description}
                            </p>
                        </div>

                        <div className="bg-black/40 rounded-md p-4 font-mono text-xs border border-border group-hover:border-foreground/20 transition-all">
                            <span className="text-muted/50 mr-2 select-none font-bold">$</span>
                            <span className="text-foreground font-bold">{tool.command}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <Link
                    href="/tools"
                    className="group flex items-center gap-2 px-10 py-5 rounded border border-border bg-card hover:bg-foreground hover:text-background transition-all font-bold text-[10px] uppercase tracking-[0.2em]"
                >
                    View more tools
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>
        </section>
    )
}
