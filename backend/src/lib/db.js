import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("failed to connect database", error);
  }
};

export default connectDB;
