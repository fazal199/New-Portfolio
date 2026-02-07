import { Briefcase, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const experiences = [
  {
    title: "Web Designer & Developer",
    company: "Enlightened - I.T Solutions Company",
    period: "September 2025 - Present",
    highlights: [
      "Led end-to-end development and technical research for scalable web applications using the MERN stack and Next.js, including system architecture, HLD, and LLD design.",

      "Designed and implemented secure authentication, role-based access control, and internal dashboards for managing complex application workflows.",

      "Built multiple data-driven modules with CRUD operations, API integrations, validation, and optimized data handling for performance and maintainability.",

      "Improved existing applications by enhancing UI/UX, optimizing frontend and backend performance, and refining overall system usability.",

      "Developed multi-page, conversion-focused websites using Next.js with emphasis on SEO, responsiveness, and reusable component architecture.",

    ]
  },
  {
    title: "Full Stack Developer (Internship)",
    company: "Symbiosis Systems Pvt Ltd",
    period: "May 2024 - June 2024",
    highlights: [
      " Developed a subscription countdown system (10 days → 0) so the company could automatically track expiries — increasing revenue and saving hours of manual follow-ups.",
      "Added auto-restriction after subscription expiry, ensuring clients can’t use the software without renewal — reducing manual checks and boosting the company’s control over renewals.",

      "Built the Inward and Order modules in an inventory system, helping the company deliver a faster solution to their client — improving UX by 40% and overall speed by 20%.",
    ],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Practical Experience
          </h2>
          <p className="mx-auto text-xl max-w-2xl text-muted-foreground">
            Built by working directly on real features and fixing issues.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="relative border-border bg-card transition-all duration-300 hover:border-foreground/30 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[4.5rem] top-6 hidden h-4 w-4 rounded-full border-2 border-foreground bg-background md:block" />

                <CardContent className="p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div className=" space-y-5 lg:space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-5 w-5" />
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
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.linkedin.com/messaging/compose/?recipient=fazalhussain1&body=Hi%20Fazal%2C%0AI%20went%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%20Let%E2%80%99s%20connect.
">
                <Button
                  variant="hero"
                  size="xl"
                // onClick={() => scrollToSection("contact")}
                >

                  Contact Fazal
                </Button>

              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
