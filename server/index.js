const express = require('express')
const cors = require('cors')

const app = express()


// middleware


app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/studentRouter.js')
app.use('/api/students', router)
const chatRouter = require('./routes/chatRouter.js')
app.use('/api/chats', chatRouter)

//static Images Folder

app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})