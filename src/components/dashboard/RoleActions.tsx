import { Button } from "@/components/ui/button";
import { Edit2, Save, Trash2 } from "lucide-react";

interface RoleActionsProps {
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onDelete: () => void;
}

export function RoleActions({
  isEditing,
  onEdit,
  onSave,
  onDelete,
}: RoleActionsProps) {
  return (
    <div className="flex gap-2">
      {isEditing ? (
        <Button variant="ghost" size="icon" onClick={onSave}>
          <Save className="h-4 w-4" />
        </Button>
      ) : (
        <>
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}