import React, { useState } from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion';

const Contact = () => {

    const contactVar = {
        initial : {
            // x : width > 0 ? -100 : "0",
            x : -100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              staggerChildren : 0.7,
              when : "beforeChildren",
            } , 
        }
    }

    const leftVar = {
        initial : {
            x : -100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              
            //   staggerChildren : 0.7
            } , 
        }
    }
   
    const rightVar = {
        initial : {
            x : 100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              
            //   staggerChildren : 0.7
            } , 
        }
    }




    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : ""
    })

    
    const handleChange = (event) => {
        const {name , value} = event.target
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [name] : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }
    
  return (
    <div className='py-4' id='contact'>
        <div className="container2">

            <div className="sec-header mb-4 text-center ">
              <h2 className="text-bold">Get In Touch</h2>
              <p className="about-text text-muted">Contact Me</p>
            </div>

            <motion.div 
                className="row m-0"
                variants={contactVar}
                initial="initial"
                whileInView="animate"
            >
                <motion.div variants={leftVar} className="col-lg-6 p-lg-5">
                    <div className="sec-header py-4 text-center">
                        <h6 className='fw-bold'>Talk To Me</h6>
                    </div>
                    <div className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3 mb-4">
                        <RiMailSendLine size={20} />    
                        <h6 className='text-bold'>Email</h6>
                        <small>azeezaduke222@gmail.com</small>
                        <a className='text-muted' href="mailto:azeezaduke222@gmail.com">Write Me <IoIosArrowRoundForward /></a>
                    </div>
                    <div className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                        <FaWhatsapp size={20}/>   
                        <h6 className='text-bold'>Whatsapp</h6>
                        <small>+234-816-802-8145</small>
                        <a className='text-muted' href="HTTPS://wa.me/2348168028145">Write Me <IoIosArrowRoundForward /></a>
                    </div>
                </motion.div>
                <motion.div variants={rightVar} className="col-lg-6 p-lg-5">
                    <div className="sec-header py-4 text-center">
                        <h6 className='fw-bold'>Write Me Your Project</h6>
                    </div>
                    <form action="" onSubmit={handleSubmit} className='contact-form'>
                        <input 
                            className='mb-3' 
                            type="text" 
                            placeholder='Enter Your Name' 
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input 
                            className='mb-3' 
                            type="email" 
                            placeholder='Enter Your Email' 
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea 
                            className='mb-3' 
                            name="message" 
                            placeholder='Tell me About Your Project' 
                            id="message"  
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button className='works'>
                           
                            <p>Send Message</p>
                            <VscSend size={20} />
                        
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact