import { Menu, X } from "lucide-react";
import { NotificationBell } from "./NotificationBell";

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  handleLogout: () => void;
}

export function DashboardHeader({ sidebarOpen, setSidebarOpen, handleLogout }: DashboardHeaderProps) {
  return (
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
        <NotificationBell />
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
  );
}