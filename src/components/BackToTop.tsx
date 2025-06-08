// components/BackToTop.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "lucide-react"; // or any icon lib

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 btn btn-circle btn-primary shadow-xl z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ArrowUpIcon className="w-5 h-5" />
    </motion.button>
  ) : null;
};

export default BackToTop;
