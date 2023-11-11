const File=require("../modules/File");

//localfiletempload=> header function

exports.localFileUpload=async(req,res)=>{
    try{
        //fetch file
        const file=req.files.file;
        console.log("File Aagayi Hai=>",file);
    }
    catch(error){

    }
}