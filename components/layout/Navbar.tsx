"use client"

import Link from "next/link"
import { Github, Terminal, Search, Menu, X } from "lucide-react"
import { ThemeToggle } from "../ui/ThemeToggle"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion"
import { CommandPalette } from "../ui/CommandPalette"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const navLinks = [
        { href: "/tools", label: "Tools" },
        { href: "/docs", label: "Docs" },
        { href: "/about", label: "About" },
    ]

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
                        <div className="bg-foreground text-background p-1 rounded-sm">
                            <Terminal className="h-4 w-4" />
                        </div>
                        <span className="font-bold tracking-tight text-lg">Climon</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden lg:block">
                        <div
                            onClick={() => window.dispatchEvent(new CustomEvent('open-climon-search'))}
                            className="flex items-center gap-2 h-8 w-64 rounded-md border border-border bg-transparent px-3 text-xs text-muted hover:border-foreground/20 transition-all cursor-pointer"
                        >
                            <Search className="h-3.5 w-3.5" />
                            <span>Search...</span>
                            <div className="ml-auto flex items-center gap-1 rounded border border-border bg-card px-1.5 py-0.5 text-[9px] font-mono">
                                <span>⌘ / ctrl</span>
                                <span>K</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-4">
                        <Link
                            href="https://github.com/YashashavGoyal/climon.git"
                            target="_blank"
                            className="text-muted hover:text-foreground transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="flex md:hidden items-center justify-center p-2 text-muted hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Tiny Mobile Search & Theme Toggle (Visible only when drawer is closed on mobile) */}
                    <div className="flex sm:hidden items-center gap-2">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            <div className="relative w-full mb-2">
                                <div className="flex items-center gap-2 h-10 w-full rounded-md border border-border bg-transparent px-3 text-sm text-muted">
                                    <Search className="h-4 w-4" />
                                    <span>Search components...</span>
                                </div>
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-muted hover:text-foreground transition-colors py-2 border-b border-border/40 last:border-0"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                                <span className="text-sm font-medium text-muted">Follow us</span>
                                <Link
                                    href="https://github.com/YashashavGoyal/climon.git"
                                    target="_blank"
                                    className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="text-sm">GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <CommandPalette />
        </nav>
    )
}
