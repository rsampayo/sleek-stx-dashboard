import { Edit, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { EquipmentForm } from "./EquipmentForm";
import { AssignEquipmentDialog } from "./AssignEquipmentDialog";

interface EquipmentActionsProps {
  equipmentId: string;
  equipmentName: string;
  onDelete: (id: string) => void;
  onAssign: (equipmentId: string, userId: string) => void;
}

export const EquipmentActions = ({ equipmentId, equipmentName, onDelete, onAssign }: EquipmentActionsProps) => {
  return (
    <div className="flex space-x-2">
      <AssignEquipmentDialog
        equipmentName={equipmentName}
        onAssign={(userId) => onAssign(equipmentId, userId)}
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Equipment</SheetTitle>
          </SheetHeader>
          <EquipmentForm equipment={{ id: equipmentId, name: equipmentName }} />
        </SheetContent>
      </Sheet>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Equipment</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this equipment? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => onDelete(equipmentId)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};