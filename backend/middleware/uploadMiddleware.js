<<<<<<< HEAD
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
=======
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
>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
export default upload;