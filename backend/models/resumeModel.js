<<<<<<< HEAD
import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        reqired: true
    },
    title:{
        type: String,
        required: true
    },
    thumbnailLink:{
        type: String
    },
    template:{
        theme: String,
        colorPalette: [String]
    },

    profileInfo:{
        profiltePreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String,
    },

    contactInfo:{
        email: String,
        phone: String,
        location: String,
        linkedin: String,
        github: String,
        website: String,
    },

    workExperience:[
        {
            company: String,
            role: String,
            startDate: String,
            endDate: String,
            description: String,
        },
    ],
    education: [
        {
            degree: String,
            institution: String,
            startDate: String,
            endDate: String,
        }
    ],

    skills:[
        {
            name: String,
            progress: String,
        },
    ],

    projects:[
        {
            title: String,
            desription: String,
            github: String,
            liveDemo: String,
        },
    ],

    certifications: [
        {
            title: String,
            issuser: String,
            year: String,
        },
    ],

    languages:[
        {
            name: String,
            progress: Number,
        },
    ],

    interests : [String],
  },{
    timestamps:{createdAt:"createAt" , updatedAt: "updatedAt"}
  });

=======
import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        reqired: true
    },
    title:{
        type: String,
        required: true
    },
    thumbnailLink:{
        type: String
    },
    template:{
        theme: String,
        colorPalette: [String]
    },

    profileInfo:{
        profiltePreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String,
    },

    contactInfo:{
        email: String,
        phone: String,
        location: String,
        linkedin: String,
        github: String,
        website: String,
    },

    workExperience:[
        {
            company: String,
            role: String,
            startDate: String,
            endDate: String,
            description: String,
        },
    ],
    education: [
        {
            degree: String,
            institution: String,
            startDate: String,
            endDate: String,
        }
    ],

    skills:[
        {
            name: String,
            progress: String,
        },
    ],

    projects:[
        {
            title: String,
            desription: String,
            github: String,
            liveDemo: String,
        },
    ],

    certifications: [
        {
            title: String,
            issuser: String,
            year: String,
        },
    ],

    languages:[
        {
            name: String,
            progress: Number,
        },
    ],

    interests : [String],
  },{
    timestamps:{createdAt:"createAt" , updatedAt: "updatedAt"}
  });

>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
  export default mongoose.model("Resume",ResumeSchema)