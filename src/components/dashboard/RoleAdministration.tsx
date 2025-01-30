import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Edit2, Save } from "lucide-react";
import { toast } from "sonner";

interface RoleStandard {
  role: string;
  standardHours: number;
  overtimeLimit: number;
  hourlyRate: number;
  overtimeRate: number;
}

const initialStandards: RoleStandard[] = [
  {
    role: "Operator",
    standardHours: 8,
    overtimeLimit: 12,
    hourlyRate: 25,
    overtimeRate: 37.5,
  },
  {
    role: "Supervisor",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 35,
    overtimeRate: 52.5,
  },
  {
    role: "Manager",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 45,
    overtimeRate: 67.5,
  },
];

export function RoleAdministration() {
  const [standards, setStandards] = useState<RoleStandard[]>(initialStandards);
  const [editingRole, setEditingRole] = useState<string | null>(null);
  const [editedValues, setEditedValues] = useState<RoleStandard | null>(null);

  const handleEdit = (role: RoleStandard) => {
    setEditingRole(role.role);
    setEditedValues(role);
  };

  const handleSave = (role: string) => {
    if (editedValues) {
      setStandards(standards.map((s) => (s.role === role ? editedValues : s)));
      setEditingRole(null);
      setEditedValues(null);
      toast.success("Role standards updated successfully");
    }
  };

  const handleInputChange = (
    field: keyof RoleStandard,
    value: string,
    role: string
  ) => {
    if (editedValues) {
      setEditedValues({
        ...editedValues,
        [field]: field === "role" ? value : Number(value),
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Role Standards Administration</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role</TableHead>
              <TableHead>Standard Hours</TableHead>
              <TableHead>Overtime Limit</TableHead>
              <TableHead>Hourly Rate ($)</TableHead>
              <TableHead>Overtime Rate ($)</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {standards.map((standard) => (
              <TableRow key={standard.role}>
                <TableCell>
                  {editingRole === standard.role ? (
                    <Input
                      value={editedValues?.role || ""}
                      onChange={(e) =>
                        handleInputChange("role", e.target.value, standard.role)
                      }
                    />
                  ) : (
                    standard.role
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.role ? (
                    <Input
                      type="number"
                      value={editedValues?.standardHours || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "standardHours",
                          e.target.value,
                          standard.role
                        )
                      }
                    />
                  ) : (
                    standard.standardHours
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.role ? (
                    <Input
                      type="number"
                      value={editedValues?.overtimeLimit || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "overtimeLimit",
                          e.target.value,
                          standard.role
                        )
                      }
                    />
                  ) : (
                    standard.overtimeLimit
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.role ? (
                    <Input
                      type="number"
                      value={editedValues?.hourlyRate || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "hourlyRate",
                          e.target.value,
                          standard.role
                        )
                      }
                    />
                  ) : (
                    standard.hourlyRate.toFixed(2)
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.role ? (
                    <Input
                      type="number"
                      value={editedValues?.overtimeRate || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "overtimeRate",
                          e.target.value,
                          standard.role
                        )
                      }
                    />
                  ) : (
                    standard.overtimeRate.toFixed(2)
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.role ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleSave(standard.role)}
                    >
                      <Save className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(standard)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}