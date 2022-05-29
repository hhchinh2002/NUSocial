
import {useState} from "react";
import { Link } from "@mui/material";
import Header from "../../components/Header/Header";
import "./LoginStudent.css";

function LoginStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const serverLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

const settings = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-TYPE": "application/json",
    
  },
  body: JSON.stringify(data),
};
//https://nusocial-2.herokuapp.com/students-register
try {
  const res = await fetch("https://nusocial-2.herokuapp.com/students-login", settings);
  return res.status;
} catch (error) {
     console.log(error);
}
  };
  return (
    <div className="LoginStudent">
    <div className= "LoginHeader">
    <Header />
    </div>
     <div className = "LoginStudentBody">
     <h1>Login</h1>
       <label htmlFor="">Username</label>
       <input type = "text" onChange = {(e) => {
         setUsername(e.target.value);
       }} />

       <label htmlFor= "">Password</label>
       <input type = "password" onChange = {(e) => {
         setPassword(e.target.value);
       }} />
      
      
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
