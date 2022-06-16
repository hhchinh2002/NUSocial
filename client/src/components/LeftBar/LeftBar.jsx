import './leftBar.css';
import LeftBarRow from './LeftBarRow';
import React from 'react';
import { LeftBarFeed } from '../TestData/TestData';

//change props in LeftBarRow as required to render different links in LeftBar
const LeftBar = () => {

  return ( 
    <div className = "LeftBar">
    {LeftBarFeed.map((l) => (
          <LeftBarRow src = {l.src} Icon={l.Icon} imgSrc = {l.imgSrc} title = {l.title} />
        ))}
    </div>
  )
}

export default LeftBar;
