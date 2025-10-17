import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pratham4112004:PxTfKSggMK6wLLHJ@cluster0.mdooy3t.mongodb.net/Resume')
        .then(() => console.log("MongoDB connected successfully"))
}