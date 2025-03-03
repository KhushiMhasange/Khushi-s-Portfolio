import Pdf from '../Pdf';
import './Resume.css';
import React from "react";
import resume from '../assets/Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";

const hvariant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
      delay:0.5
  }
} 

function Resume() {
    return (
      <div className="Resume">
        <motion.div className='header' initial="hidden" animate="visible" variants={hvariant}>
          <h2>My Resume</h2>
          <a href={resume} download><button>Download<FontAwesomeIcon icon={faDownload} className='icon' /></button></a>
        </motion.div>
        <div className='pdf-veiwer'>
          <Pdf/>
        </div>
      </div>
    );
  }
  
  export default Resume;
