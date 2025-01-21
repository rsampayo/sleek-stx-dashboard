import { DashboardLayout } from "@/components/DashboardLayout";
import { Activity, Box, Users, Clock } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { WeeklyAnalytics } from "@/components/dashboard/WeeklyAnalytics";
import { EquipmentStatus } from "@/components/dashboard/EquipmentStatus";
import { useState, useEffect } from "react";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { GeofenceSection } from "@/components/sections/GeofenceSection";

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

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Track your tasks and equipment status
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Active Tasks"
          value="24"
          change="+12%"
          Icon={Activity}
        />
        <StatsCard
          title="Equipment Status"
          value="92%"
          change="+3%"
          Icon={Box}
        />
        <StatsCard
          title="Team Members"
          value="12"
          change="0%"
          Icon={Users}
        />
        <StatsCard
          title="Hours Tracked"
          value="164"
          change="+8%"
          Icon={Clock}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TaskList />
        <WeeklyAnalytics />
      </div>

      <EquipmentStatus />
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "analytics":
        return <AnalyticsSection />;
      case "geofence":
        return <GeofenceSection />;
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