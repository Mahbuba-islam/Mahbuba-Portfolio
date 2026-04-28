import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {year} Mahbuba Akter. Built with Next.js & Tailwind.
        </p>
        <ul className="flex items-center gap-3 text-muted-foreground">
          <li>
            <Link
              href="mailto:mahbubaislam7010@gmail.com"
              aria-label="Email"
              className="rounded-md p-2 transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors hover:bg-muted hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors hover:bg-muted hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
