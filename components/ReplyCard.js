// components/ReplyCard.js

export default function ReplyCard({ text }) {
  return (
    <div className="p-2 mb-1 bg-gray-700 rounded hover:bg-gray-600 transition">
      {text}
    </div>
  );
}
