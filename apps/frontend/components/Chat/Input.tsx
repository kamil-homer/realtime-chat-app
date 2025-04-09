"use client";
export default function Input() {
  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <input
        type="text"
        placeholder="Type your message..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
    </div>
  );
}
