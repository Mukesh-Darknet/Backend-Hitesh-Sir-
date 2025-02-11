import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();


//  to set configure and to set middleware 
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials:true
}))

app.use(express.json({limits:"16kb"}))

// to handle the url encoder
app.use(express.urlencoded())
// static is used  to store file and folder we use  like pdf file photoes
app.use(express.static("public"));

// work of cookieParser is to excess the sever or brouse cookie
app.use(cookieParser());



export {app}