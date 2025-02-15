import './Contact.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";

const secVar = {
  hidden : {opacity:0},
  show : {
      opacity:1,
      transition :{
          staggerChildren : 0.5,
          delay:0.2
      }
  },
}

const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
      delay:0.5
  }
} 
const avariant ={
  hidden:{opacity:0,
          x:-100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
} 

function Contact() {
    return (
      <div className="contact">
        <motion.h2 className="intro-con" initial="hidden" animate="visible" variants={h2variant}>If you liked my portfolio, Let's Connect 🚀.</motion.h2>
        <motion.section className="contacts" variants={secVar} initial="hidden"
            animate="show">
        <motion.a href="mailto:khushimhasange1905@gmail.com" id='email-link' className="contact-link" variants={avariant}>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <h3>Email</h3>
        <span className="tooltip">khushimhasange1905@gmail.com</span>
        </motion.a>
        <motion.a href="https://github.com/KhushiMhasange" target="_blank" rel="noopener noreferrer" className="contact-link" variants={avariant}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <h3>Github</h3>
        </motion.a>
        
        <motion.a href="https://www.linkedin.com/in/khushi-mhasange-207278226/" target="_blank" rel="noopener noreferrer" className="contact-link" variants={avariant}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <h3>LinkedIn</h3>
        </motion.a>
        
        <motion.a href="https://x.com/KhushiMhasange" target="_blank" rel="noopener noreferrer" className="contact-link" variants={avariant}>
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
          <h3>Twitter (X)</h3>
        </motion.a>
        </motion.section>
      </div>
    );
  }
  
  export default Contact;