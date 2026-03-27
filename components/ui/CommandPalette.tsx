"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Command, X, ArrowRight, Zap, Terminal, Globe, Bot, ShieldCheck, Activity, Radar } from "lucide-react"
import { useRouter } from "next/navigation"
import allTools from "@/content/tools/tools.json"

const iconMap: Record<string, any> = {
    Globe,
    Bot,
    Radar,
    Terminal,
    Activity,
    ShieldCheck
}

export function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)
    const router = useRouter()

    const filteredTools = allTools.filter(tool =>
        tool.title.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5)

    const togglePalette = useCallback(() => setIsOpen(open => !open), [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                togglePalette()
            }
            if (e.key === "Escape") {
                setIsOpen(false)
            }
        }
        const handleOpenSearch = () => setIsOpen(true)

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("open-climon-search", handleOpenSearch)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("open-climon-search", handleOpenSearch)
        }
    }, [togglePalette])

    const handleSelect = (toolId: string) => {
        router.push(`/tools/${toolId}`)
        setIsOpen(false)
        setQuery("")
    }

    useEffect(() => {
        setSelectedIndex(0)
    }, [query])

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            setSelectedIndex(prev => (prev + 1) % filteredTools.length)
        } else if (e.key === "ArrowUp") {
            setSelectedIndex(prev => (prev - 1 + filteredTools.length) % filteredTools.length)
        } else if (e.key === "Enter" && filteredTools[selectedIndex]) {
            handleSelect(filteredTools[selectedIndex].id)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
                    />
                    <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[10vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            className="w-full max-w-2xl bg-background border border-border rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] pointer-events-auto"
                        >
                            {/* Search Header */}
                            <div className="flex items-center gap-3 px-6 py-5 border-b border-border bg-card">
                                <Search className="h-5 w-5 text-muted" />
                                <input
                                    autoFocus
                                    placeholder="Search for tools or documentation... (Cmd+K)"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={onKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted/50 text-base font-medium"
                                />
                                <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded border border-border bg-muted/10 text-[10px] font-bold uppercase tracking-widest text-muted">
                                    ESC
                                </div>
                            </div>

                            {/* Results List */}
                            <div className="flex-1 overflow-y-auto p-3 overscroll-contain no-scrollbar">
                                {filteredTools.length > 0 ? (
                                    <div className="space-y-1">
                                        <div className="px-3 py-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted/40 font-mono">Tools & Registry</span>
                                        </div>
                                        {filteredTools.map((tool, index) => {
                                            const Icon = iconMap[tool.icon] || Terminal
                                            return (
                                                <button
                                                    key={tool.id}
                                                    onMouseEnter={() => setSelectedIndex(index)}
                                                    onClick={() => handleSelect(tool.id)}
                                                    className={`w-full flex items-center justify-between p-4 rounded-md transition-all group ${selectedIndex === index
                                                        ? "bg-card-hover border border-border shadow-sm"
                                                        : "bg-transparent border border-transparent"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`size-10 rounded flex items-center justify-center transition-colors border ${selectedIndex === index
                                                            ? "bg-foreground text-background border-transparent"
                                                            : "bg-muted/10 border-border text-foreground"
                                                            }`}>
                                                            <Icon className="size-5" />
                                                        </div>
                                                        <div className="text-left">
                                                            <div className="font-bold text-foreground text-sm tracking-tight">{tool.title}</div>
                                                            <div className="text-xs text-muted font-medium">{tool.language} &bull; {tool.license}</div>
                                                        </div>
                                                    </div>
                                                    {selectedIndex === index && (
                                                        <ArrowRight className="size-4 opacity-40 mr-2" />
                                                    )}
                                                </button>
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <div className="py-20 text-center">
                                        <div className="p-4 rounded-full bg-muted/5 w-fit mx-auto mb-4 border border-dashed border-border">
                                            <Search className="h-6 w-6 text-muted/40" />
                                        </div>
                                        <p className="text-sm text-muted font-medium">No results found for "{query}"</p>
                                    </div>
                                )}
                            </div>

                            <div className="px-5 py-4 bg-muted/5 border-t border-border flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted/40 font-mono">
                                <div className="flex gap-6">
                                    <span className="flex items-center gap-2">↑↓ Navigate</span>
                                    <span className="flex items-center gap-2">↵ Select</span>
                                </div>
                                <div className="flex items-center gap-2 italic opacity-60">
                                    <Search className="size-3" /> search engine v1.0
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
