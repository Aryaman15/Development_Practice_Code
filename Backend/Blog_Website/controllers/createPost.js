const Site=require("../modules/SocialSite")
exports.createPost=async(req,res)=>{
    try{
        //these user, likes should match with the schema titles name
        const{user,likes,unlikes,comments}=req.body;
        const create= await Site.create({user,likes,unlikes,comments});
        res.status(200).json(
            {
                success:true,
                data:create,
                message:"DATA SUCCESSFULLY CREATED"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                sucess:false,
                data:"SERVER WORKING FAILED",
                message:err.message,
            }
        )
    }
}