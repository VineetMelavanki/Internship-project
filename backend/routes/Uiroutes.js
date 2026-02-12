const express=require("express");
const Uirouter=new express.Router();
const{generateui}=require("../Controllers/generateui")
Uirouter.post("/generate-ui",generateui);

module.exports={Uirouter};