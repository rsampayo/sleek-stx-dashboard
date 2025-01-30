import { useState } from "react";
import { UserList } from "../user-management/UserList";
import { UserForm } from "../user-management/UserForm";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { toast } from "sonner";
import { Role } from "@/data/roles";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role["id"];
  status: "active" | "inactive";
  lastActive: string;
};

export const UserManagementSection = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "site-manager",
      status: "active",
      lastActive: "2024-02-20",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "safety-officer",
      status: "active",
      lastActive: "2024-02-19",
    },
  ]);

  const handleAddUser = (user: Omit<User, "id">) => {
    const newUser = {
      ...user,
      id: Math.random().toString(36).substr(2, 9),
    };
    setUsers([...users, newUser]);
    toast.success("User added successfully");
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(users.map((user) => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    toast.success("User updated successfully");
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast.success("User deleted successfully");
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage user accounts and permissions
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New User</SheetTitle>
            </SheetHeader>
            <UserForm onSubmit={handleAddUser} />
          </SheetContent>
        </Sheet>
      </div>
      <UserList 
        users={users}
        onUpdate={handleUpdateUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};