import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "userManagement", label: "User Management" },
    { id: "equipment", label: "Equipment & Fleet" },
    { id: "geofence", label: "Geofence Management" },
    { id: "analytics", label: "Analytics & Reports" },
    { id: "tasks", label: "Task & Schedule Mgmt" },
    { id: "security", label: "Security & Compliance" },
    { id: "integrations", label: "Integrations" },
    { id: "monitoring", label: "Monitoring & Support" },
  ];

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
        <nav className="space-y-1 px-2 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                const event = new CustomEvent('sectionChange', { 
                  detail: { section: item.id }
                });
                window.dispatchEvent(event);
              }}
              className={cn(
                "flex w-full items-center rounded-md px-4 py-2 text-sm text-white transition-all duration-200 ease-in-out",
                activeItem === item.id 
                  ? "bg-accent text-accent-foreground font-medium" 
                  : "hover:bg-primary/80 hover:translate-x-1"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-200 ease-in-out",
          sidebarOpen ? "pl-64" : "pl-0"
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-md p-2 hover:bg-primary/10 transition-colors duration-200"
          >
            {sidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, Admin
            </span>
            <button 
              onClick={handleLogout}
              className="rounded-md bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
}