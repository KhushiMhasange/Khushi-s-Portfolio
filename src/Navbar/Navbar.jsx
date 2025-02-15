
import React, { useContext } from "react"
import './Navbar.css';
import { Link } from 'react-router';
import { ThemeContext } from "../Theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbar">
       <header className='name-title'><Link to="/"><h1>Khushi Mhasange</h1></Link></header>
       <nav className="nav-list">
          <ul>
            <li><Link to="/History">History</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Contact">Contact</Link></li> 
            <li className="toggle-button">
              <input type="checkbox" id="toogle" onClick={()=>{toggleTheme()}}/>
              <label for="toogle">
              <FontAwesomeIcon id="moon"icon={faMoon}/>
              <FontAwesomeIcon id="sun"icon={faSun} />
              <span className="ball"></span>
              </label>
            </li>
          </ul>
       </nav>
    </div>
  );
}

export default Navbar;