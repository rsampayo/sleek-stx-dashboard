import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Edit2, Save, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { roles as initialRoles, Role } from "@/data/roles";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function RoleAdministration() {
  const [standards, setStandards] = useState<Role[]>(initialRoles);
  const [editingRole, setEditingRole] = useState<string | null>(null);
  const [editedValues, setEditedValues] = useState<Role | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState<string | null>(null);

  const handleEdit = (role: Role) => {
    setEditingRole(role.id);
    setEditedValues(role);
  };

  const handleSave = (roleId: string) => {
    if (editedValues) {
      setStandards(standards.map((s) => (s.id === roleId ? editedValues : s)));
      setEditingRole(null);
      setEditedValues(null);
      toast.success("Role standards updated successfully");
    }
  };

  const handleInputChange = (
    field: keyof Role,
    value: string,
    roleId: string
  ) => {
    if (editedValues) {
      setEditedValues({
        ...editedValues,
        [field]: field === "title" || field === "id" ? value : Number(value),
      });
    }
  };

  const handleAddRole = () => {
    const newRole: Role = {
      id: `role-${Date.now()}`,
      title: "New Role",
      standardHours: 8,
      overtimeLimit: 10,
      hourlyRate: 25,
      overtimeRate: 37.5,
    };
    setStandards([...standards, newRole]);
    handleEdit(newRole);
    toast.success("New role added");
  };

  const handleDeleteClick = (roleId: string) => {
    setRoleToDelete(roleId);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    if (roleToDelete) {
      setStandards(standards.filter((s) => s.id !== roleToDelete));
      setShowDeleteDialog(false);
      setRoleToDelete(null);
      toast.success("Role deleted successfully");
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Role Standards Administration</CardTitle>
        <Button onClick={handleAddRole} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Role
        </Button>
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
              <TableRow key={standard.id}>
                <TableCell>
                  {editingRole === standard.id ? (
                    <Input
                      value={editedValues?.title || ""}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value, standard.id)
                      }
                    />
                  ) : (
                    standard.title
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.id ? (
                    <Input
                      type="number"
                      value={editedValues?.standardHours || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "standardHours",
                          e.target.value,
                          standard.id
                        )
                      }
                    />
                  ) : (
                    standard.standardHours
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.id ? (
                    <Input
                      type="number"
                      value={editedValues?.overtimeLimit || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "overtimeLimit",
                          e.target.value,
                          standard.id
                        )
                      }
                    />
                  ) : (
                    standard.overtimeLimit
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.id ? (
                    <Input
                      type="number"
                      value={editedValues?.hourlyRate || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "hourlyRate",
                          e.target.value,
                          standard.id
                        )
                      }
                    />
                  ) : (
                    standard.hourlyRate.toFixed(2)
                  )}
                </TableCell>
                <TableCell>
                  {editingRole === standard.id ? (
                    <Input
                      type="number"
                      value={editedValues?.overtimeRate || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "overtimeRate",
                          e.target.value,
                          standard.id
                        )
                      }
                    />
                  ) : (
                    standard.overtimeRate.toFixed(2)
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {editingRole === standard.id ? (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSave(standard.id)}
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(standard)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteClick(standard.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the role.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}