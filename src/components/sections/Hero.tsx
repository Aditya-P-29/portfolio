"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa"
import Link from "next/link";
import Image from "next/image";




const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20 mt-15 pl-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi, I'm <span className="text-primary">Aditya Poddar</span>
          </h1>
          <p className="mt-3 text-xl md:text-2xl mb-6">Full Stack Developer crafting modern web experiencs</p>
          <div className="flex gap-4">
            <Button variant={"default"} className="gap-2 rounded-2xl">
                <Mail className="w-4 h-4"/>
                Contact Me
            </Button>

            <Link href="https://github.com/Aditya-P-29" target="_blank">
            <Button variant={"outline"} className="gap-2 rounded-2xl">
                <FaGithub size={24} color="#fff" />
                Github
            </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }} className="flex justify-center">
            <Image alt="Hero image" src="/hero-image.svg" width={550} height={600} priority/>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
