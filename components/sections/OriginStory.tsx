import { motion } from "framer-motion"

export function OriginStory() {
    return (
        <section className="py-24 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted sticky top-24">
                        The Origin
                    </h2>
                </div>
                <div className="md:col-span-8 space-y-12">
                    <div className="prose prose-invert prose-xl max-w-none text-foreground font-serif_ (waiting for design decision, sticking to sans for now)">
                        <p className="text-2xl md:text-3xl leading-relaxed">
                            "It started as a folder of scripts."
                        </p>
                        <p className="text-muted leading-relaxed">
                            Back in 2024, my <code className="bg-code-bg px-1.5 py-0.5 rounded text-foreground text-sm font-mono">~/bin</code> folder was a mess of bash scripts, python one-liners, and half-finished rust binaries. Each one solved a specific problem—formatting logs, querying APIs, managing local environments—but none of them felt like a cohesive toolset.
                        </p>

                        <div className="my-12 p-6 bg-card border border-border rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
                            <div className="flex gap-2 mb-4 opacity-30">
                                <div className="w-3 h-3 rounded-full bg-foreground" />
                                <div className="w-3 h-3 rounded-full bg-foreground" />
                                <div className="w-3 h-3 rounded-full bg-foreground" />
                            </div>
                            <pre className="text-muted">
                                <code>{`$ ls ~/scripts/climon-v0
total 48
-rwxr-xr-x  1 dev  staff   1.2K Oct 12 14:20 log-parse.sh
-rwxr-xr-x  1 dev  staff   842B Oct 14 09:12 git-clean.py
-rw-r--r--  1 dev  staff   4.5K Nov 02 11:45 README.md
...`}</code>
                            </pre>
                        </div>

                        <p className="text-muted leading-relaxed">
                            The friction of maintaining distributed dependencies and incompatible environments was slowing me down. Climon was born from the desire to unify these utilities into a single, high-performance binary ecosystem that just works.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
