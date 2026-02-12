require("dotenv").config();
const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const app=express();
const {Uirouter}=require("./routes/Uiroutes")
const port=8000;
app.use(cors());
app.use(express.json());
app.use("/ui",Uirouter);

app.listen(port,()=>console.log(`Server started at port ${port}`));

