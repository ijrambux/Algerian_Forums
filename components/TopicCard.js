// components/TopicCard.js

export default function TopicCard({ title }) {
  return (
    <div className="p-3 mb-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
      {title}
    </div>
  );
}
