"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SplitText from '../ui/SplitText';
import Prism from '../ui/Prism';

export function HeroSection() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const showAnimation = isClient && theme === 'dark';

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-center text-white overflow-hidden">
      {showAnimation ? (
         <div className="fixed inset-0 z-0">
            <Prism animationType="hover" timeScale={0.5} noise={0.0} />
         </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-primary to-green-600 bg-[200%_auto] animate-gradient z-0" />
      )}
      <div className="relative z-10 p-4">
        <SplitText
          text="Ram Dattu Kadiyala"
          tag="h1"
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl font-headline"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          delay={150}
          duration={3}
          ease="power3.out"
        />
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
          <Button size="lg" asChild variant="default" className="bg-white text-primary hover:bg-white/90">
            <Link href="#skills">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
