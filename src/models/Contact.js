import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be at least 2 characters."],
    maxLength: [50, "Name must be less than 50 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [
      /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Please enter a valid email address",
    ],
  },
  message: {
    type: String,
    required: [true, "Message is required."],
    minLength: [5, "Message must be at least 5 characters."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
