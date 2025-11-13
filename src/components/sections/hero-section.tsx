import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-primary to-green-600 bg-[200%_auto] animate-gradient z-0" />
      <div className="absolute inset-0 bg-black/30 z-0"/>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl font-headline">
          Ram Dattu Kadiyala
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
          Marketing & Sales Enthusiast | Aspiring Marketing Strategist
        </p>
        <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-light italic">
          “Building brands that speak, campaigns that convert.”
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild variant="default" className="bg-white text-primary hover:bg-white/90">
            <Link href="#contact">Hire Me</Link>
          </Button>
          <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors">
            <Link href="#skills">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
