"use client";
import React from "react";
// 1. Import Variants from framer-motion
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  // 2. Explicitly type as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // 3. Explicitly type as Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative container mx-auto px-6 pt-32 pb-18 lg:ml-16 min-h-[85vh] flex items-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center order-2 lg:order-1"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-primary drop-shadow-sm">Aditya Poddar</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="mt-6 text-lg md:text-xl text-gray-650 leading-relaxed max-w-[540px]">
              A Full Stack Developer passionate about crafting modern web
              experiences that are fast, scalable, and secure. With expertise in
              the MERN stack, Next.js, and cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="https://www.linkedin.com/in/aditya~poddar"
              target="_blank"
              passHref
            >
              <Button
                size="lg"
                className="text-white gap-3 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin size={20} color="#fff" />
                LinkedIn
              </Button>
            </Link>

            <Link
              href="https://github.com/Aditya-P-29"
              target="_blank"
              passHref
            >
              <Button
                variant="secondary"
                size="lg"
                className="text-white gap-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/80"
              >
                <FaGithub size={20} color="#fff" />
                GitHub
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center order-1 lg:order-2 relative"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] lg:aspect-square">
            <motion.div
              className="w-full h-full relative z-10"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Image
                src="/portfolio.png"
                alt="Aditya Poddar - Hero Image"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-full drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
