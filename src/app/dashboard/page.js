"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import dummy from "@/images/dummy-image.jpg";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Loading session...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <p className="text-xl">You must be logged in to view the dashboard.</p>
        <button
          onClick={() => signIn()}
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Sign In
        </button>
      </div>
    );
  }

  const dummyPost = {
    title: "Exploring the Power of Simplicity in Design",
    image: dummy,
    description:
      "Simplicity is the ultimate sophistication. In this post, we explore how minimalistic design leads to better user experiences and improved clarity.",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Welcome, {session.user.name || session.user.email}!
        </h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Sign Out
        </button>
      </div>

      {/* Dummy Post */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">{dummyPost.title}</h2>
        <div className="flex justify-center mb-4">
          <Image
            src={dummyPost.image}
            alt="Post image"
            width={600}
            height={300}
            className="object-cover rounded"
            priority
          />
        </div>
        <p className="text-gray-700">{dummyPost.description}</p>
      </div>
    </div>
  );
};

export default Dashboard;
