"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDown, GitBranch, Zap, Layers, Database, Shield } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const achievements = [
    { icon: GitBranch, label: "16 Repositorios", desc: "Arquitectura modular" },
    { icon: Zap, label: "Vite", desc: "Build ultrarrápido" },
    { icon: Layers, label: "Mantine UI", desc: "Sistema de diseño" },
    { icon: Database, label: "TanStack Query", desc: "Estado del servidor" },
    { icon: Shield, label: "ESLint + Husky", desc: "Calidad garantizada" },
  ]

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                TTN COMPANY · Frontend Team · 2025
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              De Monolito a
              <br />
              <span className="text-gradient">Arquitectura Modular</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              La transformación del equipo Frontend: de un repositorio a{" "}
              <span className="text-foreground font-medium">16 aplicaciones independientes</span>, con estándares de
              excelencia y tecnología de vanguardia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mt-16 max-w-4xl mx-auto"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-4 md:p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs tracking-widest uppercase">Explorar</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
