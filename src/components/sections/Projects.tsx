"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";




const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 lg:py-20">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">
            Featured<span className="text-primary"> Projects</span>
          </h2>
          <p className="text-md font-semibold mt-4 text-gray-300 mx-auto">
            Explore my latest projects, showcasing my expertise in full-stack
            development, from React props to AI-powered web apps.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:mx-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow border-border/5 bg-card hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <Image
                  alt={project.title}
                  src={project.image}
                  height={600}
                  width={800}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="rounded-full object-cover"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="rounded-full object-cover"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium text-white"
                    >
                      <FaGithub size={24} color="#fff" />
                      Github
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6 ">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-md  text-gray-300 mb-6">{project.description}</p>
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {
                            project.technologies.map((tech) => (
                                <Badge key={tech} variant={"secondary"} className="bg-secondary text-white rounded-full object-cover">
                                    {tech}
                                </Badge>
                            ))
                        }
                    </div>
                    <ul className="space-y-2">
                        {
                            project.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-primary" />
                                    {feature}
                                </li>
                            ))
                        }
                    </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
