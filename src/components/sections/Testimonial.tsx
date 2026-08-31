"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/constants";

const Testimonial = () => {
  return (
    <section id="testimonials" className="container mx-auto py-12 md:py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 md:mb-12 text-center">
        Client<span className="text-primary"> Testimonial</span>
      </h2>

      {/* Centered layout wrapper */}
      <div className="flex justify-center items-center w-full">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="w-full max-w-4xl"
          >
            <Card
              className="p-6 sm:p-8 md:p-12 w-full flex flex-col items-center text-center
                bg-card border border-gray-200 dark:border-zinc-800 rounded-2xl 
                hover:border-primary transition-all duration-300 shadow-lg"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 mb-4 md:mb-6" />

              <p className="text-base md:text-lg italic text-gray-300 mb-8 leading-relaxed max-w-3xl">
                "{testimonial.content}"
              </p>

              <div className="flex flex-col items-center gap-4 w-full">
                {/* 
                  RESPONSIVE IMAGE WRAPPER:
                  - w-full: Takes up available width so it shrinks on phones.
                  - max-w-2xl: Prevents it from getting too wide on huge screens.
                  - h-[200px] md:h-80: 200px tall on mobile, 320px (h-80) tall on desktop.
                */}
                <div className="relative w-full max-w-2xl h-[200px] sm:h-[250px] md:h-80 overflow-hidden border-2 border-primary rounded-xl mb-2">
                  <Image
                    alt={`${testimonial.name} photo`}
                    src={testimonial.image}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="mt-2">
                  <p className="text-lg font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <span className="text-sm text-gray-400">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;