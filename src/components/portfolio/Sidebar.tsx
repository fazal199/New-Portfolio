import { useState, useEffect } from "react";
import { Linkedin, Github, Mail, Home, User, Briefcase, FolderOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.png";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  // { id: "about", label: "Why Hire Me", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const socialLinks = [
  { href: "https://linkedin.com/in/fazalhussain1", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/fazal199", icon: Github, label: "GitHub" },
  { href: "mailto:workwithfazal98@gmail.com?subject=Opportunity%20Discussion&body=Hello%20Fazal,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0ABest%20regards,", icon: Mail, label: "Email" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 flex-col border-r border-border bg-sidebar p-6 lg:flex">
      {/* Profile Section */}
      <div className="mb-8 flex flex-col items-center text-center">
        <Avatar className="mb-4 h-28 w-28 ring-2 ring-border ring-offset-2 ring-offset-sidebar">
          <AvatarImage src={profilePhoto} alt="Alex Smith" className="object-cover" />
          <AvatarFallback className="bg-secondary text-2xl font-semibold">AS</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold text-foreground">Fazal Hussain</h2>
        <p className="text-sm text-muted-foreground">Web Developer</p>
      </div>

      {/* Social Links */}
      <div className="mb-8 flex justify-center gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <Button variant="social" size="iconSm">
              <link.icon className="h-4 w-4" />
            </Button>
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "navActive" : "nav"}
            className="w-full gap-3 px-4"
            onClick={() => scrollToSection(item.id)}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* CTA Button */}
      <a href="https://www.linkedin.com/messaging/compose/?recipient=fazalhussain1&body=Hi%20Fazal%2C%0AI%20went%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%20Let%E2%80%99s%20connect.">
        <Button variant="hero" className="mt-6 w-full" size="lg">
        
          Contact Fazal
        </Button>
      </a>
    </aside>
  );
};

export default Sidebar;
