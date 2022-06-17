const studentController =  require('../controllers/studentController.js');


const router = require("express").Router();

router.get("/allStudents", studentController.getAllStudents);

router.post("/findStudent", studentController.findStudent);
router.post("/addStudent",studentController.addStudent);

module.exports = router;
