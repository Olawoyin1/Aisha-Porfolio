import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import Hero from "./Hero";
// import { RiMailSendLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { RiMenu3Line } from "react-icons/ri";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { MdOutlineLightMode } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";

const Header = ({ handleToggle, toggle, styles }) => {
  const IconVariants = {
    initial: {
      // x : width > 0 ? -100 : "0",
      y: -100,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.7,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    initial: {
      // x : width > 0 ? -100 : "0",
      y: -100,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,

        //   staggerChildren : 0.7
      },
    },
  };
  return (
    <div className="main-header">
      <div className="container2">
        <div className="d-flex  align-items-center header  justify-content-between">
          <a
            href="mailto:azeezaduke222@gmail.com"
            className="d-flex text-white sc align-items-center gap-2"
          >
            <RiMailSendLine />
            <p>azeezaduke222@gmail.com</p>
          </a>

        

          <motion.div
            className="d-none d-lg-flex mail gap-3"
            variants={IconVariants}
            initial="initial"
            animate="animate"
          >
            <a href="https://github.com/olawoyin1">
              <VscGithubAlt size={20} color='#ffffff'/>
            </a>
            <motion.a
              variants={childVariants}
              href="https://x.com/OlawoyinGbolah3"
            >
              <FaXTwitter size={20} color='#ffffff'/>
            </motion.a>
            <motion.a
              variants={childVariants}
              href="https://www.linkedin.com/in/olawoyin1/"
            >
              <SlSocialLinkedin size={20} color='#ffffff' />
            </motion.a>
            <motion.a
              variants={childVariants}
              href="https://www.upwork.com/freelancers/~01c582f3f3e721b2c9"
            >
              <SiUpwork size={20} color='#ffffff'/>
            </motion.a>
            <motion.a
              variants={childVariants}
              href="#li"
              onClick={handleToggle}
            >
              {toggle ? <MdOutlineLightMode size={20} color='#ffffff' /> : <MdOutlineDarkMode size={20} color='#ffffff' />}
            </motion.a>
          </motion.div>
          <a href="#li" className='d-flex d-lg-none' onClick={handleToggle}>

                    {
                        toggle ? <MdOutlineLightMode size={20} color='#ffffff'/> : <MdOutlineDarkMode size={20} color='#ffffff'/>
                    }
            </a>
        </div>

        <Hero />
      </div>
    </div>
  );
};

export default Header;
