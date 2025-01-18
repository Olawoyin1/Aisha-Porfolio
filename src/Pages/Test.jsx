import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const roles = [
    "Virtual Assistant",
    "Social Media Manager",
    "Content Creator",
  ]; // List of roles
  const [currentIndex, setCurrentIndex] = useState(0); // Current role index
  const [displayedText, setDisplayedText] = useState(""); // Text currently being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether deleting text or not

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let typingSpeed = isDeleting ? 50 : 100; // Speed of typing and deleting
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText === "") {
      // Move to the next role
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length); // Loop to the next role
    } else {
      // Continue typing or deleting
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.slice(0, displayedText.length - 1)
          : currentRole.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [displayedText, isDeleting, currentIndex, roles]);

  return (
    <div
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ color: "#333" }}
      >
        A&nbsp;
      </motion.span>
      <motion.span
        style={{
          color: "#ff4500",
          display: "inline-block",
        }}
        key={currentIndex} // Trigger animation when text changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{
          display: "inline-block",
          marginLeft: "4px",
          backgroundColor: "#ff4500",
          width: "6px",
          height: "24px",
        }}
      />
    </div>
  );
};

export default AnimatedText;
