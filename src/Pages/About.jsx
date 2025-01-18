import React, { useEffect, useRef } from "react";
import { FaAward } from "react-icons/fa6";
import { VscBriefcase } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { LuAward } from "react-icons/lu";
import { motion, useInView } from "framer-motion";

const About = () => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true });

  const paragraphText2 = `Hi, I’m Aisha, a passionate Virtual Assistant, Social Media Manager, and Content Creator dedicated to helping individuals and businesses thrive online. With a Certificate in Virtual Assistance from ALX Africa and a Social Media Management certification from Hubspot, I combine professional training with hands-on experience to deliver exceptional results. \n
As a Virtual Assistant, I specialize in streamlining operations, organizing schedules, and ensuring things run smoothly behind the scenes. My expertise in social media management allows me to create, plan, and execute strategies that grow brands, engage audiences, and drive results. Additionally, as a content creator, I bring creativity to the table, crafting compelling content that captures attention and tells stories that matter. \n
I’m all about making life easier for my clients and bringing fresh, creative energy to every project. Let’s collaborate and achieve your goals together! \n
Feel free to reach out—I’d love to connect! 😊`;

  return (
    <motion.div className="about-section py-4">
      <motion.div className="container2">
        <div className="sec-header mb-4 text-center">
          <p className="about-text sc text-muted">Who Am I ?</p>
          <h2 className="text-bold sc">About Me</h2>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          className="d-flex flex-column flex-lg-row flex-column-reverse m-0"
        >
          
          <motion.div
            className="col-lg-7 p-lg-2 mt-3 mt-lg-0"
          >
            <motion.div className="me my-4">
              <div ref={paragraphRef}>
                {isInView && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ whiteSpace: "pre-wrap", fontSize: "14px" }}
                  >
                    {paragraphText2.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: index * 0.05, // Adjust typing speed
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
            {isInView && (
              <motion.a
                href="../../Images/Olawoyin Resume.pdf"
                className="works"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: paragraphText2.length * 0.05 + 1, // Start after text animation
                  duration: 0.5,
                }}
              >
                <p>Download CV</p>
                <FiFileText size={20} />
              </motion.a>
            )}
          </motion.div>
          <motion.div className="col-lg-5 px-4 py-lg-2">
            <div className="about-img border">
              <img src="../../Images/aisha.jpeg" className="img-fluid" alt="" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
