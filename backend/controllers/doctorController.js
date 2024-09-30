import doctorModel from '../models/doctorModel.js'

const changeAvailablity = async(req,res)=>{
    try {
        
        const {docId} = req.body
         

        const doctData = await doctorModel.findById(docId);
        console.log(doctData)
        await doctorModel.findByIdAndUpdate(docId,{
            available:!doctData.available})
        res.json({success:true,message:'Availablity Changed'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
        
    }
}

export {changeAvailablity};