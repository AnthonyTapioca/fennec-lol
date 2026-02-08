import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Discord", href: "https://discord.gg/fennec", external: true },
  { label: "Purchase", href: "https://fennec.lol/purchase", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="font-display text-xl font-bold tracking-wider">
          <span className="gradient-text">FENNEC</span>
          <span className="text-muted-foreground">.lol</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://fennec.lol/panel"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary rounded-lg px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-red"
          >
            Customer Panel
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://fennec.lol/panel"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary rounded-lg px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Customer Panel
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
