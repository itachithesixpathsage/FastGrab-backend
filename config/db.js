import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://fastgrab_user_one:NZMKgSX7FsS2PfLf@cluster0.owirn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB Connected"));
}