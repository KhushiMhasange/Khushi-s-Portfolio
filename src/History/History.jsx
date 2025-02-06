import './History.css'
import React from "react";

function History(){
    return(
        <div className="about">
            <h2 className='intro'>A breif about my life in college.</h2>
            <section className="history">
                <p>
                Bachelor of Technology - Computer Science(Data Science)
                <p className='title'>Acropolis Institute of Technology and Reseach</p>
                <span className='dates'>2021-present</span>
                </p>
                <p>
                FreeCodeCamp's Backend Development and API's
                <a href="https://www.freecodecamp.org/certification/Khushi_Mhasange/back-end-development-and-apis"target="_blank"rel="noopener noreferrer">
                <p className='title'>Certificate</p></a>
                <span className='dates'>2024-2025</span>
                </p>
                <p>
                Solved 200+ DSA Questions
                <a href="https://leetcode.com/u/KhushiMhasange19/"target="_blank"rel="noopener noreferrer"><p className='title'>Leetcode</p></a>
                <span className='dates'>2024-present</span>
                </p>
                <p>
                Meta's Frontend Development Professional 
                <a href="https://www.coursera.org/account/accomplishments/verify/2YSKFZMP5NWS"target="_blank"rel="noopener noreferrer"><p className='title'>Certificate</p></a>
                <span className='dates'>2023-2024</span>
                </p>
                <p>
                OOP's in C++ and basic DSA
                <p className='title'>Self-Learning</p>
                <span className='dates'>2022-2023</span>
                </p>
                <p>
                Fundamentals of Programming in C++
                <p className='title'>Self-Learning</p>
                <span className='dates'>2021-2022</span>
                </p>
            </section>
        </div>
    );
}

export default History;