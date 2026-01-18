import { Mail, FolderOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Web Developer building{" "}
            <span className="text-primary">scalable, user-focused</span>{" "}
            web applications
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I design and develop modern web applications using React, Node.js, and
            modern UI systems — focused on performance, clarity, and real-world impact.
          </p>

          {/* CTAs */}
          <div className="mb-8 flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-5 w-5" />
              Open to Opportunities
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("projects")}
            >
              <FolderOpen className="h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Full-stack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Production-ready code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Clean UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
