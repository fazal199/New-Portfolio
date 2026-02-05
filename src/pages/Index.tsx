import Sidebar from "@/components/portfolio/Sidebar";
import MobileNav from "@/components/portfolio/MobileNav";
import HeroSection from "@/components/portfolio/HeroSection";
import WhyHireMe from "@/components/portfolio/WhyHireMe";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar />
      
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Main Content */}
      <main className="lg:ml-72">
        <div className=" lg:pt-0">
          <HeroSection />
          <Experience />
          <Projects />
          <WhyHireMe />
          <Contact />

          {/* Footer */}
          <footer className="border-t border-border bg-background py-8">
            <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Fazal Hussain. Built with React & Tailwind.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
