import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

//FILE FILTER
const fileFilter = (req,file,cb) =>{
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (allowedTypes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(new Error("Only .png, .jpg and .jpeg format allowed!"), false);
    }
}

const upload = multer({ storage, fileFilter });
export default upload;