const express = require('express')
const app = express()
const multer = require('multer')

// millleware
// app.use(express.json())

// const db = async () => {
//     try{await }
// }
const upload = multer( {
    dest : 'upload',
    limits:{
        filesize:1000000
    },
    fileFilter(req,file,cb){
    if(file.originalname.endsWith('.jpg'))
    return cb(null,true)
    cb(new Error('file formate is in correct'))
    }
} )

app.post('/upload',upload.single('upload'),async (req,res) =>{
    res.send()
})


app.listen(1000,() => {
    console.log('server is running on port 1000')
})