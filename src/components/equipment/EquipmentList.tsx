import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { User } from "lucide-react";
import { toast } from "sonner";
import { EquipmentStatusBadge } from "./EquipmentStatusBadge";
import { EquipmentActions } from "./EquipmentActions";

interface Equipment {
  id: string;
  name: string;
  type: string;
  status: "operational" | "maintenance" | "out-of-service";
  lastMaintenance: string;
  nextMaintenance: string;
  location: string;
  assignedTo?: {
    id: string;
    name: string;
  };
}

export const EquipmentList = () => {
  const [equipment] = useState<Equipment[]>([
    {
      id: "1",
      name: "Excavator XC-200",
      type: "Heavy Equipment",
      status: "operational",
      lastMaintenance: "2024-01-15",
      nextMaintenance: "2024-02-15",
      location: "Site A",
      assignedTo: { id: "1", name: "John Doe" }
    },
    {
      id: "2",
      name: "Bulldozer BD-100",
      type: "Heavy Equipment",
      status: "maintenance",
      lastMaintenance: "2024-01-10",
      nextMaintenance: "2024-02-10",
      location: "Maintenance Bay"
    },
    {
      id: "3",
      name: "Crane CR-300",
      type: "Heavy Equipment",
      status: "out-of-service",
      lastMaintenance: "2024-01-05",
      nextMaintenance: "2024-02-05",
      location: "Site B"
    }
  ]);

  const handleDelete = (id: string) => {
    console.log("Deleting equipment:", id);
    toast.success("Equipment deleted successfully");
  };

  const handleAssign = (equipmentId: string, userId: string) => {
    console.log("Assigning equipment:", equipmentId, "to user:", userId);
    toast.success("Equipment assigned successfully");
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Maintenance</TableHead>
            <TableHead>Next Maintenance</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {equipment.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <EquipmentStatusBadge status={item.status} />
              </TableCell>
              <TableCell>{item.lastMaintenance}</TableCell>
              <TableCell>{item.nextMaintenance}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>
                {item.assignedTo ? (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{item.assignedTo.name}</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground">Unassigned</span>
                )}
              </TableCell>
              <TableCell>
                <EquipmentActions
                  equipmentId={item.id}
                  equipmentName={item.name}
                  onDelete={handleDelete}
                  onAssign={handleAssign}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};