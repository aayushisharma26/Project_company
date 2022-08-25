const express=require("express");
const { get_method,deleted, getdata_by_Industry, sort, get_singlerecord } = require("../controller/get_post");
const router=express.Router();


router.get('/get_data',get_method)
router.get('/get_by_age/:Industry',getdata_by_Industry)
router.delete('/deletemethod/:Industry',deleted)
router.get("/sort",sort)
router.get("/getsinglerecord/:user_id",get_singlerecord)


module.exports={router}