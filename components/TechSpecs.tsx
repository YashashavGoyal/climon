"use client"

import { motion } from "framer-motion"

import toolsData from "@/content/tools/tools.json"

const specs = toolsData.map(tool => ({
    name: tool.title,
    language: tool.language,
    status: tool.status,
    license: tool.license
}));

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
                            <th className="py-4 text-xs font-bold uppercase tracking-widest text-muted">Status</th>
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
                                <td className="py-6">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${spec.status === 'Stable' ? 'border-green-500/20 text-green-500 bg-green-500/5' :
                                        spec.status === 'Beta' ? 'border-orange-500/20 text-orange-500 bg-orange-500/5' :
                                            'border-border text-muted bg-muted/20'
                                        }`}>
                                        {spec.status}
                                    </span>
                                </td>
                                <td className="py-6 text-right font-medium text-xs tracking-widest uppercase">{spec.license}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
