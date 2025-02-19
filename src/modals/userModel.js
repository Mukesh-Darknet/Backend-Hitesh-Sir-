import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



const userScheam = new Schema({
  userName:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    index:true
    
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    
  },
  fullName:{
    type:String,
    required:true,
    trim:true,
    index:true
    
  },
  avatar:{
    type:String,  // we use cloudinary to store the image
    required:true,
   
    
  },
  coverImage:{
    type:String,  // we use cloudinary to store the image
   
    
  },
  watchHistory:[{
    type:Schema.Types.ObjectId,
    ref:"Video"
  }],
  password:{
    type:String,
    required:['true' ,"password is required"],
    trim:true,
    
  },
  refreToken:{
    type:String,
   
  },
  



}
,{
  timestamps:true
}
);





userScheam.pre("save", async function(next){
  if(!this.isModified("password")){
   return  next();
  }

  this.password = await bcrypt.hash(this.password,10);
  next();
})

userScheam.methods.isPassworCorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}


userScheam.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      id:this._id,
      email:this.email,
      userNAme:this.userNAme,
      fullName:this.fullName,

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRES
  })
} 

userScheam.methods.generateRefreshToken = function(){
  return jwt.sign(
    {
      id:this._id,
       
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRES
  })
}



export const User =   mongoose.model("User",userScheam)