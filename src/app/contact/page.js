"use client";

import { useState } from "react";
import Image from "next/image";
import contactus from "@/images/contactus.jpg";
import Button from "@/components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ error: null, success: null, loading: false });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: null, success: null, loading: true });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ error: data.error || "Submission failed", success: null, loading: false });
      } else {
        setStatus({ error: null, success: data.message, loading: false });
        setFormData({ fullname: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus({ error: "Network error. Please try again.", success: null, loading: false });
    }
  };

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10 font-serif">Let&apos;s Keep In Touch</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden md:w-1/2">
          <Image
            src={contactus}
            alt="Contact us"
            width={600}
            height={300}
            
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover animate-move"
            priority
          />
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4" noValidate>
          <input
            type="text"
            name="fullname"
            placeholder="Your Name"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-300 resize-none"
          />

          <Button type="submit" disabled={status.loading} text={status.loading ? "Sending..." : "Send"} />

          {status.error && <p className="text-red-600 mt-2">{status.error}</p>}
          {status.success && <p className="text-green-600 mt-2">{status.success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
