
import {useState} from "react";
import Header from "../../components/Header/Header";
import "./RegisterStudent.css";
import { Link } from "@mui/material";
import axios from "axios"


function RegisterStudent() {
  const [nus_email, setnus_email]= useState("");
  const [nusnet_id, setnusnet_id] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [course_name, setcourse_name] = useState("");
  const [year_of_study, setyear_of_study] = useState(0);
  

  const addStudent = async () => {
    const data = {
      nus_email: nus_email,
      nusnet_id: nusnet_id,
      username: username,
      password: password,
      course_name: course_name,
      year_of_study: year_of_study
    };

axios.post("http://localhost:8000/api/students/addStudent", data);
  };

  return (
    <div className="RegisterStudent">
    <div className = "RegisterStudentHeader">
      <Header />
    </div>
     <div className = "RegisterStudentBody">
     <h1>Register</h1>
     <label htmlFor="">NUS email</label>
       <input type = "email" onChange = {(e) => {
         setnus_email(e.target.value);
       }} />
   <label htmlFor="">NUSNET id</label>
       <input type = "text" onChange = {(e) => {
         setnusnet_id(e.target.value);
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
         setcourse_name(e.target.value);
       }} />
   <label htmlFor="">Year of Study</label>
       <input type = "number" onChange = {(e) => {
         setyear_of_study(e.target.value);
       }} />
       <button onClick = {addStudent}>Submit</button> 
       or 
       <button> <Link href = "/students-login" style={{ textDecoration: 'none' }}>Login  </Link></button>
     </div>
    </div>
  );
}

export default RegisterStudent;
