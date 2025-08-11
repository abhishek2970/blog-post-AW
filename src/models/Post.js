// src/models/Post.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    username: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

// Fix for redefinition on hot reloads
export default mongoose.models.Post || mongoose.model("Post", postSchema);
