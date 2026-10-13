"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";

import { technologies } from "@/constants";
import { Card } from "@/components/ui/card";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface Technology {
  name: string;
  logo: string;
}

interface SkillCategory {
  number: string;
  title: string;
  description: string;
  technologies: Technology[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
  progress: MotionValue<number>;
}

/* -------------------------------------------------------------------------- */
/*                              Technology Groups                             */
/* -------------------------------------------------------------------------- */

const frontendNames = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React.js",
  "Next.js",
  "Tailwind CSS",
];

const backendNames = ["Node.js", "Express.js", "Java"];

/* -------------------------------------------------------------------------- */
/*                              Skill Categories                              */
/* -------------------------------------------------------------------------- */

const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Frontend",
    description: "Building modern, responsive and interactive web experiences.",
    technologies: technologies.filter((tech) =>
      frontendNames.includes(tech.name)
    ),
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing scalable APIs, server-side applications and business logic.",
    technologies: technologies.filter((tech) =>
      backendNames.includes(tech.name)
    ),
  },
  {
    number: "03",
    title: "Database & Cloud",
    description:
      "Working with databases, cloud infrastructure, deployment and DevOps.",
    technologies: technologies.filter(
      (tech) =>
        !frontendNames.includes(tech.name) && !backendNames.includes(tech.name)
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*                         Technology Animation                               */
/* -------------------------------------------------------------------------- */

const technologyVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

/* -------------------------------------------------------------------------- */
/*                           Scroll Stack Timeline                            */
/* -------------------------------------------------------------------------- */

/*
 * Scroll stages (exact order is preserved):
 *
 * 0.00 - 0.28 → Frontend is shown alone
 * 0.28 - 0.38 → Backend slides up over Frontend
 * 0.38 - 0.62 → Frontend + Backend hold
 * 0.62 - 0.72 → Database & Cloud slides up over the stack
 * 0.72 - 1.00 → Final stacked state
 */
const scrollPoints = [0, 0.28, 0.38, 0.62, 0.72, 1];

/*
 * Y positions per card, one value for each scroll point above.
 *
 * Frontend  : stays, then is pushed up a little by each new card.
 * Backend   : waits below, rises into place, then nudges up so it
 *             stays visible behind Database & Cloud.
 * Database  : waits further below, then rises last and stops at +15%
 *             so ~15% of Backend stays visible.
 */
const yKeyframes: string[][] = [
  ["0%", "0%", "-22%", "-22%", "-40%", "-40%"],
  ["115%", "115%", "0%", "0%", "-12%", "-12%"],
  ["230%", "230%", "230%", "230%", "15%", "15%"],
];

/* -------------------------------------------------------------------------- */
/*                                Skill Card                                  */
/* -------------------------------------------------------------------------- */

const SkillCard = ({ category, index, progress }: SkillCardProps) => {
  /* Single, unconditional hook call (rules of hooks safe). */
  const y = useTransform(progress, scrollPoints, yKeyframes[index]);

  /* Permanent stacking order: Frontend 10 → Backend 20 → Database 30 */
  const zIndex = (index + 1) * 10;

  return (
    <motion.div
      style={{ y, zIndex }}
      className="
        absolute
        left-1/2
        top-1/2
        w-[calc(100%-2rem)]
        max-w-5xl
        -translate-x-1/2
        -translate-y-1/2
        will-change-transform
      "
    >
      <Card
        className="
          relative
          w-full
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-background
          p-6
          shadow-2xl
          md:p-8
          lg:p-10
        "
      >
        {/* Card Header */}
        <div className="mb-7 flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.3em] text-primary">
            {category.number}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Card Title */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
            {category.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {category.description}
          </p>
        </div>

        {/* Technology Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >
          {category.technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={technologyVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="
                flex
                min-h-[110px]
                flex-col
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-background
                px-3
                py-4
                transition-colors
                duration-300
                hover:border-primary/40
              "
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-center text-sm font-semibold">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  Skills                                    */
/* -------------------------------------------------------------------------- */

const Skills = () => {
  const stackRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  /*
   * Lenis smooths the scroll itself (duration 2.4). This soft spring adds
   * a second, gentle layer so the card movement glides instead of tracking
   * the scroll 1:1. Lower stiffness = floatier, higher = more responsive.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 26,
    mass: 0.8,
    restDelta: 0.0005,
  });

  return (
    <section id="skills" className="relative mt-24">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 text-center text-4xl font-bold md:text-5xl"
      >
        Tech <span className="text-primary">Stack</span>
      </motion.h2>

      {/* Scroll Stack */}
      <div ref={stackRef} className="relative mt-10 h-[300vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="relative h-full w-full">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;