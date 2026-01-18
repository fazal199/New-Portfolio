import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Event Management System",
    description:
      "A full-stack platform enabling users to discover, register, and manage events with role-based access for admins and organizers.",
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Comprehensive admin dashboard with real-time analytics, inventory management, and order tracking for online stores.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Collaboration App",
    description:
      "Team productivity tool featuring real-time updates, project boards, and integrated chat for seamless collaboration.",
    tech: ["React", "Firebase", "Tailwind", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real-world applications demonstrating practical skills
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col border-border bg-card transition-all duration-300 hover:border-foreground/30 hover:shadow-xl"
            >
              {/* Project Preview Placeholder */}
              <div className="h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-secondary via-muted to-secondary">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-xl bg-foreground/10 p-4">
                      <div className="h-full w-full rounded bg-foreground/20" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Preview
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
