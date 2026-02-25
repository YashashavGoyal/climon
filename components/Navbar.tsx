"use client"

import Link from "next/link"
import { Github, Terminal, Search } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl transition-all",
                isScrolled ? "h-14" : "h-16"
            )}
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-foreground text-background p-1 rounded">
                            <Terminal className="h-4 w-4" />
                        </div>
                        <span className="font-bold tracking-tight text-lg">Climon</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            Tools
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            Docs
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            About
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block">
                        <div className="flex items-center gap-2 h-8 w-64 rounded-md border border-border bg-transparent px-3 text-xs text-muted hover:border-foreground/20 transition-all cursor-pointer">
                            <Search className="h-3.5 w-3.5" />
                            <span>Search...</span>
                            <div className="ml-auto flex items-center gap-1 rounded border border-border bg-card px-1.5 py-0.5 text-[9px] font-mono">
                                <span>⌘</span>
                                <span>K</span>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="https://github.com/YashashavGoyal/climon.git"
                        target="_blank"
                        className="text-muted hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
