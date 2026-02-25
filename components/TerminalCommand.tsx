"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function TerminalCommand({ command }: { command: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="w-full max-w-xl group relative">
            <div className="absolute -inset-0.5 bg-foreground/5 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-[#000000] dark:bg-[#18181B] rounded-lg p-1.5 border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center px-4 py-2 border-b border-white/5 mb-1">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3 font-mono text-sm">
                        <span className="text-white/40 select-none">~</span>
                        <span className="text-white">{command}</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-2 h-4 bg-white/80"
                        />
                    </div>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white text-white hover:text-black rounded text-[11px] font-bold uppercase tracking-wider transition-all"
                    >
                        <AnimatePresence mode="wait">
                            {copied ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.5, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Check className="h-3 w-3" />
                                    <span>Copied</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.5, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Copy className="h-3 w-3" />
                                    <span>Copy</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </div>
    )
}
