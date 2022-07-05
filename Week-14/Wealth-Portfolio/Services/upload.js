const client = require('../Database/postgreSQL')
const multer = require('multer');

const upload = multer({dest:'uploads/'}).single("demo_image");


exports.uploadFile = (req,res) => {

    res.send(req.body);
    // upload(req, res, (err) => {
    //     if(err) {
    //       res.status(400).send("Something went wrong!");
    //     }
    //     res.send(req.file);
    //   });

}