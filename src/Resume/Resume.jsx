import './Resume.css';
import React from "react";
import Pdf from '../Pdf.jsx';

function Resume() {
  const resume = '/Resume.pdf';
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