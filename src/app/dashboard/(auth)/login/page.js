"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signIn("google");
      // signIn usually redirects, so no further UI update needed here
    } catch (err) {
      console.error("Error signing in", err);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Sign in with Google"
      >
        {/* Optionally add a Google icon SVG here */}
        {loading ? "Signing in..." : "Login with Google"}
      </button>
    </div>
  );
};

export default Login;
