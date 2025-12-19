"use client"

import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { CodeTransformSection } from "@/components/code-transform-section"
import { TeamSection } from "@/components/team-section"
import { StatsSection } from "@/components/stats-section"
import { QuotesSection } from "@/components/quotes-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import dynamic from "next/dynamic"

const Scene3D = dynamic(() => import("@/components/scene-3d").then((mod) => ({ default: mod.Scene3D })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />,
})

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <TechStackSection />
        <TimelineSection />
        <CodeTransformSection />
        <BeforeAfterSection />
        <TeamSection />
        <StatsSection />
        <QuotesSection />
        <RoadmapSection />
        <Footer />
      </div>
    </main>
  )
}
