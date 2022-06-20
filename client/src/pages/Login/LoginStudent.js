
import {useState} from "react";
import { Link } from "@mui/material";
import Header from "../../components/Header/Header";
import "./LoginStudent.css";
import axios from "axios";
import {useLocation} from "react-router-dom"

function LoginStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const serverLogin = async () => {
    const data = {
      username: username,
      password: password,
    };
axios.post("http://localhost:8000/api/students/findStudent", data)
  };
  return (
    <div className="LoginStudent">
    <div className= "LoginHeader">
    <Header title = "Login"/>
    </div>
     <div className = "LoginStudentBody">
       <label htmlFor="">Username</label>
       <input type = "text" onChange = {(e) => {
         setUsername(e.target.value);
        
       }} />

       <label htmlFor= "">Password</label>
       <input type = "password" onChange = {(e) => {
         setPassword(e.target.value);
       }}/>
      
      
       <button>
       <Link href = {serverLogin() !== 404 ? "/home":"/students-login"} style={{ textDecoration: 'none' }}>
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
