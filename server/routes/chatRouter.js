
const chatController = require('../controllers/chatController')

const router = require("express").Router();

router.get("/allMsgs", chatController.getAllMsgs);

    router.post("/addMSg", chatController.addMsg);

module.exports = router;