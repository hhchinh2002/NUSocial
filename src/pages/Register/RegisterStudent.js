
import {useState} from "react";
import Header from "../../components/Header/Header";
import "./RegisterStudent.css";
import { Link } from "@mui/material";


function RegisterStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  

  const addStudent = async () => {
    const data = {
      username: username,
      password: password,
      course: course,
    };

const settings = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-TYPE": "application/json",
  },
  body: JSON.stringify(data),
};

try {
  const res = await fetch("https://nusocial-2.herokuapp.com/students-register", settings);
  if(res.ok) {
    return res.json();
  }
} catch (error) {
     console.log(error);
}
  };

  return (
    <div className="RegisterStudent">
    <div className = "RegisterStudentHeader">
      <Header />
    </div>
     <div className = "RegisterStudentBody">
     <h1>Register</h1>
       <label htmlFor="">Username</label>
       <input type = "text" onChange = {(e) => {
         setUsername(e.target.value);
       }} />

       <label htmlFor= "">Password</label>
       <input type = "password" onChange = {(e) => {
         setPassword(e.target.value);
       }} />
       <label htmlFor= "">Course</label>
       <input type = "text" onChange = {(e) => {
         setCourse(e.target.value);
       }} />

       <button onClick = {addStudent}>Submit</button> 
       or 
      
       <button> <Link href = "/students-login" style={{ textDecoration: 'none' }}>Login  </Link></button>
     
    
     </div>
    </div>
  );
}

export default RegisterStudent;
