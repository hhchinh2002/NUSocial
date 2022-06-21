const express = require('express')
const cors = require('cors')
const http = require("http");
const { Server } = require("socket.io");

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

// middleware
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
  
  server.listen(3001, () => {
    console.log("SERVER RUNNING");
  });

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
