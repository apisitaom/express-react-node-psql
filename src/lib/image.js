const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: ('./public/uploads'),

    filename: function (req,res,cb){
    
        cb(null, file.fieldname + '-' +new Date().getTime().toString()+ path.extname(file.originalname))

    }
})

const upload = multer({
    storage: storage,
    limits:{
        fieldSize: 1000000 // 1MB
    }
}).array('picture',10)

module.exports = {upload}