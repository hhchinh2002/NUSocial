const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')
const bcrypt = require("bcrypt")



// create main Model
const Student = db.students
const Chat = db.chats

// main work

// 1. create student

const addStudent = async (req, res) => {
    var password = req.body.password;
    password = await bcrypt.hash(password, 10);
    
    let info = {
        username: req.body.username,
        nus_email: req.body.nus_email,
        password:password,
    }
const student = await Student.create(info)
.then(function(item){
    res.status(200).send("successfully registered")
  }).catch(function (err) {
    res.status(200).send("error occured")
    console.log(err);
  });
}



// 2. get all students

const getAllStudents = async (req, res) => {
    let students = await Student.findAll({})
    res.status(200).send(students)
}

// 3. get single student based on id and password

const findStudent = async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let student = await Student.findOne({ where: { username: username}}).then(async stu => {
        console.log("Stu is: " + stu);
        if(stu) {
            if( await bcrypt.compare(password, stu.password)){
                stu.update({
                    online: true
                  })
                  res.status(200).send("successful login")
            } else {
                res.status(200).send("Incorrect password")
            }
            } 
            else {
                res.status(200).send("Incorrect userid");
            }
    })     
        console.log(student);
    
}


// 3. get single student based on id and password

const logoutStudent = async (req, res) => {
    let username = req.body.username
    let student = await Student.findOne({ where: { username: username}});
    student.update({online: false}).then(function(item){
        res.status(200).send("successfully logout")
      }).catch(function (err) {
        res.send("error occured")
        console.log(err);
      });
      
    
}

// 4. update Product

const updateStudent = async (req, res) => {

    let id = req.params.id

    const student = await Student.update(req.body, { where: { id: id }})

    res.status(200).send(student)
   

}

// 5. delete product by id

const deleteStudent = async (req, res) => {

    let id = req.params.id
    
    await Student.destroy({ where: { id: id }} )

    res.status(200).send('Student is deleted !')

}


// 7. connect one to many relation Product and Reviews

const getStudentChats =  async (req, res) => {

    const id = req.params.id

    const data = await Student.findOne({
        include: [{
            model: Chat,
            as: 'chat'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}


// 8. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')


module.exports = {
    addStudent,
    getAllStudents,
    logoutStudent,
    findStudent,
    updateStudent,
    deleteStudent,
    getStudentChats,
    upload
    
}
