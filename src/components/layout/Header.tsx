"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  // Smooth scroll handler for mobile
  const handleMobileNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-background"
      }`}
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
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume/ADITYA PODDAR(resume).pdf"
              download="Aditya_Poddar_Resume.pdf"
              className="rounded-full flex items-center gap-2 bg-primary text-primary-foreground px-2 py-1 hover:bg-primary-hover transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
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
                <button
                  key={item.href}
                  onClick={() => handleMobileNavClick(item.href)}
                  className={`text-left text-sm font-medium transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume/ADITYA PODDAR(resume).pdf"
                download="Aditya_Poddar_Resume.pdf"
                className="rounded-full flex items-center gap-2 bg-primary text-primary-foreground px-2 py-1 hover:bg-primary-hover transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
