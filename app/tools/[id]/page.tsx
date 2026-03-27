"use client"

import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    ChevronLeft,
    Terminal,
    Globe,
    Bot,
    Radar,
    Activity,
    ShieldCheck,
    Star,
    Copy,
    Check,
    ArrowUpRight,
    Zap,
    BookOpen,
    Cpu
} from "lucide-react"
import { useState } from "react"
import allTools from "@/content/tools/tools.json"
import { TerminalCommand } from "@/components/terminal/TerminalCommand"

const iconMap: Record<string, any> = {
    Globe,
    Bot,
    Radar,
    Terminal,
    Activity,
    ShieldCheck
}

export default function ToolDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [copied, setCopied] = useState(false)

    const tool = allTools.find(t => t.id === params.id)

    if (!tool) {
        return (
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
                        <Link href="/tools" className="text-muted hover:text-foreground">Back to Registry</Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    const Icon = iconMap[tool.icon] || Terminal

    const copyCommand = () => {
        navigator.clipboard.writeText(tool.command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex min-h-screen flex-col selection:bg-foreground selection:text-background relative">
            <Navbar />

            <main className="flex-1 py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Breadcrumbs */}
                    <nav className="mb-12 flex items-center gap-2 text-xs font-mono text-muted/50">
                        <Link href="/tools" className="hover:text-foreground transition-colors flex items-center gap-1">
                            <ChevronLeft className="size-3" /> Registry
                        </Link>
                        <span>/ {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)} /</span>
                        <span className="text-foreground">{tool.title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-16">
                            <section>
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="size-20 bg-foreground text-background rounded flex items-center justify-center shadow-2xl">
                                        <Icon className="size-10" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">{tool.title}</h1>
                                            <span className="px-2 py-0.5 rounded border border-border bg-muted/10 text-[10px] font-bold font-mono text-muted uppercase tracking-widest mt-1">
                                                {tool.version}
                                            </span>
                                        </div>
                                        <p className="text-xl text-muted font-medium max-w-2xl leading-relaxed">
                                            {tool.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 items-center">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card">
                                        <Star className="size-4 text-muted" />
                                        <span className="text-sm font-bold font-mono">{tool.stars}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card uppercase tracking-widest text-[10px] font-bold text-muted">
                                        {tool.language}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card uppercase tracking-widest text-[10px] font-bold text-muted">
                                        {tool.license} License
                                    </div>
                                </div>
                            </section>

                            {/* Installation Section */}
                            <section className="p-8 md:p-12 rounded-xl border border-border bg-white/[0.02] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Terminal className="size-32" />
                                </div>
                                <div className="relative z-10">
                                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-8">Installation & Deployment</h2>
                                    <p className="text-muted text-sm mb-8 max-w-lg font-medium leading-relaxed">
                                        Deploy {tool.title} instantly using the Climon universal package manager.
                                        Ensure your binary environment is pre-configured.
                                    </p>

                                    <div className="relative">
                                        <div className="bg-black/40 rounded-lg border border-border p-6 font-mono text-sm overflow-hidden group/code transition-all hover:border-foreground/20">
                                            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
                                                <div className="flex gap-2">
                                                    <div className="size-2 rounded-full bg-red-500/30" />
                                                    <div className="size-2 rounded-full bg-yellow-500/30" />
                                                    <div className="size-2 rounded-full bg-green-500/30" />
                                                </div>
                                                <button
                                                    onClick={copyCommand}
                                                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                                                >
                                                    {copied ? <Check className="size-3 text-green-500" /> : <Copy className="size-3" />}
                                                    {copied ? 'Copied' : 'Copy'}
                                                </button>
                                            </div>
                                            <div className="flex gap-4 items-center">
                                                <span className="text-muted/30 select-none">$</span>
                                                <code className="text-foreground">{tool.command}</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Detailed Specs Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 rounded-lg border border-border bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                    <Zap className="size-5 mb-6 text-muted/60" />
                                    <h3 className="text-lg font-bold mb-3 tracking-tight text-foreground">High Performance</h3>
                                    <p className="text-sm text-muted font-medium leading-relaxed">
                                        Zero overhead runtime with native execution. Optimized for industrial scale workflows and CI/CD pipelines.
                                    </p>
                                </div>
                                <div className="p-8 rounded-lg border border-border bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                    <Cpu className="size-5 mb-6 text-muted/60" />
                                    <h3 className="text-lg font-bold mb-3 tracking-tight text-foreground">Industrial Logic</h3>
                                    <p className="text-sm text-muted font-medium leading-relaxed">
                                        Built on established engineering patterns. Climon implements strict typing and modular binary structures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <aside className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-32">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-6">Registry Metadata</h3>
                                <div className="space-y-4 font-mono text-xs">
                                    <div className="flex justify-between py-3 border-b border-border/50">
                                        <span className="text-muted">Repository</span>
                                        <Link href="#" className="text-foreground hover:underline flex items-center gap-1">GitHub <ArrowUpRight className="size-3" /></Link>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border/50">
                                        <span className="text-muted">Last Registry Update</span>
                                        <span className="text-foreground">2 days ago</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border/50">
                                        <span className="text-muted">Stability Index</span>
                                        <span className={tool.status === 'Stable' ? 'text-green-500 font-bold' : 'text-orange-500 font-bold'}>{tool.status}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border/50">
                                        <span className="text-muted">Binary Size</span>
                                        <span className="text-foreground">4.2 MB</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-lg border border-border bg-card space-y-6 flex flex-col justify-between hover:bg-card-hover transition-colors">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <BookOpen className="size-4 text-muted/60" />
                                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Documentation</h3>
                                    </div>
                                    <p className="text-xs text-muted font-medium leading-relaxed">
                                        Access the full API reference and technical blueprints for {tool.title}.
                                    </p>
                                </div>
                                <button className="w-full py-4 rounded-lg border border-border bg-card hover:bg-card-hover transition-all text-[10px] font-bold uppercase tracking-widest">
                                    Read Reference
                                </button>
                            </div>

                            <div className="text-center pt-8">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/30 mb-2">Authenticated Registry</p>
                                <div className="h-px bg-border/20 w-12 mx-auto" />
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
