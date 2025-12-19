"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Box, Layers, GitBranch, Wrench, Code2 } from "lucide-react"

const timelineItems = [
  {
    icon: Box,
    quarter: "Q1",
    title: "App Activo Fijo",
    subtitle: "El punto de partida",
    description:
      "Primera aplicación del equipo Frontend. Identificamos oportunidades clave de mejora en arquitectura, rendimiento y estandarización.",
  },
  {
    icon: Layers,
    quarter: "Q2",
    title: "Estandarización de Componentes",
    subtitle: "Código limpio y reutilizable",
    description:
      "Implementamos componentes con principios de código limpio. Redujimos duplicación y establecimos coherencia visual en todo el ecosistema.",
  },
  {
    icon: Code2,
    quarter: "Q2",
    title: "Arquitectura Definida",
    subtitle: "Presentational & Container Pattern",
    description:
      "Definimos Feature-based architecture con separación clara de responsabilidades. Organización por funcionalidades del negocio.",
  },
  {
    icon: GitBranch,
    quarter: "Q3",
    title: "Migración a Multirepo",
    subtitle: "De 1 a 16 repositorios",
    description:
      "Migramos del monolito a 16 repos independientes. Solucionamos problemas de rendimiento y mantenibilidad. De CRA a Vite.",
  },
  {
    icon: Wrench,
    quarter: "Q4",
    title: "Stack Unificado",
    subtitle: "Herramientas de clase mundial",
    description:
      "ESLint para código limpio, Husky para validaciones, TanStack Query para estado asíncrono y Mantine UI para consistencia visual.",
  },
]

function TimelineItem({ item, index }: { item: (typeof timelineItems)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-start"
    >
      {/* Left side - Content for even items */}
      <div className={`${index % 2 === 0 ? "md:text-right" : "md:order-3"} ${index % 2 !== 0 ? "md:text-left" : ""}`}>
        {index % 2 === 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300 group"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              {item.quarter} 2025
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-primary font-medium mb-3">{item.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        )}
      </div>

      {/* Center - Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1, type: "spring" }}
          className="relative"
        >
          <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>

      {/* Right side - Content for odd items */}
      <div className={`${index % 2 !== 0 ? "" : "md:order-3"}`}>
        {index % 2 !== 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              {item.quarter} 2025
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-primary font-medium mb-3">{item.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export function TimelineSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section id="timeline" ref={containerRef} className="py-32 md:py-40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 text-xs font-medium text-muted-foreground mb-6">
            Nuestro Recorrido
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Evolución <span className="text-gradient">2025</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los hitos que definieron la transformación del equipo Frontend de TTN COMPANY
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30 -translate-x-1/2 hidden md:block">
            <motion.div style={{ height: lineHeight }} className="w-full gradient-line" />
          </div>

          <div className="space-y-12 md:space-y-20">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
