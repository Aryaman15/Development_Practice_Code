const Site=require("../modules/SocialSite")

exports.getSite=async(req,res)=>{
    try{
        const sitesdata=await Site.find({});

        res.status(200).json(
            {
                sucess:true,
                data:sitesdata,
                message:"ENTIRE DATA IS FETCHED"
            }
        );
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                sucess:false,
                error:err.message,
                message:"SHIT ! SERVER CRASHED", 
            }
        );
    }
}