import { motion } from "framer-motion"

export function AboutHero() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border relative overflow-hidden">
            <div className="absolute inset-0 noise-texture opacity-[0.03]" />
            <div className="relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-8"
                >
                    The Mission
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-12"
                >
                    Tools should <br />
                    work for <br />
                    the engineer. <br />
                    <span className="text-muted">Not against them.</span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-2xl"
                >
                    <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium">
                        Climon is a manifesto in code. A rejection of bloat, a commitment to performance,
                        and a return to the terminal as a first-class citizen of the development workflow.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
