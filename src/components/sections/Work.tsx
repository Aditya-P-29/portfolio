"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Work = () => {
  return (
    // Matched the exact responsive margins and spacing from Skills.tsx
    <section id="experience" className="mt-18 mx-4 lg:mx-16 mb-15">
      
      {/* Matched the heading style: Text base with primary colored span */}
      <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
        Work<span className="text-primary"> Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative border-l-2 border-border ml-3 md:ml-4"
        >
          {/* Timeline Item */}
          <div className="mb-10 ml-6 md:ml-10 relative">
            {/* Timeline Node Marker */}
            <span className="absolute flex items-center justify-center w-4 h-4 bg-primary rounded-full -left-[35px] md:-left-[51px] top-6 ring-4 ring-background"></span>

            {/* Wrapped the experience inside your Shadcn Card with matching hover effects */}
            <Card className="p-6 md:p-8 flex flex-col rounded-2xl border border-transparent hover:border-primary hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground">
              
              {/* Responsive Header: Stacks vertically on mobile, row on tablet/desktop */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Full Stack Developer
                  </h3>
                  <h4 className="text-lg font-medium text-primary mt-1">
                    Yuva Nexus Technologies LLP
                  </h4>
                </div>
                
                <span className="flex items-center w-fit text-sm font-medium text-white bg-secondary px-4 py-1.5 rounded-full shrink-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  May 2025 – Present
                </span>
              </div>

              {/* Responsive Bullet Points */}
              <ul className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                  <span>Architected and launched <strong>calculators.lol</strong>, a SaaS platform featuring 400+ analytical tools, utilizing Next.js Static Generation and Metadata API to maximize SEO and minimize latency.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                  <span>Engineered responsive, dynamic web applications using React, Next.js, and Tailwind CSS, implementing code splitting to optimize core web vitals and improve load performance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                  <span>Developed and integrated RESTful APIs to support complex front-end features while maintaining a clean, modular, and scalable codebase.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                  <span>Automated real-time client communication workflows via the Resend API, improving system reliability and user engagement.</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;