import mongoose from "mongoose";
import {DB_NAME} from '../constant.js'


const connectDB = async () =>{
   try{
   const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   console.log(`\n WOW Mongodb is coonected !!! ${connectionInstance.connection.host}`); 
   

   }
   catch(error){
    console.log("MongoDb connection error" , error);
    

   }
}

export default connectDB;