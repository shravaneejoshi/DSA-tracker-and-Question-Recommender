import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/QuestionDB");
        console.log("connecting to DB successfully");

    } catch (error) {
        console.log("error connecting to DB",error);
        process.exit(1);  // exit  with failure
    }

}