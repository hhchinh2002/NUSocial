const studentController =  require('../controllers/studentController.js');
const chatController = require('../controllers/chatController')

const router = require("express").Router();

router.get("/allStudents", studentController.getAllStudents);

    router.post("/addStudent", studentController.upload,studentController.addStudent);

module.exports = router;