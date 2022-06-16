import React from 'react'
import './profile.css'
import cover from './cover.jpg'
import avatar from './avt.jpg'
import { ImageList, ImageListItem } from '@mui/material'
import { ProfileAlbumList } from '../TestData/TestData'
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import ReactPlayer from 'react-player'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const ProfileMid = () => {
  return (
    <>
    <div className="profileTop">

        <ReactPlayer  width="1038px"
      height = "500px"
      controls
      url="https://www.youtube.com/watch?v=rc43rHgAFNI&ab_channel=MontereyBayAquarium" />
        <img className="profileAvatar" src={avatar} alt="" />
        <div className="profileUserInfo">
            <h4 className="profileUserName">Hoang Huu Chinh</h4>
            <span className="profileUserFollowers">34 followers & 7 friends</span>
        </div>
    </div>
    <div className="profileBottom">
        <div className="profileBottomLeft">
            <div className="profileBio">
                <div className="bioTitle">
                    <span className="bioIcon">
                        <FaceTwoToneIcon sx={{fontSize: 40}}/>
                    </span>
                    BIO
                </div>
                <div className="bioDetails">I'm from CS, hiking habbit, do DM me if you want an accompany for hiking :D</div>
            </div>
            <div className="profileAlbum">
                <div className="albumTitle">
                    <div className="albumIcon">
                        <PhotoLibraryIcon />
                    </div>
                    Album
                </div>
                <div className="albumDetail">
                <ImageList
                    sx={{ width: 500, height: 450, margin: 0 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {ProfileAlbumList.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
                </div>
            </div>
        </div>
        <div className="profileBottomRight">
            profile bottom right
        </div>
    </div>
    </>
  )
}

export default ProfileMid