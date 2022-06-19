import React from 'react'
import Header from '../../components/Header/Header';
import "./QuickLinks.css"

const QuickLinks = () => {
  return (
    <div>
      <Header title = "Quick Links" showHeaderCenter={true} showHeaderRight = {true} link = "/home" />
      <div className = "WIP">
      <h1>It's a WIP</h1>
      <iframe src="https://giphy.com/embed/zw7T9RgQRm99e" width="480" height="276" frameBorder="0" class="giphy-embed" ></iframe>
      </div>
    
    </div>
  )
}

export default QuickLinks;
