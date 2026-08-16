"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base lg:text-lg">
            I'm always open to discuss new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="secondary" size="md" asChild className="rounded-full">
              <a href="https://github.com/Aditya-P-29" target="_blank">
                <FaGithub size={24} className="text-white" />
              </a>
            </Button>
            <Button variant="default" size="md" asChild className="rounded-full">
              <a
                href="https://www.linkedin.com/in/aditya~poddar"
                target="_blank"
              >
                <FaLinkedin size={24} className="text-white" />
              </a>
            </Button>
            <Button variant="default" size="md" asChild className="rounded-full">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=adityapotdar7309@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium"
              >
                <FaEnvelope size={24} className="text-white" />
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="w-full sm:max-w-md lg:max-w-2xl mx-auto p-6 sm:p-8 rounded-lg shadow-md ">
            <ContactForm />
          </Card>
        </motion.div>

        {/* Right Column - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-15 md:mt-0"
        >
          <Image
            alt="contact illustrations"
            src="/contact-form-hero.svg"
            width={800}
            height={800}
            className="max-w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
