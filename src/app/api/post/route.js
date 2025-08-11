// src/app/api/post/route.js
import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    
    await connect();
    

    const posts = await Post.find();
    console.log("Fetched posts:", posts);

    return NextResponse.json(JSON.stringify(posts), { status: 200 }); // ✅ Correct response
  } catch (err) {
    console.error("Error fetching posts:", err);
    return new NextResponse("Database error", { status: 500 });
  }
};
