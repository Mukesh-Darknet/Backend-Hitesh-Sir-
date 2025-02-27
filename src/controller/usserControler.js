import {asynHandler} from './../utiles/asyncHandler.js'
import{ApiError} from './../utiles/ApiError.js'
import {User} from './../models/userModel.js'
import {UploadOncloudinary} from './../utiles/cloudinary.js'
import {ApiResponce} from './../utiles/ApiResponce.js'

const userRegister = asynHandler(async (req, res) => {

    // get the data from the user
    // validate the data  
    // check if the user already exist
    // check image is uploaded or not
    // upload on cloudinary
    // create user
    // create use object - 

    const{fullName, email, password, Password} = req.body;
    console.log("email:",email);

    if(fullName === "" || email === "" || password === "" || Password === ""){
        throw new ApiError(400, "Please fill all the fields");
    } 
    const exitedUser = User.findOne({$or:[{userName},{email}]});

    if(exitedUser){
        throw new ApiError(409, "User already exist");
    }


    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImagePath = req.files?.coverImage[0]?.path;


    if(!avatarLocalPath || !coveImagePath){
        throw new ApiError(400, "Please upload image");
    }

   const avatar = await UploadOncloudinary(avatarLocalPath);
    const coverImage = await UploadOncloudinary(coverImagePath);


    if(!avatar ){
        throw new ApiError(500, "Image upload failed");
    }


    const user = await  User.create({
        fullName,
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        userName : userName.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering user");
    }


    return res.status(201).json(
        new ApiResponce(201, "User registered successfully", createdUser)
    );




  });


export {userRegister}