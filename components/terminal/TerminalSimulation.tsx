"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check } from "lucide-react"

const lines = [
    { type: "command", text: "climon install pycurl", delay: 1000 },
    { type: "success", text: "[success] PyCurl installed in 200ms", delay: 500 },
    { type: "command", text: "pycurl get https://google.com", delay: 1500 },
    // { type: "output", text: "HTTP/1.1 200 OK", delay: 200 },
    { type: "output", text: "GET request to https://google.com successful.", delay: 100 },
    { type: "output", text: "Status Code: 200", delay: 100 },
    { type: "comment", text: "try climon devs new friend" }
]

export function TerminalSimulation() {
    const [visibleLines, setVisibleLines] = useState<number>(0)
    const [currentText, setCurrentText] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (visibleLines >= lines.length) return

        const line = lines[visibleLines]
        if (line.type === "command") {
            setIsTyping(true)
            let charIndex = 0
            const interval = setInterval(() => {
                setCurrentText(line.text.substring(0, charIndex + 1))
                charIndex++
                if (charIndex >= line.text.length) {
                    clearInterval(interval)
                    setIsTyping(false)
                    setTimeout(() => {
                        setVisibleLines(v => v + 1)
                        setCurrentText("")
                    }, 500)
                }
            }, 50)
            return () => clearInterval(interval)
        } else if (line.type === "comment") {
            setIsTyping(true)
            let charIndex = 0
            const interval = setInterval(() => {
                setCurrentText(line.text.substring(0, charIndex + 1))
                charIndex++
                if (charIndex >= line.text.length) {
                    clearInterval(interval)
                    setIsTyping(false)
                    setTimeout(() => {
                        setVisibleLines(v => v + 1)
                        setCurrentText("")
                    }, 500)
                }
            }, 50)
            return () => clearInterval(interval)
        } else {
            const timeout = setTimeout(() => {
                setVisibleLines(v => v + 1)
            }, line.delay)
            return () => clearTimeout(timeout)
        }
    }, [visibleLines])

    return (
        <div className="w-full max-w-3xl mx-auto mt-12 scale-90 sm:scale-100">
            <div className="rounded-lg overflow-hidden border border-border bg-card shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-muted/10 px-4 py-3 border-b border-border flex items-center justify-between">
                    <div className="flex gap-1.5 flex-1">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono text-muted/50 uppercase tracking-[0.2em] font-bold flex-1 text-center">
                        climon session — registry
                    </div>
                    <div className="flex-1 flex justify-end">
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("climon install pycurl");
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                            className="p-1 px-2 rounded-md border border-border bg-background hover:bg-muted/10 text-muted hover:text-foreground transition-all flex items-center gap-1.5"
                        >
                            {copied ? <Check className="size-3 text-green-500" /> : <Copy className="size-3" />}
                            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-xs sm:text-sm h-[240px] overflow-hidden bg-background">
                    <div className="space-y-1.5">
                        {lines.slice(0, visibleLines).map((line, i) => (
                            <div key={i} className="flex gap-2">
                                {line.type === "command" && <span className="text-foreground/40">$</span>}
                                {line.type === "comment" && <span className="text-yellow-600/80">#</span>}
                                <span className={
                                    line.type === "success" ? "text-green-500" :
                                        line.type === "output" ? "text-muted" :
                                            line.type === "comment" ? "text-yellow-600/80 italic" : "text-foreground"
                                }>
                                    {line.text}
                                </span>
                            </div>
                        ))}

                        {visibleLines < lines.length && lines[visibleLines].type === "command" && (
                            <div className="flex gap-2">
                                <span className="text-foreground/40">$</span>
                                <span className="text-foreground">
                                    {currentText}
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-2 h-4 bg-foreground ml-1 align-middle"
                                    />
                                </span>
                            </div>
                        )}

                        {visibleLines < lines.length && lines[visibleLines].type === "comment" && (
                            <div className="flex gap-2">
                                <span className="text-yellow-600/80">#</span>
                                <span className="text-yellow-600/80 italic">
                                    {currentText}
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-2 h-4 bg-yellow-600/80 ml-1 align-middle"
                                    />
                                </span>
                            </div>
                        )}

                        {visibleLines === lines.length && (
                            <div className="flex gap-2">
                                <span className="text-foreground/40">$</span>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-2 h-4 bg-foreground align-middle"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Simulation Reset Hint */}
            {visibleLines === lines.length && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-4"
                >
                    <button
                        onClick={() => { setVisibleLines(0); setCurrentText("") }}
                        className="text-[10px] uppercase tracking-tighter font-bold text-muted hover:text-foreground transition-colors"
                    >
                        Replay Simulation
                    </button>
                </motion.div>
            )}
        </div>
    )
}
