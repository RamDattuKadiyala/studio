import { School } from "lucide-react";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import PixelCard from "@/components/ui/pixel-card";

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Education</h2>
         <div className="mt-12 max-w-2xl mx-auto">
          <PixelCard variant="blue" className="text-left">
            <div>
              <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <School className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Bachelor of Technology, Computer Science</CardTitle>
                      <CardDescription>KLEF (KL University), Vijayawada | 2023–2027</CardDescription>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Focused on marketing analytics, client management, and sales strategy alongside core CS curriculum. Self-taught in digital marketing and personal branding to bridge technology and business.</p>
              </CardContent>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
}
