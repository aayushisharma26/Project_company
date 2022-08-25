var knex=require("../model/connection")
const bodyparser=require("body-parser")
var meraki_data=require("../csvjson.json");
const fs=require("fs")
var req=require("readline-sync")
var choice_of_field=req.question("Which field you want to sort from given data :  ")



const get_method=(req,res)=>{
    res.json(meraki_data)
}



const getdata_by_Industry=(req,res)=>{
    knex('nisway_project').select("*").where({Industry:req.params.Industry})
    .then((data)=>{
        res.send(data)

    })
}

const get_singlerecord=(req,res)=>{
    knex('nisway_project').select("*").where({user_id:req.params.user_id})
    .then((data)=>{
        res.send(data)

    })
}



const deleted=(req,res)=>{
    knex.delete("*").from("nisway_project").where("Industry","=",req.params.Industry)
    .then((data)=>{
        fs.writeFileSync("csvjson.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"delete succesfully",data:data})
    }).catch((err)=>{
        res.send({message:"data delete"})
        console.log(err)
    })
}

const sort=(req,res)=>{

    knex
  .select()
  .table('nisway_project')
  .orderBy(choice_of_field, 'desc')
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({message:err})
    })
}



module.exports={get_method,
            post_method,
            getdata_by_Industry,
            put_method,
            deleted
                ,sort,
            get_singlerecord}