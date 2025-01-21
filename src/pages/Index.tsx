import { DashboardLayout } from "@/components/DashboardLayout";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { GeofenceSection } from "@/components/sections/GeofenceSection";
import { UserManagementSection } from "@/components/sections/UserManagementSection";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { TaskSection } from "@/components/sections/TaskSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { MonitoringSection } from "@/components/sections/MonitoringSection";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent<{ section: string }>) => {
      setActiveSection(event.detail.section);
    };

    window.addEventListener('sectionChange', handleSectionChange as EventListener);

    return () => {
      window.removeEventListener('sectionChange', handleSectionChange as EventListener);
    };
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "analytics":
        return <AnalyticsSection />;
      case "geofence":
        return <GeofenceSection />;
      case "userManagement":
        return <UserManagementSection />;
      case "equipment":
        return <EquipmentSection />;
      case "tasks":
        return <TaskSection />;
      case "security":
        return <SecuritySection />;
      case "integrations":
        return <IntegrationSection />;
      case "monitoring":
        return <MonitoringSection />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{activeSection}</h1>
            <p className="text-muted-foreground">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      {renderSection()}
    </DashboardLayout>
  );
};

export default Index;