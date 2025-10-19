import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { uiDesignProjects } from "../Constants/constants";

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ProjectCard = ({ index, demo_image, onOpen }) => {
  return (
    <Tilt
      options={{
        max: 40,
        scale: 1,
        speed: 450,
      }}
      className="shadow-2xl p-2 rounded-lg sm:w-[300px] w-[100%] bg-transparent"
    >
      <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.6)}>
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={demo_image}
            alt=""
            className="w-full h-full md:h-[200px] object-cover block cursor-pointer"
            onClick={() => onOpen(demo_image)}
            draggable={false}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const UIDesignProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [selectedImage]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <>
      <div className="mt-5 flex flex-wrap justify-center gap-4 w-full">
        {uiDesignProjects.map((project, index) => (
          <ProjectCard
            key={`uidesign-${index}`}
            index={index}
            demo_image={project.demo_image}
            onOpen={openImage}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeImage}
          />
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            src={selectedImage}
            alt=""
            className="relative max-w-[95%] max-h-[95%] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}
    </>
  );
};

export default UIDesignProjects;
