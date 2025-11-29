// app/feed.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Feed() {
  const router = useRouter();

  useEffect(() => {
    const accepted = localStorage.getItem("acceptedTerms");
    if (!accepted) {
      router.push("/terms");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-3xl font-bold mb-6">Welcome to Algerian_Forums Feed</h2>
      <p>All topics will appear here in a single page.</p>
      <p>Derdasha / Group Chat coming next.</p>
    </div>
  );
}
