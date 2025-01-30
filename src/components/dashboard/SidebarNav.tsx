import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    id: string;
    label: string;
  }[];
  setSection: (section: string) => void;
  section: string;
}

export function SidebarNav({ className, items, setSection, section, ...props }: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {[
        { id: "dashboard", label: "Dashboard" },
        { id: "users", label: "User Management" },
        { id: "job-titles", label: "Job Titles" },
        { id: "equipment", label: "Equipment Management" },
        { id: "geofence", label: "Geofence Management" },
        { id: "analytics", label: "Analytics & Reports" },
        { id: "tasks", label: "Task & Schedule Mgmt" },
        { id: "jsa", label: "JSA Checklists" },
        { id: "notifications", label: "Notifications" },
        { id: "security", label: "Security & Compliance" },
        { id: "integrations", label: "Integrations" },
        { id: "monitoring", label: "Monitoring & Support" },
      ].map((item) => (
        <Button
          key={item.id}
          onClick={() => setSection(item.id)}
          variant={section === item.id ? "secondary" : "ghost"}
          className="w-full justify-start"
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}