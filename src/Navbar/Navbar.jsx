import './Navbar.css';
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="navbar">
       <header className='name-title'><h1>Khushi Mhasange</h1></header>
       <nav className="nav-list">
          <ul>
            <li><Link to="/">History</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Contact">Contact</Link></li> 
          </ul>
       </nav>
    </div>
  );
}

export default Navbar;