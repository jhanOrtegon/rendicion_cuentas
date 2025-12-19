"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Compass, TestTube, ArrowUpRight, Layers, Globe } from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q1",
    year: "2026",
    title: "Tests Unitarios con Vitest",
    desc: "Implementación de pruebas unitarias utilizando Vitest para validar componentes y lógica de negocio",
    icon: TestTube,
    status: "planned",
    features: [
      "Configuración base de Vitest",
      "Pruebas de componentes",
      "Pruebas de hooks y utilidades",
      "Mocks y spies con Vitest",
      "Cobertura de código",
    ],
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "Storybook y Documentación de Componentes",
    desc: "Documentación y validación de componentes UI utilizando Storybook como fuente única de referencia",
    icon: Layers,
    status: "planned",
    features: [
      "Catálogo de componentes en Storybook",
      "Documentación de props y estados",
      "Ejemplos de uso",
      "Casos de componentes (empty, loading, error)",
    ],
  },
  {
    quarter: "Q3",
    year: "2026",
    title: "Internacionalización (i18n)",
    desc: "Preparación de la aplicación para soportar múltiples idiomas y formatos regionales",
    icon: Globe,
    status: "planned",
    features: [
      "Soporte multi-idioma",
      "Gestión centralizada de textos",
      "Formatos regionales (fechas, monedas)",
      "Detección y cambio de idioma",
    ],
  },
];


const statusColors = {
  planned: "bg-emerald-500",
  exploring: "bg-blue-500",
  research: "bg-amber-500",
  vision: "bg-purple-500",
}

const statusLabels = {
  planned: "Planificado",
  exploring: "Explorando",
  research: "Investigación",
  vision: "Visión",
}

export function RoadmapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="roadmap" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.03),transparent_70%)]" />
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
            <Compass className="w-3 h-3" />
            Futuro
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Roadmap <span className="text-gradient">2026</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra visión para seguir evolucionando y mantener la excelencia técnica
          </p>
        </motion.div>

        {/* Roadmap timeline */}
        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-16">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  className={`absolute top-6 hidden md:flex items-center justify-center w-4 h-4 rounded-full ${statusColors[item.status as keyof typeof statusColors]} ${
                    index % 2 === 0
                      ? "right-0 translate-x-[calc(100%+1.5rem)]"
                      : "left-0 -translate-x-[calc(100%+1.5rem)]"
                  }`}
                >
                  <span
                    className="absolute w-8 h-8 rounded-full animate-ping opacity-20"
                    style={{ backgroundColor: "currentColor" }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-bold text-primary">
                          {item.quarter} {item.year}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full text-white ${statusColors[item.status as keyof typeof statusColors]}`}
                        >
                          {statusLabels[item.status as keyof typeof statusLabels]}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-primary font-medium hover:bg-primary/10 transition-colors cursor-pointer group">
            <span>El futuro es brillante</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
