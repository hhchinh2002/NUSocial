import React from 'react'
import {Avatar} from "@mui/material"
import { Link } from "@mui/material"
import './leftBarRow.css'

const LeftBarRow = ({src, imgSrc, Icon, title}) => {
  return (
    <Link href={src} style={{ textDecoration: 'none'}} >
    <div className = 'LeftBarRow'>

    {imgSrc && <Avatar src = {imgSrc} />}
    {Icon && <Icon />}
    <h4>{title}</h4>
    
    </div>
    </Link>
  )
}

export default LeftBarRow
