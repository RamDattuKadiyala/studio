import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">Where I've made an impact.</p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Freelance Marketing Support</CardTitle>
                  <CardDescription>Student Project Business (Self-initiated)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Designed marketing posters and managed Meta Ad campaigns to attract clients.</li>
                <li>Handled all client communication, from initial inquiry to project completion, ensuring satisfaction.</li>
                <li>Successfully generated leads and increased project inquiries through optimized ad targeting and competitive pricing strategies.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
