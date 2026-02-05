import { Mail, Linkedin, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            I'm currently open to full-time opportunities where I can contribute,
            learn, and grow with a strong engineering team.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a  href="https://www.linkedin.com/messaging/compose/?recipient=fazalhussain1&body=Hi%20Fazal%2C%0AI%20went%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%20Let%E2%80%99s%20connect.">
              
            Start Conversation
            </a>
          </Button>
           <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Usually responds within 24 hours</span>
            </div>
        </div>

        {/* Contact Info */}
        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
             Want to connect? Don't Overthink, I am easy to talk!
            </h3>

            <div className="grid gap-6 sm:grid-cols-3">
              <a
                href="mailto:workwithfazal98@gmail.com"
                className="group flex flex-col items-center rounded-lg p-4 text-center transition-colors hover:bg-secondary"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">Email</span>
                <span className="text-sm text-muted-foreground">
                  workwithfazal98@email.com
                </span>
              </a>

              <a
                href="https://linkedin.com/in/fazalhussain1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg p-4 text-center transition-colors hover:bg-secondary"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">LinkedIn</span>
                <span className="text-sm text-muted-foreground">
                  linkedin.com/in/fazalhussain1
                </span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center rounded-lg p-4 text-center transition-colors hover:bg-secondary"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">Resume</span>
                <span className="text-sm text-muted-foreground">Download PDF</span>
              </a>
            </div>
           
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
