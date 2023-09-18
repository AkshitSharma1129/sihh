import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function RegisterPage() {


  return (
    <div className="mainform">
      <form action="" className="register">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input id="username" className="input" type="text" placeholder="username" />
          <div className="cut"></div>
        </div>

        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder="email" />
          <div className="cut cut-short"></div>
        </div>
        <div className="input-container ic2">
          <input id="password" className="input" type="password" placeholder="password" />
          <div className="cut cut-short"></div>
        </div>

        <div className="input-container ic2">
          <input id="lang" className="input" type="text" placeholder="preferred language" />
          <div className="cut cut-short"></div>
        </div>

        <div className="input-container ic2">
          <input id="classname" className="input" type="number" placeholder="class" />
          <div className="cut cut-short"></div>
        </div>

       
        <button type="submit" className="submit">Register</button>

        <div style={{ textAlign: 'center' }}>
          <Link to={'/login'} style={{ color: 'white', fontSize: 'small', textDecoration: 'none' }}>Already Registered? Login here</Link>
        </div>
      </form>
    </div>
  );
}
