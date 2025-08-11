"use client";

import Link from "next/link";
import styles from "./Register.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const name = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account created successfully");
      } else {
        const data = await res.json();
        setError(data.message || "Registration failed. Try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlesubmit} noValidate>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className={styles.input}
          required
          aria-label="Username"
          autoComplete="username"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          required
          aria-label="Email"
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          required
          aria-label="Password"
          autoComplete="new-password"
        />
        <button className={styles.button} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        {error && <div className={styles.error}>{error}</div>}
      </form>
      <Link href="/dashboard/login" className={styles.link}>
        Login with existing credentials
      </Link>
    </div>
  );
};

export default Register;
