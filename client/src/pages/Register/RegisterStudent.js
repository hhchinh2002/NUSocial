import React from "react";
import {useState} from "react";
import Header from "../../components/Header/Header";
import "./RegisterStudent.css";
import { Link } from "@mui/material";


function RegisterStudent() {
  const [nus_email, set_nus_email] = useState("");
  const [nusnet_id, set_nusnet_id] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [course_name, set_course_name] = useState("");
  const [year_of_study, set_year_of_study] = useState(0);
  

  const addStudent = async () => {
    const data = {
      nus_email: nus_email,
      nusnet_id: nusnet_id,
      username: username,
      password: password,
      course_name : course_name,
      year_of_study: year_of_study
    };

const settings = {
  method: "POST",
  headers: {
    "Accept" : "application/json",
    "Content-TYPE": "application/json",
  },
  body: JSON.stringify(data),
};
//https://nusocial-2.herokuapp.com/students-register
try {
  const res = await fetch("http://localhost:3001/students-register", settings);
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
      <Header title = "Register" />
    </div>
     <div className = "RegisterStudentBody">
     <label htmlFor="">NUS email</label>
       <input type = "text" onChange = {(e) => {
         set_nus_email(e.target.value);
       }} />

<label htmlFor="">NUSNET id</label>
       <input type = "text" onChange = {(e) => {
         set_nusnet_id(e.target.value);
       }} />

       <label htmlFor="">Username</label>
       <input type = "text" onChange = {(e) => {
         setUsername(e.target.value);
       }} />

       <label htmlFor= "">Password</label>
       <input type = "password" onChange = {(e) => {
         setPassword(e.target.value);
       }} />
       <label htmlFor= "">Course Name</label>
       <input type = "text" onChange = {(e) => {
         set_course_name(e.target.value);
       }} />

<label htmlFor="">Year of Study</label>
       <input type = "number" onChange = {(e) => {
         set_year_of_study(e.target.value);
       }} />

       <button onClick = {addStudent}>Enter</button> 
       or 
      
       <button> <Link href = "/students-login" style={{ textDecoration: 'none' }}>Login  </Link></button>  
     </div>
    </div>
  );
}

export default RegisterStudent;
