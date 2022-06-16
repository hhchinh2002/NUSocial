import React from 'react'
import "./news.css"
import NewsFeed from'./NewsFeed'
import { NewsData, PostList } from '../TestData/TestData'
import Post from '../Post/Post'

//Change props of NewsFeed to alter content of News panel
const News = () => {
  return (
    <div className = "postsAndNews">
      <div className = "News">
      {NewsData.map(news => (
        <NewsFeed img = {news.img} profileIcon = {news.profileIcon} title = {news.title} link = {news.link} />
      ))}
      </div>
      <div className="Posts">
        {PostList.map(post => (
          <Post post = {post} />
        ))}
      </div>
    </div>
  )
}

export default News;


