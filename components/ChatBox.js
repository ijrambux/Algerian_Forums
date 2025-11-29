// components/ChatBox.js
"use client";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // استماع مباشر لرسائل الدردشة من Firebase
    const q = query(collection(db, "chat"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (!newMessage) return;
    await addDoc(collection(db, "chat"), {
      text: newMessage,
      createdAt: serverTimestamp()
    });
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-96">
      {/* عرض الرسائل */}
      <div className="flex-1 overflow-y-auto mb-2">
        {messages.map(msg => (
          <div key={msg.id} className="mb-1 p-2 bg-gray-700 rounded">{msg.text}</div>
        ))}
      </div>

      {/* صندوق الإدخال */}
      <div className="flex">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 rounded-l bg-gray-700 text-white"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
