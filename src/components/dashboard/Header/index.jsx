import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <div>Welcome, {user?.name}</div>
      <button onClick={handleLogout} className="text-red-600">Logout</button>
    </header>
  );
};

export default Header;
