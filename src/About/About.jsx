import './About.css'
import tulip from "../assets/tulip.png"
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
import { faDatabase,faLaptopCode } from '@fortawesome/free-solid-svg-icons';

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

function About() {
  return (
    <div>
      <div className="About">
        <div>
          <h2>Hey there! 🌸✨</h2>
          <p className="intro-para">
            Welcome to my digital realm, where code meets creativity and
            debugging feels like a shonen protagonist's training arc. Just like
            Deku chasing his dream of being the No.1 hero, I’m on a quest to
            master the ever-evolving world of tech—whether it’s crafting sleek
            React UIs, optimizing backend logic, or solving DSA challenges like
            a strategic game of shogi. If you love tech, you're in the right
            place! 🎮💻🚀🔥
          </p>
        </div>
        <div>
          <img src={tulip} alt="pixel-tulip" />
        </div>
      </div>

      <motion.div
        className="skills-marquee"
        animate={{ x: ["-15%", "-100%"] }} // Moves from right to left
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        {skills.concat(skills).map((skill, index) => (
          <span key={index} className="skill-item">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />{" "}
            {skill.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default About;


 
