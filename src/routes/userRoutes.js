import {Router} from 'express';
import { userRegister } from '../controller/usserControler.js';
import {upload} from '../middleware/multer.js';

const router = Router();


router.route("/register").post(
  upload.field([
    {
      name:"avatar",
      maxCount:1
    },
    {
      name:"coverPhoto",
      maxCount:1
    }

  ]),
  userRegister);


 
export {router};