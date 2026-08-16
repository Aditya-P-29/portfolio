"use client";

import React from "react";
import { motion, px } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/constants";

const Testimonial = () => {
  return (
    <section id="testimonials" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl  font-bold mb-12 text-center">
        Client<span className="text-primary"> Testimonial</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center"
          >
            <Card
              className="p-6 w-full max-w-md flex flex-col text-center lg:ml-16
               bg-card border border-gray-200 rounded-xl 
               hover:border-primary transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary opacity-50 mb-4" />

              <p className="text-md italic text-gray-300 mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex flex-col items-center gap-2">
                <Image
                  alt={`${testimonial.name} photo`}
                  src={testimonial.image}
                  height={400}
                  width={400}
                  className="rounded-full object-cover"
                />
                <p className="text-lg font-semibold text-primary">
                  {testimonial.name}
                </p>
                <span className="text-sm text-gray-300">
                  {testimonial.role}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;


