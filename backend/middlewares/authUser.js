import jwt from "jsonwebtoken"

//get toke from header
//if token not available show message
//if available then decode it
//compare token email and password with admin
//if match then next() otherwise success:false

const authUser = async (req,res,next)=>{
   

    try {
        const {token} = req.headers;

        if(!token){
           res.json({success:false,message:"Not Authorized Login Again"})
        }

        const token_decode= jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id
 

        next();
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}



export default authUser