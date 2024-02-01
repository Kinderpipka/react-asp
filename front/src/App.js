import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div >
    <header>
     <ul className="hr">               
        <li>          
            О компании          
        </li>            
        <li ><Link to="/blog">Blog</Link></li>
        
      </ul> 
      </header> 
    </div>
  );
}

export default App;
