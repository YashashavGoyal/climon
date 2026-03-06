"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const platforms = [
    {
        id: "macos",
        name: "macOS",
        label: "Brew",
        command: "brew install climon/tap/climon",
    },
    {
        id: "windows",
        name: "Windows",
        label: "Scoop",
        command: "scoop bucket add climon https://github.com/climon/scoop && scoop install climon",
    },
    {
        id: "linux",
        name: "Linux",
        label: "Curl",
        command: "curl -fsSL https://climon.sh/install | sh",
    },
    {
        id: "docker",
        name: "Docker",
        label: "Pull",
        command: "docker pull climon/climon:latest",
    },
]

export function InstallTabs() {
    const [activeTab, setActiveTab] = useState(platforms[0].id)

    const [copied, setCopied] = useState(false)

    const handleCopy = (command: string) => {
        navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="mt-12 mb-32 border-t border-border pt-24 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ready to gear up?</h2>
                <p className="text-muted mb-12">Select your platform and get started in seconds.</p>

                <div className="bg-card border border-border rounded-2xl p-2 sm:p-4 shadow-sm">
                    {/* Custom Tabs List */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-8 bg-muted/20 p-1.5 rounded-xl w-full sm:w-fit mx-auto">
                        {platforms.map((platform) => (
                            <button
                                key={platform.id}
                                onClick={() => setActiveTab(platform.id)}
                                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all relative ${activeTab === platform.id ? "text-foreground" : "text-muted hover:text-foreground"
                                    }`}
                            >
                                {activeTab === platform.id && (
                                    <motion.div
                                        layoutId="active-tab"
                                        className="absolute inset-0 bg-background border border-border rounded-lg shadow-sm"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex flex-col sm:flex-row items-center sm:gap-1.5">
                                    <span>{platform.name}</span>
                                    <span className="text-[9px] opacity-50 uppercase sm:ml-0">({platform.label})</span>
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="relative min-h-[100px] flex items-center justify-center p-4">
                        <AnimatePresence mode="wait">
                            {platforms.map((platform) => (
                                platform.id === activeTab && (
                                    <motion.div
                                        key={platform.id}
                                        initial={{ opacity: 0, scale: 0.98, y: 5 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.98, y: -5 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-full"
                                    >
                                        <div className="bg-code-bg border border-border rounded-xl p-6 font-mono text-sm group relative overflow-hidden">
                                            <div className="flex items-center justify-between gap-4">
                                                <code className="text-foreground break-all text-left">
                                                    <span className="text-muted/50 mr-2">$</span>
                                                    {platform.command}
                                                </code>
                                                <button
                                                    onClick={() => handleCopy(platform.command)}
                                                    className="px-3 py-1.5 rounded-md bg-foreground text-background text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
                                                >
                                                    {copied ? "Copied!" : "Copy"}
                                                </button>
                                            </div>

                                            {/* Decorative elements */}
                                            <div className="absolute top-0 right-0 p-2 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
