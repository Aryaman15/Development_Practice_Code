const Site=require("../modules/SocialSite")
exports.Likes=async(req,res)=>{
    try{
        const { id } = req.params;
        const likedata = await Site.findById({_id:id}).select("user likes unlikes")
        res.status(200).json(
            {
                sucess:true,
                data:likedata,
                message:"DATA EXTRACTION SUCESS"
            }
        )
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            sucess:false,
            error:err.message,
            message:"SERVER ERROR AYEGA TO AYEGA"
        })
    }
}