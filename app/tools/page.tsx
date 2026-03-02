"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import {
    Globe,
    Bot,
    Radar,
    Terminal,
    ArrowUpRight,
    Star,
    ExternalLink,
    ShieldCheck,
    Activity
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
    return (
        <div className="flex min-h-screen flex-col selection:bg-foreground selection:text-background">
            <Navbar />

            <main className="flex-1 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header (Hero) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                                Construct Your Workflow.
                            </h1>
                            <p className="text-xl text-muted font-medium leading-relaxed">
                                A curated suite of binary-compatible CLI tools. Zero dependencies. Instant startup. Engineered for industrial-grade reliability.
                            </p>
                        </div>

                        {/* Metrics Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-50" />
                            <div className="relative flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Registry Status</span>
                                </div>
                                <div className="flex items-end gap-6">
                                    <div>
                                        <div className="text-3xl font-bold tracking-tighter">{allTools.length}</div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-border/50">

                        {/* Sidebar */}
                        <aside className="lg:col-span-3 space-y-12 h-fit lg:sticky lg:top-32">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-6">Categories</h3>
                                <nav className="flex flex-col gap-1">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.name}
                                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted/50 transition-all text-sm font-semibold text-muted hover:text-foreground group text-left border border-transparent hover:border-border/50"
                                        >
                                            {cat.name}
                                            <span className="text-[10px] font-mono text-muted/50 group-hover:text-muted">{cat.count}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* System Status Widget */}
                            <div className="p-5 rounded-2xl border border-border bg-muted/20 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative size-2.5">
                                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                                        <div className="relative size-2.5 bg-green-500 rounded-full" />
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
                        <div className="lg:col-span-9 space-y-12">

                            {/* Search Banner */}
                            <div className="relative overflow-hidden rounded-3xl bg-foreground p-1 pr-1 flex flex-col md:flex-row items-stretch md:items-center justify-between group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
                                <div className="relative py-8 px-10">
                                    <h2 className="text-2xl font-bold text-background tracking-tight mb-2">Navigate with ease.</h2>
                                    <p className="text-background/60 text-sm font-medium">Use the global search to find tools instantly.</p>
                                </div>

                                <div className="relative m-2 md:mr-8">
                                    <div className="flex items-center gap-4 h-14 min-w-[300px] rounded-2xl border border-background/20 bg-background/10 backdrop-blur-md px-6 text-sm text-background/50 hover:border-background/40 transition-all cursor-pointer group/btn">
                                        <Terminal className="h-4 w-4" />
                                        <span className="font-semibold">Search Registry...</span>
                                        <div className="ml-auto flex items-center gap-1.5 rounded-lg border border-background/20 bg-background/10 px-2 py-1 text-[10px] font-mono text-background/70">
                                            <span>⌘/Ctrl</span>
                                            <span className="opacity-40">K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tool Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {allTools.map((tool) => (
                                    <motion.div
                                        key={tool.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:border-foreground/20 transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
                                    >
                                        <div>
                                            <div className="flex items-start justify-between mb-8">
                                                <div className="size-14 bg-foreground text-background rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                                    {(() => {
                                                        const Icon = iconMap[tool.icon] || Terminal
                                                        return <Icon className="h-7 w-7" />
                                                    })()}
                                                </div>
                                                <div className="px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider border border-border group-hover:border-foreground/20 transition-colors">
                                                    {tool.version}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 tracking-tight">
                                                {tool.title}
                                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-40 transition-all translate-y-1 group-hover:translate-y-0" />
                                            </h3>
                                            <p className="text-muted leading-relaxed mb-8 font-medium">
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
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="size-5 text-foreground/70" />
                                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground">Technical Specification Registry</h2>
                            </div>
                            <div className="h-px flex-1 bg-border/50 ml-6 hidden md:block"></div>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-border bg-card/50">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-border bg-muted/20">
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Tool Name</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Category</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Language</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="font-medium">
                                    {allTools.map((spec, index) => (
                                        <tr
                                            key={spec.id}
                                            className="border-b border-border/50 hover:bg-muted/30 transition-colors last:border-0"
                                        >
                                            <td className="px-8 py-6 font-bold text-lg tracking-tight">{spec.title}</td>
                                            <td className="px-8 py-6 text-sm text-muted capitalize">{spec.category}</td>
                                            <td className="px-8 py-6">
                                                <span className="px-2 py-1 rounded bg-muted text-[10px] font-bold uppercase tracking-widest">{spec.language}</span>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${spec.status === 'Stable' ? 'border-green-500/20 text-green-500 bg-green-500/5' :
                                                    spec.status === 'Beta' ? 'border-orange-500/20 text-orange-500 bg-orange-500/5' :
                                                        'border-border text-muted bg-muted/20'
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

import Link from "next/link"
