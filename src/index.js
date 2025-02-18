// import mongoose from "mongoose"; 
// import { DB_NAME} from './constant'
// import constant from './constant.js'
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
  path:'./.env'  
})

connectDB()

.then(() => {
  app.listen(process.env.PORT || 6000,  () =>{
    console.log("Server is stared");

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