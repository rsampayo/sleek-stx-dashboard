import { Role, Permission } from "@/data/roles";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface RolePermissionsProps {
  role: Role;
  isEditing: boolean;
  openPermissions: string | null;
  editedValues: Role | null;
  onPermissionChange: (
    roleId: string,
    moduleIndex: number,
    permissionType: keyof Omit<Permission, "module">,
    checked: boolean
  ) => void;
  onTogglePermissions: (roleId: string) => void;
}

export function RolePermissions({
  role,
  isEditing,
  openPermissions,
  editedValues,
  onPermissionChange,
  onTogglePermissions,
}: RolePermissionsProps) {
  return (
    <Collapsible open={openPermissions === role.id}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onTogglePermissions(role.id)}
        >
          {openPermissions === role.id ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        {role.permissions.map((permission, index) => (
          <div
            key={permission.module}
            className="flex items-center gap-4 p-2"
          >
            <span className="w-32 text-sm">{permission.module}</span>
            {isEditing ? (
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`${role.id}-${permission.module}-view`}
                    checked={editedValues?.permissions[index].canView}
                    onCheckedChange={(checked) =>
                      onPermissionChange(
                        role.id,
                        index,
                        "canView",
                        checked as boolean
                      )
                    }
                  />
                  <label htmlFor={`${role.id}-${permission.module}-view`}>
                    View
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`${role.id}-${permission.module}-edit`}
                    checked={editedValues?.permissions[index].canEdit}
                    onCheckedChange={(checked) =>
                      onPermissionChange(
                        role.id,
                        index,
                        "canEdit",
                        checked as boolean
                      )
                    }
                  />
                  <label htmlFor={`${role.id}-${permission.module}-edit`}>
                    Edit
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`${role.id}-${permission.module}-delete`}
                    checked={editedValues?.permissions[index].canDelete}
                    onCheckedChange={(checked) =>
                      onPermissionChange(
                        role.id,
                        index,
                        "canDelete",
                        checked as boolean
                      )
                    }
                  />
                  <label htmlFor={`${role.id}-${permission.module}-delete`}>
                    Delete
                  </label>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                {permission.canView && <span className="text-sm">View</span>}
                {permission.canEdit && <span className="text-sm">Edit</span>}
                {permission.canDelete && <span className="text-sm">Delete</span>}
              </div>
            )}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}