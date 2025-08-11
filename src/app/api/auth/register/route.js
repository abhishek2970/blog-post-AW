// src/app/api/auth/register/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connect from "@/utils/db"; // ✅ this is correct
import User from "@/models/User";  // ✅ make sure this file exists and exports a Mongoose model

export async function POST(request) {
    try {
        const { username, email, password } = await request.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        await connect();
        await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
