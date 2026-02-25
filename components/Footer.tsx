import Link from "next/link"
import { Terminal } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border py-12 mt-20">
            <div className="mx-auto flex max-w-7xl flex-col md:flex-row justify-between items-center gap-8 px-6">
                <div className="flex items-center gap-3">
                    <div className="bg-foreground text-background p-0.5 rounded">
                        <Terminal className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-bold text-sm">Climon Industrial</span>
                    <span className="text-muted text-[11px] font-medium tracking-wider uppercase ml-4">
                        Established 2024
                    </span>
                </div>
                <div className="flex gap-8">
                    <Link
                        href="https://github.com/YashashavGoyal/climon.git"
                        className="text-muted hover:text-foreground text-xs font-semibold tracking-wide transition-colors uppercase"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="#"
                        className="text-muted hover:text-foreground text-xs font-semibold tracking-wide transition-colors uppercase"
                    >
                        Documentation
                    </Link>
                    <Link
                        href="#"
                        className="text-muted hover:text-foreground text-xs font-semibold tracking-wide transition-colors uppercase"
                    >
                        Status
                    </Link>
                    <Link
                        href="#"
                        className="text-muted hover:text-foreground text-xs font-semibold tracking-wide transition-colors uppercase"
                    >
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
