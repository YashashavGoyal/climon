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
        <div className={`border border-border bg-card p-6 rounded-2xl transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group ${className}`}>
            <div>
                <div className="size-10 bg-foreground text-background rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted text-sm mb-6 max-w-sm">{description}</p>
            </div>
            {children}
        </div>
    )
}
