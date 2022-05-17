import React from 'react'
import Header from '../../components/Header/Header'
import News from '../../components/NewsPanel/News'
import LeftBar from '../../components/LeftBar/LeftBar'
import './home.css'


const Home = () => {
  const homeBodyStyle = {
    display: "flex"
  };
 
  return (
    <div className = "Home">
    <div className = "home_header">
    <Header/>
    </div>
    <div className = "home_body" style = {homeBodyStyle}>
    <LeftBar />
    <News />
    </div>
    </div>
  )
}

export default Home;
