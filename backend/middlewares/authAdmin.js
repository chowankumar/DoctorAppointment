import jwt from "jsonwebtoken"

//get toke from header
//if token not available show message
//if available then decode it
//compare token email and password with admin
//if match then next() otherwise success:false

const authAdmin = async (req,res,next)=>{
   

    try {
        const {aToken} = req.headers;

        if(!aToken){
           res.json({success:false,message:"Not Authorized Login Again"})
        }

        const token_decode= jwt.verify(aToken,process.env.JWT_SECRET);

        if(token_decode !== process.env.ADMIN_EMAIL+ process.env.ADMIN_PASSWORD){
            res.json({success:false,message:"Not Authorized Login Again"})
        }

        next();
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}



export default authAdmin