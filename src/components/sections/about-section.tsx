import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const headshot = PlaceHolderImages.find(p => p.id === 'headshot');

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint={headshot.imageHint}
                />
              )}
            </div>
            <div className="md:col-span-2 flex items-center">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                  About Me
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  I’m a versatile and driven marketing and sales enthusiast with strong skills in campaign planning, client negotiation, and digital ad management. Passionate about turning creative ideas into measurable strategies and helping brands grow through data-driven marketing.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
