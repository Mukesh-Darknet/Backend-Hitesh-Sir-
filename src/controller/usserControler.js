import {asynHandler} from './../utiles/asyncHandler.js'

const userRegister = asynHandler(async (req, res) => {
    res.status(200).json({
    message:"User Registered Successfully"
  });
});

export {userRegister}