import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

import Particles from './Particle';
import { loadFull } from "tsparticles";
// import {UserContext} from "./UserContext";
export default function Header(){
    // CHECK IF LOGGED INN
    // const {username,setUsername} = useState(null) info abt user should not be stored here 
   
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  


    return(

        <header>
          <Particles/>
        {/* heading (top) */}
            <Link to='/' className="logo">EduConnect</Link>
            <nav>
             
        
   
          <>

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/courses">Courses</Link>
            {/* <Link to="/discuss">Discuss</Link> */}
          </>
      
            </nav>
              </header>
    )
}