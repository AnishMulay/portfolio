import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="flex justify-between items-center py-[24px]">
            <div className="text-[0.875rem] text-muted font-normal">
                © 2026 Anish Mulay.
            </div>

            <div className="flex gap-[16px]">
                <a
                    href="mailto:anishm7030@gmail.com"
                    className="text-muted hover:text-accent transition-colors duration-150 no-underline hover:no-underline"
                    aria-label="Email"
                >
                    <Mail size={18} />
                </a>
                <a
                    href="https://github.com/AnishMulay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-150 no-underline hover:no-underline"
                    aria-label="Github"
                >
                    <Github size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/anish-mulay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-150 no-underline hover:no-underline"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </footer>
    );
}
