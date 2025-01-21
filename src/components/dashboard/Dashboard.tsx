import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
};