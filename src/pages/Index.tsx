import { Dashboard } from "@/components/dashboard/Dashboard";
import { UserManagementSection } from "@/components/sections/UserManagementSection";
import { JobTitleSection } from "@/components/sections/JobTitleSection";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { GeofenceSection } from "@/components/sections/GeofenceSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { TaskSection } from "@/components/sections/TaskSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { MonitoringSection } from "@/components/sections/MonitoringSection";
import { NotificationsSection } from "@/components/sections/NotificationsSection";
import { JSASection } from "@/components/sections/JSASection";
import { useState, useEffect } from "react";

const Index = () => {
  const [section, setSection] = useState("dashboard");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sectionParam = params.get("section");
    if (sectionParam) {
      setSection(sectionParam);
    }
  }, []);

  const renderSection = () => {
    switch (section) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <UserManagementSection />;
      case "job-titles":
        return <JobTitleSection />;
      case "equipment":
        return <EquipmentSection />;
      case "geofence":
        return <GeofenceSection />;
      case "analytics":
        return <AnalyticsSection />;
      case "tasks":
        return <TaskSection />;
      case "security":
        return <SecuritySection />;
      case "integrations":
        return <IntegrationSection />;
      case "monitoring":
        return <MonitoringSection />;
      case "notifications":
        return <NotificationsSection />;
      case "jsa":
        return <JSASection />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold tracking-tight">
              Section not found
            </h1>
          </div>
        );
    }
  };

  return renderSection();
};

export default Index;