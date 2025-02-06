import './Projects.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faCode, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


function Projects() {
  return (
    <div className="projects">
      <h2 className='intro'>Projects I have worked on.</h2>
      <section>
        <div id="cloakTalk" className="project">
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
        </div>
        <div id="ticTacToe" className="project">
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
        </div>
        <div id="ticTacToe" className="project">
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
        </div>
      </section>
    </div>
  );
}

export default Projects;
