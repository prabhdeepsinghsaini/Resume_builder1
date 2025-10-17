import express from 'express';
import { registerUser , loginUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// Protected route to get user profile
// This route requires authentication
userRouter.get('/profile', protect, getUserProfile);

export default userRouter