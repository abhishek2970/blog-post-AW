// src/utils/db.js
import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://abhishekw836:abhishekw836@cluster0.ssayjqh.mongodb.net/');
      
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("failed connection");
  }
};

export default connect;
