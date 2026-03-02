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
                        className="group relative bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:border-foreground/20 transition-all hover:shadow-2xl hover:-translate-y-1"
                    >
                        <div>
                            <div className="flex items-start justify-between mb-8">
                                <div className="size-12 bg-foreground text-background rounded-2xl flex items-center justify-center">
                                    {(() => {
                                        const Icon = iconMap[tool.icon] || Terminal
                                        return <Icon className="h-6 w-6" />
                                    })()}
                                </div>
                                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${tool.status === 'Stable' ? 'border-green-500/20 text-green-500 bg-green-500/5' :
                                        tool.status === 'Beta' ? 'border-orange-500/20 text-orange-500 bg-orange-500/5' :
                                            'border-border text-muted bg-muted/5'
                                    }`}>
                                    {tool.status}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                {tool.title}
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-40 transition-opacity" />
                            </h3>
                            <p className="text-muted leading-relaxed mb-8">
                                {tool.description}
                            </p>
                        </div>

                        <div className="bg-code-bg rounded-xl p-4 font-mono text-xs border border-border group-hover:bg-background transition-colors">
                            <span className="text-muted/50 mr-2">$</span>
                            <span className="text-foreground">{tool.command}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <Link
                    href="/tools"
                    className="group flex items-center gap-2 px-8 py-4 rounded-2xl border border-border bg-card hover:bg-muted/10 transition-all font-bold text-sm tracking-tight"
                >
                    View more tools
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>
        </section>
    )
}
