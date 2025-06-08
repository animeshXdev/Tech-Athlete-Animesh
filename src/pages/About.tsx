import React from "react";
import { motion } from "framer-motion";

import {
  FaLightbulb,
  FaDumbbell,
  FaHandsHelping,
  FaRunning,
  FaCode,
} from "react-icons/fa";
import proPic from "../assets/profilepicani.jpg"

const aboutTiles = [
  {
    title: "Creative Thinker",
    description:
      "I enjoy exploring new ideas and thinking outside the box to solve problems creatively.",
    icon: <FaLightbulb className="w-7 h-7 text-primary" />,
  },
  {
    title: "Dedicated Athlete",
    description:
      "Passionate about parkour and fitness, constantly pushing my limits and striving for growth.",
    icon: <FaDumbbell className="w-7 h-7 text-primary" />,
  },
  {
    title: "Empathetic Trainer",
    description:
      "I focus on understanding my clients’ needs and motivating them to achieve their best.",
    icon: <FaHandsHelping className="w-7 h-7 text-primary" />,
  },
  {
    title: "Parkour Enthusiast",
    description:
      "Practicing parkour daily sharpens my agility, balance, and mental focus, inspiring my training methods.",
    icon: <FaRunning className="w-7 h-7 text-primary" />,
  },
  {
    title: "Web Developer",
    description:
      "Skilled in React, TypeScript, and modern web technologies to build sleek, performant user experiences.",
    icon: <FaCode className="w-7 h-7 text-primary" />,
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-24 bg-base-100">
      {/* First Row: Image First on Mobile, Text First on Desktop */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.95, rotate: 0 }}
        >
          <img
            src={`${proPic}`}
            alt="Animesh Portrait"
            className="rounded-full shadow-lg w-72 h-72 object-cover select-none border-4 border-primary"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="flex-1 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-extrabold text-5xl mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m Animesh — a parkour athlete and personal trainer dedicated to
            pushing limits and helping others find their strength. With years of
            experience, I combine fitness, agility, and mindfulness to create
            balanced and dynamic training programs.
          </p>
        </motion.div>
      </div>

      {/* Second Row: Personality Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {aboutTiles.map(({ title, description, icon }) => (
          <motion.div
            key={title}
            className="bg-primary/10 rounded-xl p-6 cursor-pointer shadow-md hover:bg-primary/20 transition-colors duration-300 flex flex-col gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>{icon}</div>
            <h3 className="font-semibold text-primary text-lg">{title}</h3>
            <p className="text-base text-primary/90">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
