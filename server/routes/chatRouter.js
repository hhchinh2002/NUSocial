
const chatController = require('../controllers/chatController')

const chatRouter = require("express").Router();

chatRouter.get("/allMsgs", chatController.getAllMsgs);
chatRouter.post("/addMSg", chatController.addMsg);

module.exports = chatRouter;
