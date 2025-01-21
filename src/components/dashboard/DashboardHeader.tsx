import { Activity, Box, Users, Clock } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";

export const DashboardHeader = () => {
  return (
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
    </div>
  );
};