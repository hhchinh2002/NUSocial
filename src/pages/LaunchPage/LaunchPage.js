import React from 'react';
import NewsFeed from '../../components/NewsPanel/NewsFeed';
import "./LaunchPage.css";

export const LaunchPage = () => {
  return (
    <div className='LaunchPage'>
    <div className = "LaunchPageHeader">
    <h1>Continue As: </h1>
    </div>
    <div className = "LaunchPageBody">
    <span  title="Redirect to student register">
    <NewsFeed link = "/students-register" title = "Student" />
    </span>
    <span  title="Redirect to staff register">
    <NewsFeed title = "Staff" />
    </span>
    <span title="Redirect to alumni register">
    <NewsFeed title = "Alumni" /> 
    </span>
    <span  title="Redirect to home">
    <NewsFeed link = "/home" title ="Guest" />
    </span>
    </div>
    </div>
  )
}
