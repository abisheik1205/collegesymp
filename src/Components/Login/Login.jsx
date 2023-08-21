import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import './Login.css';

export const Login = () =>{
  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*console.log(pass);
    console.log("Hry hry hryyy");*/
    console.log("Username:"+user+"\nPassword:"+pass);
    console.log("\nLogged In");
    if (user.length<8)  alert("Username should atleast be 8 characters");
    else if(pass.length<8) alert("Password should atleast be 8 characters");
    else  window.location="/home"; //alert("Login successful, View the username and password in the console");
  }
  
  
  return(
    <div className="cover">
      <div className="innerbox">
      <h1 id='loghead'>LOGIN</h1>
      <h2>Hey, {user}</h2>
      <form onSubmit={handleSubmit}>
      <input id="us" value={user} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="username"/> <br/>
      <input id="ps" value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="password"/> <br/>
      <button id="login_btn" className="login_btns" type='submit' >LOG IN</button>
      </form>
      <p>Or login using</p>
      <div className="altLogin">
      <button id="facebook" className="login_btns"></button>
      <button id="google" className="login_btns"></button>
      </div>
      </div>
    </div>
  )
}

export default Login;
