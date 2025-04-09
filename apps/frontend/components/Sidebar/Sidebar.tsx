export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 flex items-center justify-between">
        <p className="text-xl font-bold">@username</p>
        <button className="m-0 px-2 py-1 bg-gray-600 rounded">Logout</button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Conversation #1
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Conversation #2
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Conversation #3
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Conversation #4
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
