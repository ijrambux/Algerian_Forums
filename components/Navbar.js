// components/Navbar.js
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* اسم المنتدى يلمع */}
      <h1 className="text-xl font-bold text-blue-400 animate-glow">Algerian_Forums</h1>

      {/* روابط التنقل */}
      <div className="space-x-4">
        <Link href="/feed" className="hover:text-blue-300">Feed</Link>
        <Link href="/terms" className="hover:text-blue-300">Terms</Link>
        <Link href="/register" className="hover:text-blue-300">Register</Link>
      </div>
    </nav>
  );
}
