import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

const DashboardLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout;
