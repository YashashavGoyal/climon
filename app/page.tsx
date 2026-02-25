"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { TerminalCommand } from "@/components/TerminalCommand"
import { BentoCard } from "@/components/BentoCard"
import {
  RefreshCcw,
  Radar as RadarIcon,
  Terminal as TerminalIcon,
  ShieldCheck,
  LineChart,
  Zap as ZapIcon
} from "lucide-react"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              The Developer Utility Belt
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 font-medium">
              High-performance industrial tools for the modern engineer. Built with precision, minimal by design.
            </p>
            <TerminalCommand command="climon install all" />
          </motion.div>

          {/* Tool Showcase */}
          <section className="mt-32">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted">System Utilities</h2>
              <div className="h-px flex-1 bg-border ml-4"></div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              <motion.div variants={item} className="md:col-span-7">
                <BentoCard
                  icon={RefreshCcw}
                  title="PyCurl Engine"
                  description="Lightweight request handling with native C-bindings for unprecedented performance in Python environments."
                >
                  <div className="bg-code-bg rounded-xl p-4 font-mono text-xs border border-border">
                    <div className="flex gap-2 text-muted/60 mb-1"><span>1</span> <span className="text-foreground">from climon import PyCurl</span></div>
                    <div className="flex gap-2 text-muted/60 mb-1"><span>2</span> <span className="text-foreground">client = PyCurl()</span></div>
                    <div className="flex gap-2 text-muted/60"><span>3</span> <span className="text-foreground">resp = client.fetch("https://api.dev")</span></div>
                  </div>
                </BentoCard>
              </motion.div>

              <motion.div variants={item} className="md:col-span-5">
                <BentoCard
                  icon={RadarIcon}
                  title="NetScan Pro"
                  description="Real-time port scanning and network mapping with zero overhead. Industrial grade security auditing."
                >
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[80%]"></div>
                    </div>
                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-foreground/40 w-[45%]"></div>
                    </div>
                  </div>
                </BentoCard>
              </motion.div>

              <motion.div variants={item} className="md:col-span-4">
                <BentoCard
                  icon={TerminalIcon}
                  title="Shell Wrap"
                  description="Standardize your terminal outputs across all platforms."
                />
              </motion.div>

              <motion.div variants={item} className="md:col-span-4">
                <BentoCard
                  icon={ShieldCheck}
                  title="Key Vault"
                  description="Encrypted environment variable storage with AES-256."
                />
              </motion.div>

              <motion.div variants={item} className="md:col-span-4">
                <BentoCard
                  icon={LineChart}
                  title="Log Stream"
                  description="Zero-latency logging pipe for high-throughput apps."
                />
              </motion.div>
            </motion.div>
          </section>

          {/* Feature Highlights */}
          <section className="mt-32 border-t border-border pt-24 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden rounded-2xl border border-border">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-background p-10 flex flex-col items-center text-center group transition-colors hover:bg-card"
              >
                <div className="flex justify-center mb-8 p-3 bg-card rounded-xl border border-border group-hover:border-foreground/10 transition-colors">
                  <ZapIcon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Universal Installer</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Single command deployment architecture optimized for any cloud or local environment.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-background p-10 flex flex-col items-center text-center group transition-colors hover:bg-card"
              >
                <div className="flex justify-center mb-8 p-3 bg-card rounded-xl border border-border group-hover:border-foreground/10 transition-colors">
                  <ShieldCheck className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Type-Safe Core</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Enterprise-grade type safety enforcement across all CLI utility operations.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-background p-10 flex flex-col items-center text-center group transition-colors hover:bg-card"
              >
                <div className="flex justify-center mb-8 p-3 bg-card rounded-xl border border-border group-hover:border-foreground/10 transition-colors">
                  <RefreshCcw className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Zero Overhead</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Intelligent defaults designed by engineers for maximum workflow efficiency.
                </p>
              </motion.div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
}
