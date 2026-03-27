"use client"

import { useState } from "react"
import { Copy, Check, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroInput({ command }: { command: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
            <div className="w-full group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-foreground/20 to-foreground/5 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-card border-2 border-border rounded-lg p-2 shadow-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 px-4 py-3 flex-1 overflow-hidden">
                        <span className="text-muted/40 font-mono text-lg select-none">$</span>
                        <code className="text-foreground font-mono text-lg sm:text-xl font-bold truncate tracking-tight">
                            {command}
                        </code>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-[11px] font-bold uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.98]"
                    >
                        <AnimatePresence mode="wait">
                            {copied ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Check className="h-4 w-4" />
                                    <span>Copied</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Copy className="h-4 w-4" />
                                    <span>Copy</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            <button className="flex items-center gap-2 rounded border border-foreground bg-foreground text-background font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 hover:bg-transparent hover:text-foreground transition-all group">
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    )
}
