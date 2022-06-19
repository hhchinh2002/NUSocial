import React from 'react'
import Header from '../../components/Header/Header'
import News from '../../components/NewsPanel/News'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'
import './home.css'


const Home = () => {
  return (
    <>
    <div className = "homeHeader">
    <Header showHeaderCenter={true} showHeaderRight= {true}/>
    </div>
    <div className = "homeBody">
      <div className="homeLeftBar">
        <LeftBar />
      </div>
      <div className="homeNewsFeed">
        <News />
      </div>
      <div className="homeRightBar">
        <RightBar />
      </div>
    </div>
    </>
  )
}

export default Home;
