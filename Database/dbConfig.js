import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongooseDb Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;