import { LucideIcon } from "lucide-react"

interface BentoCardProps {
    icon: LucideIcon
    title: string
    description: string
    className?: string
    children?: React.ReactNode
}

export function BentoCard({ icon: Icon, title, description, className, children }: BentoCardProps) {
    return (
        <div className={`border border-border bg-white/[0.02] p-6 rounded-lg transition-all duration-300 hover:bg-white/[0.04] hover:border-foreground/10 flex flex-col justify-between group ${className}`}>
            <div>
                <div className="size-10 bg-background border border-border text-foreground rounded flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-muted mb-6 max-w-sm font-medium leading-relaxed">{description}</p>
            </div>
            {children}
        </div>
    )
}
