import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import RegisterStudent from './pages/Register/RegisterStudent';
import LoginStudent from "./pages/Login/LoginStudent"
import PersonalChat from "./pages/PersonalChat/PersonalChat"
import { LaunchPage } from './pages/LaunchPage/LaunchPage';
import QuickLinks from "./pages/QuickLinks/QuickLinks"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path = "/" element = {<LaunchPage />} />
  <Route path = "/home" element = { <Home />} />
  <Route path = "/students-register" element = { <RegisterStudent />} />
  <Route path = "/students-login" element = {<LoginStudent/>} />
  <Route path = "/personalchat" element = {<PersonalChat />} />
  <Route path = "/quicklinks" element = {<QuickLinks />} />
  </Routes> 
  </BrowserRouter>
);
