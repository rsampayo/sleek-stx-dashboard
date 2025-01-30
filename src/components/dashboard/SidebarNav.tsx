import { cn } from "@/lib/utils";

interface SidebarNavProps {
  activeItem: string;
  setActiveItem: (id: string) => void;
}

export function SidebarNav({ activeItem, setActiveItem }: SidebarNavProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "userManagement", label: "User Management" },
    { id: "equipment", label: "Equipment & Fleet" },
    { id: "geofence", label: "Jobsite Management" },
    { id: "analytics", label: "Analytics & Reports" },
    { id: "tasks", label: "Task & Schedule Mgmt" },
    { id: "jsa", label: "JSA Checklists" },
    { id: "notifications", label: "Notifications" },
    { id: "integrations", label: "Integrations" },
    { id: "roleAdmin", label: "Role Administration" },
  ];

  return (
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
  );
}