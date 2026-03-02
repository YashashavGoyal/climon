"use client"

import { motion } from "framer-motion"

const specs = [
    { name: "PyCurl", language: "Python", size: "1.2 MB", license: "MIT" },
    { name: "DevMate", language: "Python", size: "4.5 MB", license: "MIT" },
    { name: "NetScan", language: "To be decided", size: "To be decided", license: "MIT" },
    { name: "LogPipe", language: "To be decided", size: "To be decided", license: "MIT" },
    { name: "KeyVault", language: "To be decided", size: "To be decided", license: "MIT" },
]

export function TechSpecs() {
    return (
        <section className="mt-12">
            <div className="flex items-center justify-between mb-16">
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted">Technical Data Sheet</h2>
                <div className="h-px flex-1 bg-border ml-4"></div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="py-4 text-xs font-bold uppercase tracking-widest text-muted">Tool Name</th>
                            <th className="py-4 text-xs font-bold uppercase tracking-widest text-muted">Language</th>
                            <th className="py-4 text-xs font-bold uppercase tracking-widest text-muted">Binary Size</th>
                            <th className="py-4 text-xs font-bold uppercase tracking-widest text-muted text-right">License</th>
                        </tr>
                    </thead>
                    <tbody>
                        {specs.map((spec, index) => (
                            <motion.tr
                                key={spec.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b border-border/50 group hover:bg-muted/5 transition-colors"
                            >
                                <td className="py-6 font-bold text-lg">{spec.name}</td>
                                <td className="py-6 text-muted font-medium">{spec.language}</td>
                                <td className="py-6 font-mono text-sm text-muted">{spec.size}</td>
                                <td className="py-6 text-right font-medium text-xs tracking-widest uppercase">{spec.license}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
