"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { X, Check, ArrowRight } from "lucide-react"

const comparisons = [
  {
    category: "Arquitectura",
    before: {
      title: "Monorepo Monolítico",
      points: ["Un solo repositorio gigante", "Conflictos constantes en PRs", "Pipelines lentos", "Equipos bloqueados"],
    },
    after: {
      title: "16 Repositorios",
      points: [
        "Repos independientes por app",
        "Cero conflictos entre equipos",
        "Builds optimizados",
        "Autonomía total",
      ],
    },
  },
  {
    category: "Build & Performance",
    before: {
      title: "Create React App",
      points: ["Tiempos de build lentos", "Bundles pesados", "HMR lento", "Config limitada"],
    },
    after: {
      title: "Vite",
      points: ["Builds ultrarrápidos", "Bundles optimizados", "HMR instantáneo", "Config flexible"],
    },
  },
  {
    category: "UI Components",
    before: {
      title: "Componentes Dispersos",
      points: ["Cada app con sus propios", "Estilos inconsistentes", "Duplicación masiva", "Sin sistema de diseño"],
    },
    after: {
      title: "Mantine UI",
      points: ["Librería compartida", "100% consistencia", "Desarrollo acelerado", "UX coherente"],
    },
  },
  {
    category: "Estado & Datos",
    before: {
      title: "Estado Manual",
      points: ["Fetching con useEffect", "Sin cache", "Estados repetidos", "Revalidación manual"],
    },
    after: {
      title: "TanStack Query",
      points: ["Cache inteligente", "Revalidaciones auto", "Estados centralizados", "Sync en tiempo real"],
    },
  },
  {
    category: "Calidad de Código",
    before: {
      title: "Sin Estándares",
      points: ["Código inconsistente", "Sin validaciones", "Bugs en producción", "Onboarding lento"],
    },
    after: {
      title: "ESLint + Husky",
      points: ["Código limpio", "Validación pre-commit", "Errores tempranos", "Onboarding rápido"],
    },
  },
]

function ComparisonCard({ comparison, index }: { comparison: (typeof comparisons)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      {/* Category label */}
      <div className="text-center mb-6">
        <span className="inline-flex px-3 py-1.5 rounded-full border border-border/50 bg-card/30 text-xs font-medium text-muted-foreground">
          {comparison.category}
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
        {/* Before */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 relative overflow-hidden"
        >
          <span className="absolute top-3 right-3 text-[10px] font-semibold text-red-400/70 uppercase tracking-wider">
            Antes
          </span>
          <h4 className="text-lg font-semibold text-foreground mb-4 mt-2">{comparison.before.title}</h4>
          <ul className="space-y-2.5">
            {comparison.before.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-red-400/70 mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center">
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="p-2 rounded-full border border-border/50 bg-card/50"
          >
            <ArrowRight className="w-4 h-4 text-primary" />
          </motion.div>
        </div>

        {/* After */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-xl border border-accent/20 bg-accent/5 relative overflow-hidden glow-subtle"
        >
          <span className="absolute top-3 right-3 text-[10px] font-semibold text-accent/70 uppercase tracking-wider">
            Después
          </span>
          <h4 className="text-lg font-semibold text-foreground mb-4 mt-2">{comparison.after.title}</h4>
          <ul className="space-y-2.5">
            {comparison.after.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function BeforeAfterSection() {
  return (
    <section id="transformation" className="py-32 md:py-40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 text-xs font-medium text-muted-foreground mb-6">
            Comparativa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            La <span className="text-gradient">Transformación</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El impacto de cada decisión técnica en el ecosistema Frontend
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {comparisons.map((comparison, index) => (
            <ComparisonCard key={comparison.category} comparison={comparison} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
