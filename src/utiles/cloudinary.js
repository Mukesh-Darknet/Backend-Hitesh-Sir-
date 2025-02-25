import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,   
    api_secret: process.env.CLOUDNARY_API_SECRET
}); 


const UploadOncloudinary = async (localfilepath) => {
    try {
        if(!localfilepath){
            return null;
        }

        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type: 'auto',
        });

        console.log("File uploaded successfully on Cloudinary" , response.url );
        return response;
        
    } catch (error) {
        fs.unlinkSync(localfilepath);
        return nulll;
        console.log(error);
    }
}


// cloudinary.uploader.upload('image.jpg', {folder: 'images'}, (error, result) => {
//     console.log(result);
// });



export {UploadOncloudinary};  
