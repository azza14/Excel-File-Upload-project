const multer= require('multer');

const excelFilter= (req,file, cb)=>{
    if (
        file.mimetype.includes("excel") ||
        file.mimetype.includes('spreadsheetml')
    ) { 
        cb(null,true)
    } else {
        console.log(file);
       cb('please upload only excel file', false);        
    }
};
let storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, __basedir + "/resources/static/assets/uploads/");
    },
    filename:(req,file,cb)=>{
        console.log( 'file originalname  '+ file.originalname);
        console.log('test')
      //  cb(null, `${Date.now()}-azza-${file.originalname}`);
        //cb(null, Date.now() + 'azza'  + file.originalname);
        cb(null, file.originalname);
    }
});
var uploadFile= multer({
    storage:storage,
   fileFilter:excelFilter

});//.single('file');
module.exports= uploadFile;