import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const env = process.env.NODE_ENV === "production";
  const db = process.env.MONGODB_URI as string;
  try {
    await mongoose.connect(db);
    if (env) {
      return;
    }
    console.log("Connected to MONGODB");
  } catch (error) {
    if (env) {
      return;
    }
    console.log("Error connecting to database", error);
  }
};
