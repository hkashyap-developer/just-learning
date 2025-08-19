import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 space-y-4 md:space-y-0">
        {/* Left side */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        {/* Right side - Social icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="mailto:info@example.com"
            className="hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <Separator />
    </footer>
  );
}
