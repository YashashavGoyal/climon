import { motion } from "framer-motion"

export function TechStackGrid() {
    const stack = [
        { name: "Python", role: "CLI Engine", desc: "The primary engine for our high-level CLI orchestration and rapid prototyping.", color: "bg-blue-500/10 text-blue-500" },
        { name: "TypeScript", role: "Backend & CLI", desc: "Powering our Node.js backend and modern, type-safe CLI interfaces.", color: "bg-blue-600/10 text-blue-600" },
        { name: "Next.js", role: "Frontend", desc: "The foundation of our premium, high-performance web experience.", color: "bg-zinc-500/10 text-zinc-500" },
        { name: "Supabase", role: "Persistence", desc: "Scalable PostgreSQL and authentication for future-proof data management.", color: "bg-emerald-500/10 text-emerald-500" },
        { name: "Go", role: "CLI Engine (Future)", desc: "Upcoming integration for ultra-fast, concurrent system-level utilities.", color: "bg-cyan-500/10 text-cyan-500" },
    ]

    return (
        <section className="py-24 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted sticky top-24">
                        The Stack
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 border border-border bg-card hover:bg-foreground hover:text-background transition-colors group cursor-default"
                            >
                                <div className={`px-2 py-1 inline-block text-[10px] font-bold uppercase tracking-widest mb-6 border border-current`}>
                                    {tech.role}
                                </div>
                                <h3 className="text-2xl font-black tracking-tighter mb-4">{tech.name}</h3>
                                <p className="text-sm text-muted group-hover:text-background/70 leading-relaxed">
                                    {tech.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
