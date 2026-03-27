"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
    Globe,
    Bot,
    Radar,
    Terminal,
    ArrowUpRight,
    Star,
    ExternalLink,
    ShieldCheck,
    Activity,
    Search,
    Command
} from "lucide-react"
import allTools from "@/content/tools/tools.json"

const iconMap: Record<string, any> = {
    Globe,
    Bot,
    Radar,
    Terminal,
    Activity,
    ShieldCheck
}


const categories = [
    { name: "All", count: allTools.length },
    { name: "Network", count: allTools.filter(t => t.category === "network").length },
    { name: "Automation", count: allTools.filter(t => t.category === "automation").length },
    { name: "System", count: allTools.filter(t => t.category === "system").length },
];

export default function ToolsPage() {

    const [category, setCategory] = useState("all");
    const tools = allTools.filter(t => t.category === category || category === "all");

    return (
        <div className="flex min-h-screen flex-col selection:bg-foreground selection:text-background">
            <Navbar />

            <main className="flex-1 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header (Hero) */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16 md:mb-20">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
                                Construct Your Workflow.
                            </h1>
                            <p className="text-lg md:text-xl text-muted font-medium leading-relaxed">
                                A curated suite of binary-compatible CLI tools. Zero dependencies. Instant startup. Engineered for industrial-grade reliability.
                            </p>
                        </div>

                        {/* Metrics Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative p-6 rounded-lg border border-border bg-card overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-50" />
                            <div className="relative flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Registry Status</span>
                                </div>
                                <div className="flex items-end gap-6">
                                    <div>
                                        <div className="text-3xl font-bold tracking-tighter">
                                            {
                                                allTools.filter((tool) => tool.isActive).length
                                            }
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted">Active Tools</div>
                                    </div>
                                    <div className="w-px h-10 bg-border/50" />
                                    <div>
                                        <div className="text-3xl font-bold tracking-tighter">100%</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted">Type-Safe</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Main Split Layout */}
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 pt-12 border-t border-border/50">

                        {/* Sidebar */}
                        <aside className="lg:col-span-3 space-y-8 md:space-y-12 h-fit lg:sticky lg:top-32 order-2 lg:order-1">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-6">Categories</h3>
                                <nav className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col gap-2 lg:gap-1">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.name}
                                            className={cn("flex items-center justify-between px-4 py-3 rounded-lg hover:bg-card-hover transition-all text-sm font-semibold text-muted hover:text-foreground group text-left border border-transparent hover:border-border", {
                                                "bg-card-hover text-foreground border-border": category === cat.name.toLowerCase(),
                                            })}
                                            onClick={() => setCategory(cat.name.toLowerCase())}
                                        >
                                            {cat.name}
                                            <span className="text-[10px] font-mono text-muted/50 group-hover:text-muted">{cat.count}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* System Status Widget */}
                            <div className="p-5 rounded-lg border border-border bg-card space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative size-2.5">
                                        <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-75" />
                                        <div className="relative size-2.5 bg-green-500/50 rounded-sm" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">Global Registry</span>
                                </div>
                                <p className="text-[11px] text-muted font-medium leading-relaxed">
                                    All systems operational. Binaries are mirrored across 12 edge regions.
                                </p>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-[9px] font-mono text-muted/50 uppercase">Uptime: 99.99%</span>
                                    <Activity className="size-3 text-muted/30" />
                                </div>
                            </div>
                        </aside>

                        {/* Right Content */}
                        <div className="lg:col-span-9 space-y-10 md:space-y-12 order-1 lg:order-2">

                            {/* Search Banner */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-[#0A0A0B] border border-white/5 p-6 md:p-10 mb-8 md:mb-12 group"
                            >
                                {/* Concentric Circles Background Decoration - Scale down */}
                                <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.05] overflow-hidden">
                                    <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[250px] h-[150px] md:h-[250px] border border-white rounded-full" />
                                    <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] border border-white rounded-full" />
                                    <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-white rounded-full" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-10">
                                    <div className="max-w-xl">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tighter mb-4 leading-tight">
                                            Navigate with <span className="text-white/60">ease</span>.
                                        </h2>
                                        <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed max-w-sm mb-6 md:mb-8">
                                            Find tools, examples, reference material. Use the global search to find tools instantly.
                                        </p>

                                        {/* New Installer CTA */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all flex items-center gap-3 group/cta cursor-pointer"
                                            >
                                                <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/cta:bg-white/10 transition-colors">
                                                    <Terminal className="size-4 text-white/80" />
                                                </div>
                                                <Link
                                                    href="/tools/install"
                                                    className="flex flex-col">
                                                    <span className="text-xs font-bold text-white tracking-tight leading-none mb-1">climon core</span>
                                                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider leading-none">universal installer</span>
                                                </Link>
                                                <ArrowUpRight className="size-3.5 text-white/20 group-hover/cta:text-white/60 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all ml-2" />
                                            </motion.div>

                                            <p className="text-[9px] md:text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] mt-2 sm:mt-0">
                                                Registry v2.4 <span className="mx-2 opacity-30">•</span> Security Audited
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center gap-3 md:gap-4 pr-0 md:pr-10 scale-90 md:scale-100 self-center md:self-auto mt-4 md:mt-0">
                                        {/* Physical Keyboard Keys Effect - Smaller */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                            className="h-14 md:h-16 px-3 md:px-4 bg-card border border-border rounded-lg flex items-center justify-center gap-2 shadow-2xl relative group/key"
                                        >
                                            <div className="absolute inset-0 bg-foreground/[0.02] rounded-lg" />
                                            <Command className="size-4 md:size-5 text-foreground/90" />
                                            <span className="text-[9px] md:text-[10px] font-bold text-foreground/40 select-none uppercase tracking-widest">/ ctrl</span>
                                        </motion.div>
                                        <div className="text-muted/20 font-bold text-lg">+</div>
                                        <motion.div
                                            animate={{ y: [0, 10, 0] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="size-14 md:size-16 bg-card border border-border rounded-lg flex items-center justify-center shadow-2xl relative group/key"
                                        >
                                            <div className="absolute inset-0 bg-foreground/[0.02] rounded-lg" />
                                            <span className="text-xl md:text-2xl font-bold text-foreground/80 select-none">K</span>
                                        </motion.div>

                                        {/* Floating Tech Badges - Hide on mobile */}
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="absolute -top-10 left-10 size-10 bg-blue-500/10 rounded-xl hidden md:flex items-center justify-center border border-blue-500/20 backdrop-blur-md overflow-hidden shadow-2xl"
                                        >
                                            <Globe className="size-5 text-blue-400" />
                                        </motion.div>
                                        <motion.div
                                            animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
                                            transition={{ duration: 8, repeat: Infinity }}
                                            className="absolute -right-4 -top-2 size-10 bg-orange-500/10 rounded-xl hidden md:flex items-center justify-center border border-orange-500/20 backdrop-blur-md overflow-hidden shadow-2xl"
                                        >
                                            <Radar className="size-5 text-orange-400" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Tool Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {tools.map((tool) => (
                                    <motion.div
                                        key={tool.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group bg-card border border-border rounded-lg p-8 flex flex-col justify-between hover:border-foreground/20 transition-all hover:bg-card-hover"
                                    >
                                        <div>
                                            <div className="flex items-start justify-between mb-8">
                                                <div className="size-14 bg-foreground text-background rounded flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                                                    {(() => {
                                                        const Icon = iconMap[tool.icon] || Terminal
                                                        return <Icon className="h-7 w-7" />
                                                    })()}
                                                </div>
                                                <div className="px-3 py-1 rounded border border-border group-hover:border-foreground/20 transition-colors text-[10px] font-bold font-mono uppercase tracking-widest bg-muted/10">
                                                    {tool.version}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 tracking-tight text-foreground">
                                                {tool.title}
                                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-40 transition-all translate-y-1 group-hover:translate-y-0" />
                                            </h3>
                                            <p className="text-muted leading-relaxed mb-8 text-[13px] font-medium">
                                                {tool.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-1.5 text-muted group-hover:text-foreground transition-colors">
                                                <Star className="size-3.5 fill-muted/20" />
                                                <span className="text-sm font-bold font-mono tracking-tighter">{tool.stars}</span>
                                            </div>
                                            <Link
                                                href={`/tools/${tool.id}`}
                                                className="text-xs font-bold uppercase tracking-widest text-muted hover:text-foreground transition-colors flex items-center gap-2"
                                            >
                                                View Details
                                                <ExternalLink className="size-3" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technical Specs Table */}
                    <section className="mt-32 pt-20 border-t border-border/50">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="size-5 text-foreground/70" />
                                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground">Technical Specification Registry</h2>
                            </div>
                            <div className="h-px flex-1 bg-border/50 ml-6 hidden lg:block"></div>
                        </div>

                        <div className="overflow-x-auto -mx-6 px-6">
                            <table className="w-full text-left border-collapse min-w-[700px] lg:min-w-0">
                                <thead>
                                    <tr className="border-b border-border bg-muted/20">
                                        <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Tool Name</th>
                                        <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Category</th>
                                        <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Language</th>
                                        <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="font-medium">
                                    {tools.map((spec, index) => (
                                        <tr
                                            key={spec.id}
                                            className="border-b border-border/50 hover:bg-card-hover transition-colors last:border-0"
                                        >
                                            <td className="px-8 py-6 font-bold text-lg tracking-tight">{spec.title}</td>
                                            <td className="px-8 py-6 text-sm text-bold uppercase tracking-widest text-muted/60">{spec.category}</td>
                                            <td className="px-8 py-6">
                                                <span className="px-2 py-1 rounded border border-gray-500/20 text-gray-400 bg-gray-500/10 text-[10px] font-bold uppercase tracking-widest">{spec.language}</span>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border 
                                                ${spec.status === 'Stable' ? 'border-green-500/20 text-green-500 bg-green-500/10' :
                                                        spec.status[0] === 'v' ? 'border-orange-500/20 text-orange-500 bg-orange-500/10' :
                                                            spec.status === 'Beta' ? 'border-amber-500/20 text-amber-500 bg-amber-500/10' :
                                                                'border-border text-muted bg-muted/10'
                                                    }`}>
                                                    {spec.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}


