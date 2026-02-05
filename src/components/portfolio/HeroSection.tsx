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
      {/* <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto text-center max-w-4xl px-6 py-0 lg:py-20 lg:px-8">
        <div className="animate-fade-in  space-y-10">
          <h1 className="mb-6 text-[24px] leading-[1.7] font-bold xl:leading-tight tracking-tight text-foreground md:text-5xl lg:text-5xl lg:tracking-wide lg:leading-[1.2]">
           I help teams in building <br /> web applications without unnecessary friction
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            I break problems into clear solutions, work directly on the code, and keep communication simple while learning what the project requires.

         
          </p>

          {/* CTAs */}
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
            {/* <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("projects")}
            >
              <FolderOpen className="h-5 w-5" />
              View Projects
            </Button> */}
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Open to Full-stack Roles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Fast Onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Clear Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
