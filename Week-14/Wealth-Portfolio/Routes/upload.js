const express = require('express');

const fileUpload = require('../Services/upload')

const router = express.Router();

router.post('/uploadFile',fileUpload.uploadFile);
// router.post('/uploadFile',(req,res)=>{
//     res.send(req.file);
// });


module.exports = router;