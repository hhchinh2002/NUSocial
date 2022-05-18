import React from 'react'
import Header from '../../components/Home/Header/Header'
import News from '../../components/Home/NewsPanel/News'
import LeftBar from '../../components/Home/LeftBar/LeftBar'
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
