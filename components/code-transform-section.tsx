"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

const beforeCode = `// ANTES - Create React App
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`

const afterCode = `// DESPUÉS - Vite + TanStack Query + Mantine
import { useQuery } from '@tanstack/react-query';
import { List, Skeleton, Alert } from '@mantine/core';
import { userService } from '@/services';

export function UserList() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: userService.getAll,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <Skeleton h={200} />;
  if (error) return <Alert color="red">{error.message}</Alert>;

  return (
    <List spacing="sm" center>
      {users?.map(user => (
        <List.Item key={user.id}>{user.name}</List.Item>
      ))}
    </List>
  );
}`

function CodeBlock({ code, variant }: { code: string; variant: "before" | "after" }) {
  const lines = code.split("\n")

  return (
    <div
      className={`relative rounded-xl overflow-hidden border ${
        variant === "before" ? "border-red-500/20 bg-red-950/10" : "border-emerald-500/20 bg-emerald-950/10"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-2 px-4 py-3 border-b ${
          variant === "before" ? "border-red-500/20" : "border-emerald-500/20"
        }`}
      >
        <div className="flex gap-1.5">
          <span className={`w-3 h-3 rounded-full ${variant === "before" ? "bg-red-500/50" : "bg-emerald-500/50"}`} />
          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
        </div>
        <span className={`text-xs font-medium ml-2 ${variant === "before" ? "text-red-400" : "text-emerald-400"}`}>
          {variant === "before" ? "legacy-component.jsx" : "modern-component.tsx"}
        </span>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-xs md:text-sm font-mono">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: variant === "before" ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="leading-6"
            >
              <span className="text-muted-foreground/40 select-none mr-4 inline-block w-6 text-right">{i + 1}</span>
              <span
                className={
                  line.includes("//")
                    ? "text-muted-foreground"
                    : line.includes("import") ||
                        line.includes("export") ||
                        line.includes("function") ||
                        line.includes("const")
                      ? "text-primary"
                      : line.includes("return") || line.includes("if")
                        ? "text-accent"
                        : "text-foreground/80"
                }
              >
                {line}
              </span>
            </motion.div>
          ))}
        </pre>
      </div>
    </div>
  )
}

export function CodeTransformSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowAfter(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section id="code" className="py-32 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 text-xs font-medium text-muted-foreground mb-6">
            <Sparkles className="w-3 h-3" />
            En Acción
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Código que <span className="text-gradient">Evoluciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mira cómo transformamos nuestro código para ser más limpio, eficiente y mantenible
          </p>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-sm font-medium text-red-400">Antes</span>
                <span className="text-xs text-muted-foreground">35 líneas, sin cache, sin tipos</span>
              </div>
              <CodeBlock code={beforeCode} variant="before" />
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <ArrowRight className="w-6 h-6 text-background" />
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={showAfter ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-emerald-400">Después</span>
                <span className="text-xs text-muted-foreground">24 líneas, con cache, tipado</span>
              </div>
              <CodeBlock code={afterCode} variant="after" />
            </motion.div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid sm:grid-cols-3 gap-4"
          >
            {[
              { label: "Menos código", value: "-30%", desc: "Código más conciso" },
              { label: "Con cache", value: "5min", desc: "Stale time automático" },
              { label: "Type safe", value: "100%", desc: "TypeScript integrado" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-border/50 bg-card/30 text-center">
                <div className="text-2xl font-bold text-gradient mb-1">{item.value}</div>
                <div className="text-sm font-medium text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
