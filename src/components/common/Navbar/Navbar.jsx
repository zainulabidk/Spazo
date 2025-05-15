import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLoginPage = () => {
        navigate("/login");
    };
    return (
        <div>

            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600 ">Logo</div>
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                         <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                        <li><Link to="/" className="hover:text-blue-500">About</Link></li>
                        <li><Link to="/" className="hover:text-blue-500">Blog</Link></li>
                        <li><Link to="/" className="hover:text-blue-500">Contact</Link></li>
                    </ul>

                    <ul>
                        {/* <li>Login</li> */}
                        <button
                            onClick={handleLoginPage}
                            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                        >
                            Login
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar