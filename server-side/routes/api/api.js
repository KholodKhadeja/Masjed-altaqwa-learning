const express = require ("express");
const router = express.Router();

const lessonsRouter = require("./lessons");
router.use("/lessons", lessonsRouter);


module.exports=router;