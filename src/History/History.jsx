import './History.css'
import React from "react";
import {motion} from "framer-motion";

const historySecVar = {
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

function History(){
    
    return(
        <div className="about">
            <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>A breif about my life in college.</motion.h2>
            <motion.section variants={historySecVar} initial="hidden" //the children just inherit this properties
            animate="show" className="history" >
                <motion.p variants={pvariant}>
                Bachelor of Technology - Computer Science(Data Science)
                <p className='title'>Acropolis Institute of Technology and Reseach</p>
                <span className='dates'>2021-present</span>
                </motion.p>
                <motion.p variants={pvariant}>
                FreeCodeCamp's Backend Development and API's
                <a href="https://www.freecodecamp.org/certification/Khushi_Mhasange/back-end-development-and-apis"target="_blank"rel="noopener noreferrer">
                <p className='title'>Certificate</p></a>
                <span className='dates'>2024-2025</span>
                </motion.p>
                <motion.p variants={pvariant}>
                Solved 200+ DSA Questions
                <a href="https://leetcode.com/u/KhushiMhasange19/"target="_blank"rel="noopener noreferrer"><p className='title'>Leetcode</p></a>
                <span className='dates'>2024-present</span>
                </motion.p>
                <motion.p variants={pvariant}>
                Meta's Frontend Development Professional 
                <a href="https://www.coursera.org/account/accomplishments/verify/2YSKFZMP5NWS"target="_blank"rel="noopener noreferrer"><p className='title'>Certificate</p></a>
                <span className='dates'>2023-2024</span>
                </motion.p>
                <motion.p variants={pvariant}>
                OOP's in C++ and basic DSA
                <p className='title'>Self-Learning</p>
                <span className='dates'>2022-2023</span>
                </motion.p>
                <motion.p variants={pvariant}>
                Fundamentals of Programming in C++
                <p className='title'>Self-Learning</p>
                <span className='dates'>2021-2022</span>
                </motion.p>
            </motion.section>
        </div>
    );
}

export default History;