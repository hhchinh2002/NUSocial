import React from 'react'
import Header from '../../components/Header/Header';
import "./QuickLinks.css"
import { useLocation } from 'react-router-dom';

const QuickLinks = () => {
  const location = useLocation();
  return (
    <div>
      <Header title = "Quick Links" showHeaderCenter={true} showHeaderRight = {true} link = "/home" username = {location.state.username}/>
    
    </div>
  )
}

export default QuickLinks;
