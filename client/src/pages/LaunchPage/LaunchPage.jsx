import "./LaunchPage.css";
import { ReactComponent as Lpimgregister } from './lpimg.svg';
import { ReactComponent as Lpimglogin } from './lpimglogin.svg';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';

export const LaunchPage = () => {
  const container = document.querySelector(".container");
  
  return (
    <div class="launchPage">  
      <div class="container">
      <div class="formContainer">
        <div class="loginRegister">
          <form action="#" class="loginForm">
            <h2 class="title">Login</h2>
            <div class="inputField">
              <PersonIcon className="icon"/>
              <input type="text" placeholder="Username" />
            </div>
            <div class="inputField">
              <HttpsIcon className="icon"/>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="guest">Or continue as an anonymous guest</p>
          </form>
          <form action="#" class="registerForm">
            <h2 class="title">Login</h2>
            <div class="inputField">
              <PersonIcon className="icon"/>
              <input type="text" placeholder="Username" />
            </div>
            <div class="inputField">
              <EmailIcon className="icon"/>
              <input type="email" placeholder="Email" />
            </div>
            <div class="inputField">
              <HttpsIcon className="icon"/>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Register" />
            <p class="guest">Or continue as an anonymous guest</p>
          </form>
        </div>
      </div>

      <div class="panelsContainer">
        <div class="panel leftPanel">
          <div class="content">
            <h3>What is NUSocial?</h3>
            <p>
              NUSocial is an all-in-one social media platform designed for
              National University of Singapore students providing a wide range
              of functions helping them to socialize, communicate, find a group
              of students with same hobbies, catch up with their studying schedules,
              submissions deadline,... Register an account to join with NUSocial community.
            </p>
            <p>
              Register an account to join with NUSocial community.
            </p>
            <button onClick={() => {container.classList.add("registerMode")}} class="btn transparent">
              Register
            </button>
          </div>
          <Lpimglogin class="image" alt="" />
        </div>
        <div class="panel rightPanel">
          <div class="content">
            <h3>Already have an account?</h3>
            <p>
              Login with your account here to communicate with your friends, people in NUS
            </p>
            <button onClick={() => {container.classList.remove("registerMode")}} class="btn transparent">
              Login
            </button>
          </div>
          <Lpimgregister class="image" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}
