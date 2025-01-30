import { TaskList } from "@/components/dashboard/TaskList";
import { WeeklyAnalytics } from "@/components/dashboard/WeeklyAnalytics";
import { EquipmentStatus } from "@/components/dashboard/EquipmentStatus";
import { ImageGallery } from "@/components/dashboard/ImageGallery";
import { RoleAdministration } from "@/components/dashboard/RoleAdministration";

export const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <TaskList />
        <WeeklyAnalytics />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <EquipmentStatus />
        <ImageGallery />
      </div>
      <div className="grid gap-4">
        <RoleAdministration />
      </div>
    </div>
  );
};