"use client";

import { RetroGrid } from "@/components/magicui/retro-grid";

import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
       
    <section className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Build modern web apps with ease
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          A clean and minimal hero section to kickstart your Next.js + shadcn
          project.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
 </span>

      <RetroGrid />

    </div>






















  );
}
