const express = require("express");
const router = express.Router();
const lessonsModel = require("../../model/lessonsData.model");
const lessonsValidation = require("../../validation/lesson.validation");


{/*to show all the lessons that were created in the db*/}
router.get("/", async(req, res)=>{
    try{
        const data = await lessonsModel.selectAllLessons();
        res.json(data);
    }
    catch(err){
        res.status(400).json({error:err});
    }
});

module.exports = router;