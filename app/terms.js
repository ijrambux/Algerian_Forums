// app/terms.js
"use client";
import { useRouter } from "next/navigation";

export default function Terms() {
  const router = useRouter();

  const handleAccept = () => {
    // تخزين موافقة المستخدم في localStorage
    localStorage.setItem("acceptedTerms", "true");
    router.push("/register");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
      <div className="bg-gray-800 p-6 rounded-lg max-w-2xl text-gray-300 mb-6 overflow-y-auto max-h-96">
        <p>
          Welcome to Algerian_Forums! By accessing this forum, you agree to follow all rules
          and respect other members. Do not post illegal content or spam. 
          The forum is intended for community discussion only. 
        </p>
        <p className="mt-4">
          Your account requires two passwords for security. Keep them safe.
          All content is moderated and inappropriate content may be removed.
        </p>
      </div>
      <button
        onClick={handleAccept}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
      >
        I Accept
      </button>
    </div>
  );
}
