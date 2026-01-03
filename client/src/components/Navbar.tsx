import { Link, useLocation } from "wouter";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 font-bold text-2xl text-primary font-heading cursor-pointer">
            <Rocket className="h-8 w-8" />
            <span>Alphabet Mobility</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <Button size="sm" onClick={() => setLocation("/contact")}>Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div 
                className="text-lg font-medium p-2 hover:bg-slate-50 rounded cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
