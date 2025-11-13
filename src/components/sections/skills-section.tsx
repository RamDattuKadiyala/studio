import PixelCard from '@/components/ui/pixel-card';
import { Badge } from '@/components/ui/badge';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Lightbulb, Settings, DraftingCompass } from 'lucide-react';

const skillsData = {
  "Core Marketing & Sales": {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    skills: [
      "Social Media Marketing", "Ad Strategy & Campaign Planning", "A/B Testing & Personalized Ads", "Client Pain Point Analysis", "Meta Ads Management"
    ],
    variant: 'default',
  },
  "Tools & Platforms": {
    icon: <Settings className="h-6 w-6 text-primary" />,
    skills: [
      "Meta Ads Manager", "Canva", "Google Ads (Basic)"
    ],
    variant: 'blue',
  },
  "Technical & Creative": {
    icon: <DraftingCompass className="h-6 w-6 text-primary" />,
    skills: [
      "Copywriting", "Presentation Design", "Team Leadership & Communication"
    ],
    variant: 'yellow',
  }
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">My Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">A snapshot of my professional capabilities.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, data]) => (
            <PixelCard key={category} variant={data.variant} className="flex flex-col">
                <div className='p-6'>
                    <div className="flex flex-row items-center gap-4 mb-4">
                        {data.icon}
                        <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
