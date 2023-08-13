import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";
import img1 from "./image21.png"
const Header = () => {
  return (
    <div>

<header className="header">
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-white bg-white">
    <div className="container-fluid">
     
   
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">

        
<nav class="navbar navbar-light bg-light">
    <div class="container">
    <Link to="/"><img src={img1}
                 height="30"
                 alt="Rudo Logo"
                 loading="lazy" /></Link>
       
    </div>
</nav>

          </li>
       
        </ul>
  
    </div>
  </nav>

</header>



    </div>
  )
}

export default Header