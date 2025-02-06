import './Resume.css';
import React from "react";
import Pdf from '../Pdf.jsx';
import resume from '../assets/Resume.pdf';

function Resume() {
    return (
      <div className="Resume">
        <div className='header'>
        <h2>My Resume</h2>
        <a href={resume} download><button>Download Resume</button></a>
        </div>
        <div className='pdf-veiwer'>
          <Pdf/>
        </div>
      </div>
    );
  }
  
  export default Resume;