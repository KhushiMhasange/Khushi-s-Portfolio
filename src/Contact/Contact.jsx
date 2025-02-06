import './Contact.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
      <div className="contact">
        <h2 className="intro-con">You can reach out to me here.</h2>
        <section className="contacts">
        <a href="khushimhasange1905@gmail.com" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <h3>Email</h3>
        </a>
        <a href="https://github.com/KhushiMhasange" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <h3>Github</h3>
        </a>
        
        <a href="https://www.linkedin.com/in/khushi-mhasange-207278226/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <h3>LinkedIn</h3>
        </a>
        
        <a href="https://x.com/KhushiMhasange" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
          <h3>Twitter (X)</h3>
        </a>
        </section>
      </div>
    );
  }
  
  export default Contact;