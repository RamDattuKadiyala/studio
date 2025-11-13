import { Users } from "lucide-react";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import PixelCard from "@/components/ui/pixel-card";

export function LeadershipSection() {
    return (
    <section id="leadership" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Leadership & Activities</h2>
         <div className="mt-12 max-w-2xl mx-auto">
          <PixelCard variant="yellow" className="text-left">
            <div>
               <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Lead Member, KL eSports Club</CardTitle>
                    <CardDescription>Leadership Role</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Managed operations, secured sponsorships, and fostered brand collaborations for club events. Currently preparing for marketing and strategy competitions to gain real-world exposure.</p>
              </CardContent>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
}
