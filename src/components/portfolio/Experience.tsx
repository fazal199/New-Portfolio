import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    highlights: [
      "Led development of customer-facing dashboard serving 50K+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    highlights: [
      "Built responsive web applications for enterprise clients",
      "Integrated third-party APIs including payment gateways",
      "Improved application performance by 40% through optimization",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Startup Studio",
    period: "2018 - 2020",
    highlights: [
      "Developed UI components using React and TypeScript",
      "Collaborated with designers to implement pixel-perfect designs",
      "Contributed to open-source component libraries",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Experience
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A track record of building impactful solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="relative border-border bg-card transition-all duration-300 hover:border-primary/30 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[4.5rem] top-6 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:block" />
                
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="flex items-center gap-2 text-primary">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
