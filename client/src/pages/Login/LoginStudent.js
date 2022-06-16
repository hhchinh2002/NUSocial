import React from "react";
import {useState} from "react";
import { Link } from "@mui/material";
import Header from "../../components/Header/Header";
import "./LoginStudent.css";

function LoginStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [correctCreds, setCorrectCreds] = useState("/students-register");

  const serverLogin = async () => {
    if (username === "Thing1Thing2") {
      if (password === "password") {
        setCorrectCreds("/home");
      }
    } 
  };
  return (
    <div className="LoginStudent">
    <div className= "LoginHeader">
    <Header title = "Login" />
    </div>
     <div className = "LoginStudentBody">

       <label htmlFor="">Username</label>
       <input type = "text" onChange = {(e) => {
         setUsername(e.target.value);
       }} />

       <label htmlFor= "">Password</label>
       <input type = "password" onChange = {(e) => {
         setPassword(e.target.value);
       }} />
      
      
  
       <button onClick = {serverLogin}>
       <Link href = {correctCreds} style={{ textDecoration: 'none' }}>
       Submit 
       </Link>
     </button>
       <button>  
       <Link href = "/students-register" style={{ textDecoration: 'none' }}>
       Register
       </Link>
       </button> 
   
     </div>
    </div>
  );
}

export default LoginStudent;
