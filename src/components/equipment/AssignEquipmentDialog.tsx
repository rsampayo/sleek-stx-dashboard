import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  role: string;
}

interface AssignEquipmentDialogProps {
  equipmentName: string;
  onAssign: (userId: string) => void;
}

export const AssignEquipmentDialog = ({ equipmentName, onAssign }: AssignEquipmentDialogProps) => {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  // Mock users data - in a real app, this would come from your backend
  const users: User[] = [
    { id: "1", name: "John Doe", role: "Operator" },
    { id: "2", name: "Jane Smith", role: "Operator" },
    { id: "3", name: "Mike Johnson", role: "Manager" },
  ];

  const handleAssign = () => {
    if (!selectedUser) {
      toast.error("Please select a user");
      return;
    }

    onAssign(selectedUser);
    setIsOpen(false);
    toast.success(`${equipmentName} has been assigned successfully`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Assign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Equipment</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Equipment</Label>
            <p className="text-sm text-muted-foreground">{equipmentName}</p>
          </div>
          <div className="space-y-2">
            <Label>Assign to User</Label>
            <Select
              value={selectedUser}
              onValueChange={setSelectedUser}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a user" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name} ({user.role})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAssign}>
            Assign Equipment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};