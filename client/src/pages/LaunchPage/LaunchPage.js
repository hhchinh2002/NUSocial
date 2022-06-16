import React from 'react';

import Panel from "../../components/launchOptionPanels/panel"
import Header from '../../components/Header/Header';
import "./LaunchPage.css";

export const LaunchPage = () => {
  return (
    <div className='LaunchPage'>
    <div className = "LaunchPageHeader">
    <Header />
    </div>
   
    <div className = "LaunchPageBodyHeader">
    <h1>Continue As...</h1>
    </div>
    <div className = "LaunchPageBody">
    <span  title="Redirect to student register">
    <Panel link = "/students-register" title = "Student" img = "https://static.vecteezy.com/system/resources/previews/004/461/992/original/teenage-schoolgirl-with-book-flat-illustration-university-college-student-holding-textbook-and-laptop-cartoon-character-isolated-on-white-background-smart-teen-girl-with-bag-vector.jpg" />
    </span>
    <span  title="Redirect to staff register">
    <Panel title = "Staff" img = "https://img.freepik.com/free-vector/happy-young-female-college-teacher-university-professor-lecturer-educational-worker-standing-beside-chalkboard-holding-pointer-teaching-colorful-illustration-flat-cartoon-style_198278-2058.jpg?w=2000" />
    </span>
    <span title="Redirect to alumni register">
    <Panel title = "Alumni" img= "https://img.freepik.com/free-vector/organic-flat-graduation-illustration_52683-61781.jpg?w=2000"/> 
    </span>
    <span  title="Redirect to home">
    <Panel link = "/home" title ="Guest" img = "https://www.91-cdn.com/hub/wp-content/uploads/2019/02/chrome-incognito-featured.jpg"/>
    </span>
    </div>
    </div>
  )
}
