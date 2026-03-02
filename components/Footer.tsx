import Link from "next/link"
import { Terminal, Github, Twitter, MessageSquare, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border bg-card/60 pt-20 pb-12 mt-12 relative z-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-foreground text-background p-1 rounded-md">
                                <Terminal className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">Climon Industrial</span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed max-w-sm mb-8">
                            High-performance, dependency-free utility belt for the modern engineer.
                            Building the next generation of industrial-grade CLI tools.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full border border-border hover:bg-muted/50 transition-colors">
                                <Github className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full border border-border hover:bg-muted/50 transition-colors">
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full border border-border hover:bg-muted/50 transition-colors">
                                <MessageSquare className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">PyCurl Engine</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">DevMate (Beta)</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">NetScan Pro</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">All Utilities</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">Changelog</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">System Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6">Organization</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">About Climon</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">Open Source</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted hover:text-foreground text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6">
                        <span className="text-muted text-xs">© 2024 Climon Industrial. MIT Licensed.</span>
                        <div className="h-4 w-px bg-border hidden md:block" />
                        <span className="text-muted text-xs font-mono uppercase tracking-widest hidden md:block">Built to last</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 bg-muted/20 border border-border rounded-full">
                        <div className="relative size-2">
                            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                            <div className="relative size-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
