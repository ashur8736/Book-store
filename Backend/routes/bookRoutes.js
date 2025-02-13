const express=require("express");
const router=express.Router();

const{getBook}=require("../controllers/bookControllers");

router.get("/",getBook);

module.exports=router;