import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contact from "@/models/Contact";

export const POST = async (request) => {
  try {
    const { fullname, email, message } = await request.json();

    // Basic validation
    if (!fullname || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await connect();

    const newContact = new Contact({ fullname, email, message });
    await newContact.save();

    return NextResponse.json(
      { message: "Thank you for contacting us! We will get back to you shortly." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to submit the form. Please try again later." },
      { status: 500 }
    );
  }
};
