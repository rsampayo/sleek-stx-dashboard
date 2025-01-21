import { TaskList } from "@/components/dashboard/TaskList";
import { WeeklyAnalytics } from "@/components/dashboard/WeeklyAnalytics";
import { EquipmentStatus } from "@/components/dashboard/EquipmentStatus";

export const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <TaskList />
        <WeeklyAnalytics />
      </div>
      <EquipmentStatus />
    </div>
  );
};