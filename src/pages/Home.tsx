import React, { useRef } from "react";
import { motion, type Transition } from "framer-motion";
import Typewriter from "typewriter-effect";
import BackToTop from "../components/BackToTop";
import svgImg from "../assets/undraw_code-thinking_0vf2.svg";

import {
  FiTrendingUp,
  FiShield,
  FiUser,
  FiCpu,
  FiHeart,
  FiZap,
  FiVideo,
  FiCoffee,
  FiUsers,
  FiStar,
} from "react-icons/fi";


const iconMotion: Transition = {
  initial: { scale: 1, y: 0, rotate: 0 },
  animate: {
    y: [0, -6, 0, 6, 0],
    rotate: [0, 5, 0, -5, 0],
    scale: [1, 1.1, 1, 1.1, 1],
  },
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  },
};

const Home: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12">
        {/* Typewriter Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" text-4xl sm:text-5xl font-bold mb-6 text-primary">
            <Typewriter
              options={{
                strings: [
                  "A Web Developer",
                  "Parkour Athlete",
                  "Fitness Trainer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg mb-6">
            Join Animesh to unlock your full <span className=" text-primary">Physical</span> and <span className=" text-primary">Technical</span>  potential with tailored
            training and professional coaching.
          </p>
          <motion.button
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToFeatures}
          >
            Explore More
          </motion.button>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={svgImg}
            alt="Hero Illustration"
            className="rounded-xl w-full"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="px-6 md:px-20 py-24 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Enable features as you grow
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: FiTrendingUp,
              title: "Parkour Skills",
              desc: "Progress through a comprehensive curriculum focused on safe, dynamic parkour movements, improving your fluidity and confidence.",
            },
            {
              icon: FiShield,
              title: "Strength Coaching",
              desc: "Develop physical power necessary to execute demanding parkour maneuvers with injury prevention and longevity in mind.",
            },
            {
              icon: FiUser,
              title: "Mobility & Flexibility",
              desc: "Enhance joint health, range of motion, and body awareness to move freely and efficiently.",
            },
          ].map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={index}
              className="p-6 bg-base-100 rounded-xl shadow-md cursor-pointer flex flex-col items-center text-center gap-4"
              whileHover={{ scale: 1.07, y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-primary text-5xl"
                initial={iconMotion.initial}
                animate={iconMotion.animate}
                transition={iconMotion.transition}
              >
                <Icon />
              </motion.div>
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <p className="text-base-content/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Foundation Section */}
      <section className="px-6 md:px-20 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Built on a solid foundation
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: FiCpu,
              title: "Strength",
              desc: "Gain real-world strength through bodyweight and resistance training, building muscle endurance and explosive power.",
            },
            {
              icon: FiHeart,
              title: "Technique",
              desc: "Master safe and stylish movement with proper mechanics to enhance flow and reduce risk.",
            },
            {
              icon: FiZap,
              title: "Endurance",
              desc: "Improve your stamina through fun, functional workouts to sustain long training sessions.",
            },
          ].map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl flex flex-col items-center gap-3"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-primary text-5xl"
                initial={iconMotion.initial}
                animate={iconMotion.animate}
                transition={iconMotion.transition}
              >
                <Icon />
              </motion.div>
              <h3 className="font-bold text-lg text-primary">{title}</h3>
              <p className="text-base-content/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className="bg-base-200 px-6 md:px-20 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Extend with plug & play modules
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FiVideo,
              title: "Online Coaching",
              desc: "Train with Animesh from anywhere using video calls and progress tracking tools.",
            },
            {
              icon: FiCoffee,
              title: "Nutrition Guidance",
              desc: "Receive structured plans for eating and supplementing your training properly.",
            },
            {
              icon: FiUsers,
              title: "Community Access",
              desc: "Join our Discord and weekly group challenges to stay motivated and connected.",
            },
          ].map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={index}
              className="bg-base-100 p-6 rounded-xl shadow cursor-pointer flex flex-col items-center gap-4 text-center"
              whileHover={{ scale: 1.07, y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-primary text-5xl"
                initial={iconMotion.initial}
                animate={iconMotion.animate}
                transition={iconMotion.transition}
              >
                <Icon />
              </motion.div>
              <h3 className="text-lg font-bold text-primary">{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-20 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Trusted by athletes
        </h2>
        <motion.div
          className="text-center max-w-3xl mx-auto p-6 rounded-xl bg-base-200 flex flex-col items-center gap-6"
          whileHover={{ scale: 1.03, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="text-primary text-6xl"
            initial={iconMotion.initial}
            animate={iconMotion.animate}
            transition={iconMotion.transition}
          >
            <FiStar />
          </motion.div>
          <p className="italic mb-4 text-lg">
            “Training with Animesh changed my life. I feel stronger, faster, and
            more confident than ever.”
          </p>
          <p className="font-semibold text-primary">– Abhishek Prakash, Delhi</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 px-6 md:px-20 py-12 text-sm text-base-content/60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 <a className=" text-primary " target="_blank" href="https://animesh-tech-athlete.vercel.app/">Animesh Prakash</a>. All rights reserved.</p>
          <div className="flex gap-4 ">
            <motion.a  target="_blank" href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70" className="link hover:text-primary"  whileHover={{ scale: 1.2 }}>
              YouTube
            </motion.a>
            <motion.a  target="_blank" href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0" className="link hover:text-primary" whileHover={{ scale: 1.2 }}>
              Instagram
            </motion.a>
            <motion.a  target="_blank" href="https://www.facebook.com/animesh.prakash.16" className="link hover:text-primary" whileHover={{ scale: 1.2,  }}>
              Facebook
            </motion.a>
          </div>
        </div>
        <BackToTop />
      </footer>
    </div>
  );
};

export default Home;
