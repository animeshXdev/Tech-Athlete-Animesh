import React, { useState } from "react";
import { motion } from "framer-motion";
import type { JSX } from "react"; // Optional, usually available globally
 // Optional, usually available globally

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number; // Percentage (0-100)
  category: "Web Development" | "Parkour";
}

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRunning,
  FaMountain,
  FaBrain,
  
  FaParachuteBox,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { GiJumpAcross } from "react-icons/gi";



interface Skill {
  name: string;
  icon:  JSX.Element;
  level: number;
  category: "Web Development" | "Parkour";
}

const skills: Skill[] = [
  // Web Development
  { name: "HTML", icon: <FaHtml5 />, level: 95, category: "Web Development" },
  { name: "CSS", icon: <FaCss3Alt />, level: 90, category: "Web Development" },
  { name: "JavaScript", icon: <FaJsSquare />, level: 88, category: "Web Development" },
  { name: "React", icon: <FaReact />, level: 85, category: "Web Development" },
  { name: "TypeScript", icon: <BiLogoTypescript />
, level: 80, category: "Web Development" },
  { name: "Node.js", icon: <FaNodeJs />, level: 75, category: "Web Development" },
  { name: "Databases", icon: <FaDatabase />, level: 70, category: "Web Development" },

  // Parkour
  { name: "Flow Control", icon: <FaRunning />, level: 90, category: "Parkour" },
  { name: "Vaults", icon: <FaMountain />, level: 80, category: "Parkour" },
  { name: "Spatial Awareness", icon: <FaBrain />, level: 85, category: "Parkour" },
  { name: "Precision Jumps", icon: <GiJumpAcross />
, level: 75, category: "Parkour" },
  { name: "Flips", icon: <FaParachuteBox />, level: 70, category: "Parkour" },
];

const categories = ["All", "Web Development", "Parkour"];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section className="px-6 md:px-20 py-24 bg-base-100 text-base-content">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        My Skills
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            className={`btn rounded-full px-6 ${
              selectedCategory === category
                ? "btn-primary text-white"
                : "btn-outline"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer group"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-primary text-4xl"
              >
                {skill.icon}
              </motion.div>
              <div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <p className="text-sm text-base-content/70">
                  {skill.category}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-base-300 h-3 rounded-full overflow-hidden">
              <motion.div
                className="bg-primary h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-right text-sm text-base-content/70 mt-1">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
