import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Dashboard/Home";
import Profile from '../pages/Dashboard/Profile';
import Settings from "../pages/Dashboard/Settings";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Home />} />
      <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile/>} />

    </Route>
  </Routes>
);

export default AppRoutes;
