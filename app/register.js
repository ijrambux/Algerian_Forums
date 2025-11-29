// app/register.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!email || !password1 || !password2) {
      setError("Please fill all fields");
      return;
    }
    if (password1 !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password1);
      // حفظ كلمة السر الثانية محليًا أو في Firestore (تشفير لاحقاً)
      localStorage.setItem("secondaryPassword", password2);
      router.push("/feed");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h2 className="text-3xl font-bold mb-6">Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-3 rounded-lg bg-gray-800 w-full max-w-md"
      />
      <input
        type="password"
        placeholder="Password 1"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
        className="mb-4 p-3 rounded-lg bg-gray-800 w-full max-w-md"
      />
      <input
        type="password"
        placeholder="Password 2 (Secondary)"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        className="mb-4 p-3 rounded-lg bg-gray-800 w-full max-w-md"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleRegister}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
      >
        Register
      </button>
    </div>
  );
}
