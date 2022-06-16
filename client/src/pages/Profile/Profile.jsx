import React from 'react'
import './profile.css'
import Header from '../../components/Header/Header'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'
import ProfileMid from '../../components/ProfileMid/ProfileMid'

const Profile = () => {
  return (
    <div className="profile">
        <div className="profileHeader">
            <Header title = "Profile" showHeaderCenter={true} showHeaderRight={true} link = "/home"/>
        </div>
        <div className="profileBody">
            <div className="profileBodyLeft">
                <LeftBar />
            </div>
            <div className="profileBodyMid">
                <ProfileMid />
            </div>
            <div className="profileBodyRight">
                <RightBar />
            </div>
        </div>
    </div>
  )
}

export default Profile