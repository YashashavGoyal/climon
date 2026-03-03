import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function NoList() {
    const items = [
        { label: "No Bloat", status: true, desc: "Single static binaries with zero external dependencies." },
        { label: "No Tracking", status: true, desc: "We don't collect telemetry. Your data stays in your terminal." },
        { label: "No Subscriptions", status: true, desc: "Open source and free forever. No monthly fees, no paywalls." },
        { label: "No Complex Setup", status: true, desc: "One command to install, one command to update." },
        { label: "Proprietary Lock-in", status: false, desc: "Everything is standard, portable, and open." },
    ]

    return (
        <section className="py-24 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted sticky top-24">
                        The "No" List
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <div className="grid grid-cols-1 gap-8">
                        {items.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group flex gap-6 items-start"
                            >
                                <div className={`mt-1 p-1 rounded-full ${item.status ? 'bg-foreground text-background' : 'bg-red-500/10 text-red-500'}`}>
                                    {item.status ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 group-hover:translate-x-1 transition-transform">{item.label}</h3>
                                    <p className="text-muted leading-relaxed max-w-lg">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
