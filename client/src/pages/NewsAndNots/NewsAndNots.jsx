
import React from 'react'
import "./NewsAndNots.css"
import Header from '../../components/Header/Header';



const NewsAndNots = () => {

  return (
 
    <div >
      <Header title = "News and Notifications" showHeaderCenter={true} showHeaderRight={true} link = "/home"/>
    </div>
  )
}

export default NewsAndNots;
