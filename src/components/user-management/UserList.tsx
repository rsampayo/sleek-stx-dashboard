import { User } from "../sections/UserManagementSection";
import { JobTitle } from "@/types/jobTitle";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Edit, Trash2 } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { UserForm } from "./UserForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface UserListProps {
  users: User[];
  jobTitles: JobTitle[];
  onUpdate: (user: User) => void;
  onDelete: (userId: string) => void;
}

export const UserList = ({ users, jobTitles, onUpdate, onDelete }: UserListProps) => {
  const getJobTitle = (jobTitleId?: string) => {
    return jobTitles.find(jt => jt.id === jobTitleId)?.title || 'Not Assigned';
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Last Active</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant="outline" className="capitalize">
                {user.role}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge 
                variant={user.status === "active" ? "default" : "secondary"}
                className="capitalize"
              >
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>{getJobTitle(user.jobTitleId)}</TableCell>
            <TableCell>{user.lastActive}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit User</SheetTitle>
                    </SheetHeader>
                    <UserForm 
                      user={user}
                      jobTitles={jobTitles}
                      onSubmit={(updatedUserData) => {
                        const updatedUser: User = {
                          id: user.id,
                          name: updatedUserData.name,
                          email: updatedUserData.email,
                          role: updatedUserData.role,
                          status: updatedUserData.status,
                          jobTitleId: updatedUserData.jobTitleId,
                          lastActive: user.lastActive
                        };
                        onUpdate(updatedUser);
                      }}
                    />
                  </SheetContent>
                </Sheet>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete User</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this user? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => onDelete(user.id)}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};