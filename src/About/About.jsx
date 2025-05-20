import "./About.css";
import tulip from "../assets/tulip.png";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },
  { name: "Express", icon: faNodeJs },
  { name: "MongoDB", icon: faDatabase },
  { name: "C++", icon: faLaptopCode },
  { name: "JavaScript", icon: faJs },
  { name: "Git", icon: faGitAlt },
  { name: "GitHub", icon: faGithub },
  { name: "PostgreSQL", icon: faDatabase },
];

const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
  }
} 

const pvariant ={
  hidden:{opacity:0,
          x:-100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

const imgvariant ={
  hidden:{opacity:0,
          x:100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

function About() {
  return (
    <div>
      <div className="About">
        <div>
          <motion.h2  initial="hidden" animate="visible" variants={h2variant}>Hey there! 🌸✨</motion.h2>
          <motion.p className="intro-para" variants={pvariant} initial="hidden" animate="show">
            I'm an aspiring developer who enjoys building web apps as a way to learn and grow. Most of what I know comes from trying things out on my own — setting up projects, solving problems, and figuring things out as I go. Alongside this, I’ve been practicing data structures and algorithms to improve my problem-solving skills. I’m still exploring different technologies and finding what clicks with me, one project at a time. I 
            🎮💻🚀🔥
          </motion.p>
        </div>
        <motion.div variants={imgvariant} initial="hidden" animate="show">
          <img src={tulip} alt="pixel-tulip" />
        </motion.div>
      </div>
      <div>
        <motion.div
          className="skills-marquee"
          animate={{ x: ["5%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType:"loop",duration: 8, ease: "linear" }}
        >
          <div className="skills-wrapper">
            {skills.concat(skills).map((skill, index) => (
              <span key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />{" "}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
