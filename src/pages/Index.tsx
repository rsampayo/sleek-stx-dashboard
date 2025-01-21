import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";

const Index = () => {
  const stats = [
    {
      title: "Active Users",
      value: "42",
      label: "online",
      detail: "Most Active: Project X (8 users)",
    },
    {
      title: "Equipment Alerts",
      value: "3",
      label: "maintenance due",
      detail: "1 critical alert",
    },
    {
      title: "Tasks",
      value: "15",
      label: "open",
      detail: "2 overdue",
    },
    {
      title: "Geofence Compliance",
      value: "27",
      label: "clock-ins today",
      detail: "2 outside attempts",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Monitor your system's status and key metrics at a glance.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </h3>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;