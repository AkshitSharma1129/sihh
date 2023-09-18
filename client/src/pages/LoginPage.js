import {useContext, useState} from "react";
import {Link,Navigate} from "react-router-dom"; 


export default function LoginPage(){
   
  
  
        
         
          
    return(
<div className="mainform">
<form action="" className="register" >
<div class="title">Login Here!</div>
<div class="input-container ic1">
  <input id="username" class="input" type="text" placeholder="username" 
            />
  <div class="cut"></div>
  
</div>
<div class="input-container ic2">
  <input id="email" class="input" type="password" placeholder="password"  className="input"
            />
  <div class="cut cut-short"></div>
  {/* <label for="password" class="placeholder">Email</label> */}
</div>
            <button type="text" class="submit">Login</button>

            <div style={{ textAlign: 'center' }}>
  <Link to={'/register'} style={{ color: 'white', fontSize: 'small', textDecoration: 'none' }}>New User? Regitser here</Link>
</div>
        </form>
        </div> 
       
    )
}