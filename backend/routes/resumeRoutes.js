<<<<<<< HEAD
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createResume, getUserResumes , getResumeById, updateResume, deleteResume  } from '../controllers/resumeController.js';
import { uploadResumeImages } from '../controllers/uploadImages.js';



const resumeRouter = express.Router();

resumeRouter.post('/', protect, createResume)
resumeRouter.get('/',protect , getUserResumes )
resumeRouter.get('/:id', protect, getResumeById);
resumeRouter.put('/:id', protect, updateResume);
resumeRouter.put('/:id/upload-images', protect, uploadResumeImages);

resumeRouter.delete('/:id', protect, deleteResume);

=======
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createResume, getUserResumes , getResumeById, updateResume, deleteResume  } from '../controllers/resumeController.js';
import { uploadResumeImages } from '../controllers/uploadImages.js';



const resumeRouter = express.Router();

resumeRouter.post('/', protect, createResume)
resumeRouter.get('/',protect , getUserResumes )
resumeRouter.get('/:id', protect, getResumeById);
resumeRouter.put('/:id', protect, updateResume);
resumeRouter.put('/:id/upload-images', protect, uploadResumeImages);

resumeRouter.delete('/:id', protect, deleteResume);

>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
export default resumeRouter;