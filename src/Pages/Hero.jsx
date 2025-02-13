// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const Hero = (handleToggle, toggle, styles) => {
//   const IconVariants = {
//     initial: {
//       // x : width > 0 ? -100 : "0",
//       y: -100,
//       opacity: 0,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.7,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const childVariants = {
//     initial: {
//       // x : width > 0 ? -100 : "0",
//       y: -100,
//       opacity: 0,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,

//         //   staggerChildren : 0.7
//       },
//     },
//   };

//   const roles = [
//     "Virtual Assistant",
//     "Social Media Manager",
//     "Content Creator",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0); // Current role index
//   const [displayedText, setDisplayedText] = useState(""); // Text currently being displayed
//   const [isDeleting, setIsDeleting] = useState(false); // Whether deleting text or not

//   useEffect(() => {
//     const currentRole = roles[currentIndex];
//     let typingSpeed = isDeleting ? 50 : 100; // Speed of typing and deleting
//     let timeout;

//     if (!isDeleting && displayedText === currentRole) {
//       // Pause before deleting
//       timeout = setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && displayedText === "") {
//       // Move to the next role
//       setIsDeleting(false);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length); // Loop to the next role
//     } else {
//       // Continue typing or deleting
//       timeout = setTimeout(() => {
//         const nextText = isDeleting
//           ? currentRole.slice(0, displayedText.length - 1)
//           : currentRole.slice(0, displayedText.length + 1);
//         setDisplayedText(nextText);
//       }, typingSpeed);
//     }

//     return () => clearTimeout(timeout); // Cleanup timeout
//   }, [displayedText, isDeleting, currentIndex]);

//   return (
//     <div className="hero-container d-flex align-items-center justify-content-center">
//       <div className="hero d-flex align-items-start gap-3 flex-column justify-content-center">
//         <h4>HEY THERE!</h4>
//         <h1>I'M AZEEZ AISHA</h1>
//         <div style={{fontSize: "20px"}}>
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             style={{ color: "#333" }}
//           >
//             A&nbsp;
//           </motion.span>
//           <motion.span
//             style={{
//               color: "#ff4500",
//               display: "inline-block",
//             }}
//             key={currentIndex} // Trigger animation when text changes
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {displayedText}
//           </motion.span>
//           <motion.span
//             animate={{ opacity: [1, 0] }}
//             transition={{ duration: 0.5, repeat: Infinity }}
//             style={{
//               display: "inline-block",
//               marginLeft: "4px",
//               backgroundColor: "#ff4500",
//               width: "6px",
//               height: "24px",
//             }}
//           />
//         </div>


//         <motion.button className="works">View Works</motion.button>
//       </div>
      
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.7, // Delay based on custom index
        duration: 1, // Slower animation duration
      },
    }),
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 2.2, // Delay before children animations start
        staggerChildren: 0.4, // Slower stagger timing between elements
      },
    },
  };

  const roles = [
    "Virtual Assistant",
    "Social Media Manager",
    "Ecommerce Expert",
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Current role index
  const [displayedText, setDisplayedText] = useState(""); // Text currently being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether deleting text or not

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let typingSpeed = isDeleting ? 50 : 100; // Speed of typing and deleting
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.slice(0, displayedText.length - 1)
          : currentRole.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <div className="hero-container d-flex align-items-center justify-content-center">
      <motion.div
        className="hero d-flex align-items-center align-items-sm-start gap-3 flex-column justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h4
          className="text-center text-sm-start"
          variants={textVariants}
          custom={0} // Delay index
        >
          HEY THERE!
        </motion.h4>
        <motion.h1
          className="text-center text-sm-start"
          variants={textVariants}
          custom={1} // Delay index
        >
          Aduke Oluwafunmilayo
        </motion.h1>
        <motion.div
          style={{ fontSize: "20px" }}
          variants={textVariants}
          custom={2} // Delay index
        >
          <span>I'm A&nbsp;</span>
          <motion.span
            style={{
              color: "#ff4500",
              display: "inline-block",
            }}
          >
            {displayedText}
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{
              display: "inline-block",
              marginLeft: "4px",
              backgroundColor: "#ff4500",
              width: "6px",
              height: "24px",
            }}
          />
        </motion.div>
        <motion.button
          className="works"
          variants={textVariants}
          custom={3} // Delay index
        >
          View Works
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;

