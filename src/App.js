import './App.css';
import React, { useContext } from "react";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import History from './History/History'
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'
import About from './About/About'
import { ThemeContext } from './Theme';


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Router>
    <div className={`App ${theme}`}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}/>  
        <Route path='/History' element={<History/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact'element={<Contact/>}/>
      </Routes>
      <Footer/> 
    </div>
    </Router>
  );
}

export default App;
