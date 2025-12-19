"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-bold text-background text-xs">TTN</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground text-sm">TTN COMPANY</span>
              <span className="text-xs text-muted-foreground">Frontend Engineering Team</span>
            </div>
          </div>

          {/* Center text */}
          <p className="text-sm text-muted-foreground text-center">
            De un monorepo a 16 repositorios. Un año de transformación.
          </p>

          {/* Year badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-card/30">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium text-muted-foreground">2025 Annual Review</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
