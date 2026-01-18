import { Lightbulb, Rocket, Code2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I convert complex business requirements into clean, maintainable solutions.",
  },
  {
    icon: Rocket,
    title: "Real-World Projects",
    description:
      "Built full-stack applications with authentication, dashboards, and payments.",
  },
  {
    icon: Code2,
    title: "Modern Technologies",
    description:
      "React, Next.js, Node.js, MongoDB, Tailwind, ShadCN, REST APIs.",
  },
  {
    icon: Users,
    title: "Production-Focused",
    description:
      "Write scalable, readable code that fits real development teams.",
  },
];

const WhyHireMe = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why Hire Me
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            What value will I bring to your team?
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
