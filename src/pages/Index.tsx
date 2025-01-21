import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";

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

  const users = [
    { id: "U1001", name: "Jane Doe", role: "Manager", status: "Active" },
    { id: "U1002", name: "John Smith", role: "Employee", status: "Active" },
    { id: "U1003", name: "Anna Lee", role: "Employee", status: "Inactive" },
  ];

  const equipment = [
    { id: "EQ-1001", name: "Truck A", maintenance: "2025-02-10", status: "Requires Service" },
    { id: "EQ-1002", name: "Loader #1", maintenance: "2025-03-01", status: "OK" },
    { id: "EQ-1003", name: "Forklift B", maintenance: "2025-01-25", status: "Overdue" },
  ];

  const geofences = [
    { id: "GF-001", name: "Project X Site", radius: 300 },
    { id: "GF-002", name: "Warehouse A", radius: 150 },
  ];

  const tasks = [
    { id: "T-001", name: "Oil Change Truck A", assignedTo: "John Smith", deadline: "2025-01-30", status: "In Progress" },
    { id: "T-002", name: "Cleanup Loader #1", assignedTo: "Anna Lee", deadline: "2025-02-02", status: "Not Started" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return (
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
        );

      case "userManagement":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
              <p className="text-muted-foreground">
                Create, read, update, and delete user profiles. Assign roles and permissions.
              </p>
            </div>

            <div className="flex gap-4 mb-6">
              <Input placeholder="Search users..." className="max-w-sm" />
              <Button>Search</Button>
              <Button variant="secondary">Add New User</Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">
                          {user.status === "Active" ? "Deactivate" : "Activate"}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );

      case "equipment":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Equipment & Fleet Management</h1>
              <p className="text-muted-foreground">
                Maintain a master list of equipment and vehicles, track maintenance schedules, and set alert thresholds.
              </p>
            </div>

            <Button className="mb-6">Add New Equipment</Button>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment ID</TableHead>
                  <TableHead>Name/Model</TableHead>
                  <TableHead>Maintenance Due</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipment.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.maintenance}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );

      case "geofence":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Geofence Management</h1>
              <p className="text-muted-foreground">
                Define and manage geofenced zones for each project or location.
              </p>
            </div>

            <Button className="mb-6">Add New Geofence</Button>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Geofence ID</TableHead>
                  <TableHead>Location Name</TableHead>
                  <TableHead>Radius (m)</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {geofences.map((geofence) => (
                  <TableRow key={geofence.id}>
                    <TableCell>{geofence.id}</TableCell>
                    <TableCell>{geofence.name}</TableCell>
                    <TableCell>{geofence.radius}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );

      case "analytics":
        return <AnalyticsSection />;

      case "tasks":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Task & Schedule Management</h1>
              <p className="text-muted-foreground">
                Assign tasks to teams or individuals, set deadlines, and integrate with calendar systems.
              </p>
            </div>

            <Button className="mb-6">Create New Task</Button>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task ID</TableHead>
                  <TableHead>Task Name</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.id}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.assignedTo}</TableCell>
                    <TableCell>{task.deadline}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );

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
