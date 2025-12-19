"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Target, Lightbulb, Rocket, Users, Heart } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "16 Repositorios",
    desc: "Migración exitosa del monorepo a arquitectura multirepo",
    highlight: "Completado",
  },
  {
    icon: Target,
    title: "0 Deuda Técnica",
    desc: "Estandarización completa con Mantine UI y patrones modernos",
    highlight: "Logrado",
  },
  {
    icon: Lightbulb,
    title: "Innovación Continua",
    desc: "Adopción de TanStack Query, React Hook Form y Zod",
    highlight: "Implementado",
  },
  {
    icon: Rocket,
    title: "Alta Velocidad",
    desc: "Builds 80% más rápidos con Vite y artefactos ligeros",
    highlight: "Optimizado",
  },
]

const values = [
  { icon: Users, label: "Colaboración", desc: "Trabajo en equipo" },
  { icon: Heart, label: "Pasión", desc: "Por el código limpio" },
  { icon: Lightbulb, label: "Innovación", desc: "Mejora continua" },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 text-xs font-medium text-muted-foreground mb-6">
            <Trophy className="w-3 h-3" />
            Logros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Equipo <span className="text-gradient">Frontend</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los hitos que definen nuestra evolución en 2025
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Nuestros Valores</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-border/50 bg-card/30"
              >
                <value.icon className="w-4 h-4 text-primary" />
                <div className="text-left">
                  <div className="text-sm font-medium text-foreground">{value.label}</div>
                  <div className="text-xs text-muted-foreground">{value.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
