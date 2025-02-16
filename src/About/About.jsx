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
            Welcome to my digital realm, where code meets creativity and
            debugging feels like a shonen protagonist's training arc. Just like
            Luffy chasing the One Piece, I’m on a quest to master the
            ever-evolving world of tech—whether it’s crafting sleek React UIs,
            optimizing backend logic, or solving DSA challenges like a strategic
            game of shogi. If you love tech , you're in the right place!
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
