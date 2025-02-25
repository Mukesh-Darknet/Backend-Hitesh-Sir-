// import mongoose from "mongoose"; 
// import { DB_NAME} from './constant'
// import constant from './constant.js'
import express from "express";
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

import {app} from "./app.js";
  // const app = express();

dotenv.config({
  path:'./.env'  
})

connectDB()

.then(() => {
  // create serverz
  app.listen(process.env.PORT || 6000,  () =>{
    console.log(`Server is stared: ${process.env.PORT}`);

  } );
})
.catch((err) =>{
  console.log("Mongodb connection Failed !!!" ,err);
  
})










/*  first approch
import express from "express"
const app = express();
;(async () =>{
  try{
   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

   app.on("Error" , (error) =>{
    console.log("Error to connect" ,error)
    throw error
   })

   app.listen(process.env.PORT, () =>{
    console.log(`App is listening on port ${process.env.PORT}`);
    
   })

  }catch(error){
    console.error("Error " ,error);
    throw error;
  }

})()

*/