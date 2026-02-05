import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import imaginifyImg from  "@/assets/projectsimg/imaginify.png"
import eventifyImg from  "@/assets/projectsimg/eventify.png"
import movixImg from  "@/assets/projectsimg/movix.png"
const projects = [
  {
    title: "Event Management System",
    imgUrl: eventifyImg,
    description:
      "A full-stack platform enabling users to discover, register, and manage events with role-based access for admins and organizers.",
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind"],
    liveUrl: "https://college-event-management-system-frontend.onrender.com/",
    githubUrl: "https://github.com/fazal199/college-event-management-system",
  },
  {
    title: "Imaginify",
    imgUrl: imaginifyImg,
    description:
      "AI-powered image editing web app that allows users to restore, enhance, and modify images through a simple, user-friendly interface.",
     
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary"],
    liveUrl: "https://imaginify-sooty-kappa.vercel.app/",
    githubUrl: "https://github.com/fazal199/imaginify",
  },
  {
    title: "Movix",
    imgUrl: movixImg,
    description:
      "Movix allows users to browse movies and TV shows, view detailed information, and explore trending content in real time through a fast, clean interface. ",
    tech: ["React", "TMDB Api", "Tailwind", "Redux","Axios"],
    liveUrl: "https://movix-movie-website-xi.vercel.app/",
    githubUrl: "https://github.com/fazal199/movix-movie-website",
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
                      <img src={project.imgUrl}className="  h-full w-full object-cover object-left-top" alt="" />
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
