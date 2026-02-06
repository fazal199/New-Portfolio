import { useState } from "react";
import { Menu, X, Home, User, Briefcase, FolderOpen, MessageCircle, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.png";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "Why Hire Me", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const socialLinks = [
  { href: "https://www.linkedin.com/messaging/compose/?recipient=fazalhussain1&body=Hi%20Fazal%2C%0AI%20went%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%20Let%E2%80%99s%20connect.", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/fazal199", icon: Github, label: "GitHub" },
  { href: "mailto:workwithfazal98@gmail.com?subject=Opportunity%20Discussion&body=Hello%20Fazal,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0ABest%20regards,", icon: Mail, label: "Email" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-3">
        <Avatar  className="w-14 h-auto">
          <AvatarImage src={profilePhoto} alt="Alex Smith" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-xl text-foreground">Fazal Hussain</span>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
          
            {isOpen ? <X  /> : <Menu style={{width:"1.5rem",height:'auto'}} />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72 bg-sidebar p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <Avatar className="mb-3 h-20 w-20 ring-2 ring-border">
              <AvatarImage src={profilePhoto} alt="Alex Smith" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <h2 className="font-bold text-foreground">Fazal Hussain</h2>
            <p className="text-sm text-muted-foreground">Web Developer</p>
          </div>

          <div className="mb-6 flex justify-center gap-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                <Button variant="social" size="iconSm">
                  <link.icon className="h-4 w-4" />
                </Button>
              </a>
            ))}
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="nav"
                className="w-full gap-3 px-4"
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>

          <a href="https://www.linkedin.com/messaging/compose/?recipient=fazalhussain1&body=Hi%20Fazal%2C%0AI%20went%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%20Let%E2%80%99s%20connect.">
            <Button variant="hero" className="mt-6 w-full" onClick={() => scrollToSection("contact")}>
              
              Contact Fazal
            </Button>
          </a>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNav;
