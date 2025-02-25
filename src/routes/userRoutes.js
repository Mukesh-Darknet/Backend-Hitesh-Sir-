import {Router} from 'express';
import { userRegister } from '../controller/usserControler.js';

const router = Router();


router.route("/register").post(userRegister);


 
export {router};