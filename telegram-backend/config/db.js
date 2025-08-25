import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to mongoDB", error);
    process.exit(1);
  }
};
export default connectDb;
