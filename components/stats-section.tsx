"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { GitBranch, Clock, Package, Layers, TrendingUp, Zap } from "lucide-react"

const stats = [
  { icon: GitBranch, value: 16, suffix: "", label: "Repositorios", desc: "Arquitectura modular" },
  { icon: Clock, value: 80, suffix: "%", label: "Menos Tiempo Build", desc: "Migración a Vite" },
  { icon: Package, value: 60, suffix: "%", label: "Menos Bundle Size", desc: "Artefactos ligeros" },
  { icon: Layers, value: 100, suffix: "%", label: "Estandarización", desc: "Mantine UI" },
  { icon: TrendingUp, value: 200, suffix: "%", label: "Productividad", desc: "Features por sprint" },
  { icon: Zap, value: 5, suffix: "", label: "Herramientas", desc: "Stack integrado" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-foreground tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 text-center group"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors"
      >
        <stat.icon className="w-6 h-6 text-primary" />
      </motion.div>

      <div className="mb-2">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>

      <h3 className="text-base font-semibold text-foreground mb-1">{stat.label}</h3>
      <p className="text-sm text-muted-foreground">{stat.desc}</p>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="py-32 md:py-40 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 text-xs font-medium text-muted-foreground mb-6">
            Resultados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            El <span className="text-gradient">Impacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Métricas que demuestran el éxito de la transformación
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
