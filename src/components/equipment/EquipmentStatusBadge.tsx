import { Badge } from "../ui/badge";

type EquipmentStatus = "operational" | "maintenance" | "out-of-service";

interface EquipmentStatusBadgeProps {
  status: EquipmentStatus;
}

export const EquipmentStatusBadge = ({ status }: EquipmentStatusBadgeProps) => {
  const variants: Record<EquipmentStatus, "default" | "secondary" | "destructive"> = {
    operational: "default",
    maintenance: "secondary",
    "out-of-service": "destructive"
  };
  
  return <Badge variant={variants[status]}>{status}</Badge>;
};