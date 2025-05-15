import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white h-full p-4">
    <h2 className="text-xl font-bold mb-4">MyApp</h2>
    <nav className="flex flex-col gap-2">
      <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Home</Link>
      <Link to="/dashboard/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
      <Link to="/dashboard/profile" className="hover:bg-gray-700 p-2 rounded">Profile</Link>

    </nav>
  </div>
);

export default Sidebar;
