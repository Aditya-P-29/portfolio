"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aditya Poddar. All rights reserved.
        </p>

        {/* Right side - social links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/Aditya-P-29"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aditya~poddar/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=adityapotdar7309@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium"
          >
            <FaEnvelope size={24} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
