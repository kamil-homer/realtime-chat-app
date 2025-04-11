import Link from "next/link";

export default function Sidebar() {
  const chats = [
    { id: "1", name: "Conversation #1" },
    { id: "2", name: "Conversation #2" },
    { id: "3", name: "Conversation #3" },
  ];
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 flex items-center justify-between">
        <p className="text-xl font-bold">@username</p>
        <button className="m-0 px-2 py-1 bg-gray-600 rounded">Logout</button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {chats.map((chat) => (
            <li key={chat.id}>
              <Link
                href={`/chat/${chat.id}`}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                {chat.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
