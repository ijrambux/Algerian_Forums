// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// إعدادات Firebase الخاصة بمشروعك
const firebaseConfig = {
  apiKey: "AIzaSyA-rmE2vG4PGKDBvGHaqVCKZOtNzg4YK_c",
  authDomain: "algerianforums.firebaseapp.com",
  projectId: "algerianforums",
  storageBucket: "algerianforums.firebasestorage.app",
  messagingSenderId: "115599444032",
  appId: "1:115599444032:web:960b00064c64943fa477a5",
  measurementId: "G-TZ9ZY8XCV3"
};

// تأكد أن Firebase لا يتم تهيئته أكثر من مرة داخل Next.js
const app = initializeApp(firebaseConfig);

// تصدير الخدمات التي تحتاجها
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
