<<<<<<< HEAD
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';


export const protect = async (req, res, next) => {
    try {
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer ')
        ) {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            return next();
        } else {
            return res.status(401).json({ message: 'Not authorized, token missing or malformed' });
        }
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
=======
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';


export const protect = async (req, res, next) => {
    try {
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer ')
        ) {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            return next();
        } else {
            return res.status(401).json({ message: 'Not authorized, token missing or malformed' });
        }
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
}