"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const technologies = [
  { name: "React", category: "Core", color: "#61DAFB" },
  { name: "TypeScript", category: "Core", color: "#3178C6" },
  { name: "Vite", category: "Build", color: "#646CFF" },
  { name: "Mantine UI", category: "UI", color: "#339AF0" },
  { name: "TanStack Query", category: "State", color: "#FF4154" },
  { name: "React Hook Form", category: "Forms", color: "#EC5990" },
  { name: "Zod", category: "Validation", color: "#3E67B1" },
  { name: "ESLint", category: "Quality", color: "#4B32C3" },
  { name: "Husky", category: "Quality", color: "#42B983" },
  { name: "Axios", category: "HTTP", color: "#5A29E4" },
  { name: "React Router", category: "Routing", color: "#CA4245" },
  { name: "Git", category: "Version", color: "#F05032" },
]

const categories = ["Core", "Build", "UI", "State", "Forms", "Validation", "Quality", "HTTP", "Routing", "Version"]

function TechCard({ tech, index }: { tech: (typeof technologies)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: `${tech.color}20` }}
      />
      <div className="relative p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-border transition-all duration-300">
        <div
          className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-xl font-bold"
          style={{
            backgroundColor: `${tech.color}15`,
            color: tech.color,
          }}
        >
          {tech.name.slice(0, 2).toUpperCase()}
        </div>
        <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${tech.color}15`,
            color: tech.color,
          }}
        >
          {tech.category}
        </span>
      </div>
    </motion.div>
  )
}

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="stack" className="py-32 md:py-40 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
            Tecnologías
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestro <span className="text-gradient">Stack</span> Moderno
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Las herramientas que potencian nuestra productividad y calidad de código
          </p>
        </motion.div>

        {/* Tech grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Floating connection lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-muted-foreground">12 tecnologías integradas trabajando en armonía</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
