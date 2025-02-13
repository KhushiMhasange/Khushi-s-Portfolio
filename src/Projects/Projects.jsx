import './Projects.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faCode, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";

const projectSecVar = {
  hidden : {opacity:0},
  visible: {
      opacity:1,
      transition :{
          staggerChildren : 0.5,
          delay :0.2
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
  }
} 

function Projects() {
  return (
    <div className="projects">
      <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>Projects I have worked on.</motion.h2>
      <motion.section initial="hidden" animate="visible" variants={projectSecVar}>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank"><h2>CloakTalk</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon"/>
          Anonymous Social meadia website for college students.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            MERN stack
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="/goto/mixmaster" target="_blank"> Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank"><h2>Multiplayer Tic-Tac-Toe</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
            Tic-Tac-Toe with real time updates using websockets.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            React, Node, sockets.io
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2024
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="/goto/mixmaster" target="_blank"> Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank"><h2>Mental Health Compass</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
            Features assessment tool and mental health resources.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            MERN stack, Google Places API
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2023
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="/" target="_blank"> Git Repository</a>
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Projects;


// const containerRef = useRef(null);
//   const inView = useInView(containerRef,{once:true});
//   const mainControls = useAnimation()

//   const {scrollYProgress} = useScroll({
//     target:containerRef,
//     offset:["start end","end end"]
//   })
  
  // const textVal = useTransform(
  //     scrollYProgress,
  //     [0,1],
  //     [-"100%","0%"]
  // )

  // useEffect(()=>{
  //   if(inView){
  //     mainControls.start("visible")
  //   }
  // },[inView, mainControls])