import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const ref = React.useRef(null);

  // Use useScroll to track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Map scroll progress to opacity and blur (optional dynamic styling)
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]); // Slight fade on scroll
  const backdropBlur = useTransform(scrollYProgress, [0, 0.1], ["10px", "5px"]); // Optional dynamic blur

  return (

    <motion.nav
      ref={ref}
      initial={{ opacity: 0 }}
      style={{ opacity, backdropFilter: backdropBlur }}
      className="sticky top-0 z-10 border-b  pd-4  bg-backgoundco border-gray-200  text-white "
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-white font-semibold">Logo</span>
          <div className="flex space-x-4 text-white">
            <a href="#">Dashboard</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
