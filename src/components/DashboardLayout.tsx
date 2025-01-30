import { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { SidebarNav } from "./dashboard/SidebarNav";
import { DashboardHeader } from "./dashboard/DashboardHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Add actual logout logic here when authentication is implemented
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 transform bg-primary transition-transform duration-200 ease-in-out",
          !sidebarOpen && "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-primary/20 px-4">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/32095b6c-4dea-4566-b8ed-98fbaad0a5dd.png" alt="STX Underground" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-white">STX Underground</span>
          </div>
        </div>
        <SidebarNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </aside>

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-200 ease-in-out",
          sidebarOpen ? "pl-64" : "pl-0"
        )}
      >
        <DashboardHeader 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          handleLogout={handleLogout}
        />

        {/* Page Content */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
}