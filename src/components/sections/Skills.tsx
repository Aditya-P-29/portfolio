"use client";
import React from "react";
import { motion } from "framer-motion";
import { technologies } from "@/constants";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="mt-18 mx-4 lg:mx-16 mb-15" >
      <h2 className='text-3xl  font-bold mb-12 text-center'>Tech<span className='text-primary' > Stack</span></h2>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8  mx-4"
    >
      
      {technologies.map((tech, index) => (
        <Card
          key={index}
          className="p-2 flex flex-col items-center justify-between rounded-2xl 
             border border-transparent hover:border-primary 
             hover:shadow-lg hover:scale-105 
             transition-transform duration-300 ease-in-out"
        >
          <Image
            alt={tech.name}
            src={tech.logo}
            height={48}
            width={48}
            className="mt-2.5"
          />
          <span className="text-md font-semibold">{tech.name}</span>
        </Card>
      ))}
    </motion.div>
    </section>
  );
};

export default Skills;
