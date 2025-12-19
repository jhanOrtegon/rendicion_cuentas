"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "La migración a Vite redujo nuestros tiempos de build de minutos a segundos. El equipo ahora puede iterar más rápido que nunca.",
    author: "Tech Lead",
    role: "Arquitectura Frontend",
  },
  {
    text: "Estandarizar con Mantine UI nos permitió enfocarnos en la lógica de negocio en lugar de reinventar componentes.",
    author: "Senior Developer",
    role: "UI/UX Implementation",
  },
  {
    text: "TanStack Query transformó completamente cómo manejamos el estado del servidor. El código es más limpio y predecible.",
    author: "Frontend Developer",
    role: "State Management",
  },
]

export function QuotesSection() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 text-xs font-medium text-muted-foreground mb-6">
            <Quote className="w-3 h-3" />
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Voces del <span className="text-gradient">Equipo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">"{quote.text}"</p>
                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground text-sm">{quote.author}</div>
                  <div className="text-xs text-muted-foreground">{quote.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
