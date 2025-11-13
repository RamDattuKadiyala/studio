import { Badge } from "@/components/ui/badge";

const languages = ["English", "Hindi", "Telugu", "Japanese (Basic)", "German (Basic)"];

export function LanguagesSection() {
  return (
    <section id="languages" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Languages</h2>
        <div className="mt-8 flex justify-center flex-wrap gap-3 sm:gap-4">
          {languages.map(lang => (
            <Badge key={lang} className="text-base sm:text-lg px-4 py-2" variant="default">{lang}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
