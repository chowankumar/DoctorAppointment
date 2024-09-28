import express from "express"
import {addDoctor,loginAdmin,allDoctors} from './../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin  from "../middlewares/authAdmin.js"
import { changeAvailablity } from "../controllers/doctorController.js"

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin, upload.single('image'),addDoctor);
adminRouter.post('/login-admin',loginAdmin);
adminRouter.post('/all-doctors',authAdmin,allDoctors);
adminRouter.post('/change-availability',authAdmin,changeAvailablity)

export default adminRouter