import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
  videoFile:{
    type:String,
    required:true,
   
  },
  description:{
    type:String,
    required:true,
  },
  url:{
    type:String,
    required:true,
    trim:true,
  },
  thumbnail:{
    type:String,
    required:true,
  },
  duration:{
    type:String,
    required:true,
  },
  likeCount:{
    type:Number,
    default:0
  },
  dislikeCount:{
    type:Number,
    default:0
  },
  viewCount:{
    type:Number,
    default:0
  },
  privacy:{
    type:String,
    required:true,
    trim:true,
  },
  isPublised:{
    type:Boolean,
    default:true
  },
  category:{
    type:String,
    required:true,
    trim:true,
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:"Comment"
  },
 
},{
  timestamps:true
});

videoSchema.plugin(mongooseAggregatePaginate);


export const Video = mongoose.model("Video",videoSchema)