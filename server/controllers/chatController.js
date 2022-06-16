const db = require('../models')



// create main Model
const Student = db.students
const Chat = db.chats

// main work

// 1. create product

const addMsg = async (req, res) => {

    let info = {
        sender_nusocial_id: req.body.sender_nusocial_id,
        body: req.body.body
    
    }

    const chat = await Chat.create(info)
    res.status(200).send(chat)
    console.log(chat)
}



// 2. get all products

const getAllMsgs = async (req, res) => {

    let chats = await Chat.findAll({})
    res.status(200).send(chats)
}

module.exports = {
    addMsg,
    getAllMsgs
}