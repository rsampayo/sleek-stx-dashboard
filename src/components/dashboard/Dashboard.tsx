import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Add actual logout logic here when authentication is implemented
    navigate("/login");
  };

  return (
    <div className="space-y-6">
      <DashboardHeader 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        handleLogout={handleLogout}
      />
      <DashboardContent />
    </div>
  );
};