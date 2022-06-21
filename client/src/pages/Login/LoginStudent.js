
import {useState} from "react";
import { Link } from "@mui/material";
import Header from "../../components/Header/Header";
import "./LoginStudent.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function LoginStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sentData, setSentData] = useState("");
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const serverLogin = async () => {
    const data = {
      username: username,
      password: password,
    };
axios.post("http://localhost:8000/api/students/findStudent", data).then(response => {
  setSentData(response.data);
  console.log(response.data);
  setOpen(true)
  console.log(username);
})
  };
  return (
    <div className="LoginStudent">
    <div className= "LoginHeader">
    <Header title = "Login" username = {username}/>
    
    </div>
     <div className = "LoginStudentBody">
       <label htmlFor="">Username</label>
       <input type = "text" onChange = {(e) => {
         setUsername(e.target.value);
        
       }}
       onKeyDown = {(e) => {
          if (e.keyCode === 13) {
        serverLogin();
        }
        }} />

       <label htmlFor= "">Password</label>
       <input type = "password" onChange = {(e) => {
         setPassword(e.target.value);
       }}
        onKeyDown = {(e) => {
          if (e.keyCode === 13) {
        serverLogin();
        }
        }}
       />
      
      {sentData === "successful login" ? navigate("/home", {state:{username:username}}) : sentData!=="" && <div><Collapse in={open}> <Alert
      severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {sentData}
        </Alert></Collapse></div>}
       <button onClick  = {serverLogin}>  
       Submit
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
