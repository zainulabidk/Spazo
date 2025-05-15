import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Navbar from '../../../components/common/Navbar/Navbar'
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  // const users=[

  // ]

  const handleLogin = () => {
    login({ name: "Zain Mp" });
    navigate("/dashboard");
  };

  const handleSIgnup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Navbar />

      <div className="p-10">


        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          
        </form>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Login
        </button>

        <p className="text-red-500">
          Create Account{' '}
          <span
            onClick={handleSIgnup}
            className="text-blue-500 cursor-pointer underline"
          >
            Signup
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
