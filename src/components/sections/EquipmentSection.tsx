import { useState } from "react";
import { EquipmentList } from "../equipment/EquipmentList";
import { EquipmentForm } from "../equipment/EquipmentForm";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export const EquipmentSection = () => {
  const [isAddingEquipment, setIsAddingEquipment] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Equipment & Fleet Management</h2>
        <Sheet open={isAddingEquipment} onOpenChange={setIsAddingEquipment}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Equipment
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Equipment</SheetTitle>
            </SheetHeader>
            <EquipmentForm onSuccess={() => setIsAddingEquipment(false)} />
          </SheetContent>
        </Sheet>
      </div>
      <EquipmentList />
    </div>
  );
};