const express = require('express')
const cors = require('cors')

const app = express()


// middleware


app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

// routers
const router = require('./routes/studentRouter.js')
app.use('/api/students', router)
const chatRouter = require('./routes/chatRouter.js')
app.use('/api/chats', chatRouter)
const postRouter = require('./routes/postRouter.js')
app.use('/api/posts', postRouter)

//static Images Folder

app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
