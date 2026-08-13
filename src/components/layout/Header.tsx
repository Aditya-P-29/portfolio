"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, SetIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      SetIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("Scroll", handleScroll);
    return () => window.removeEventListener("Scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : " "}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={"/"} className="text-xl font-bold text-primary">
            Aditya Poddar
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume/ADITYA PODDAR(resume).pdf"
              download="Aditya_Poddar_Resume.pdf"
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-2 py-1 hover:bg-primary-hover transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="default"
                size="sm"
                className="gap-2 bg-primary text-primary-foreground rounded-2xl hover:bg-primary-hover transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
