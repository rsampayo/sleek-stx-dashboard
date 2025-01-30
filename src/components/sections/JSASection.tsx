import { useState } from "react";
import { JSAChecklist } from "@/types/jsa";
import { JSAList } from "../jsa/JSAList";
import { JSAForm } from "../jsa/JSAForm";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export const JSASection = () => {
  const [checklists, setChecklists] = useState<JSAChecklist[]>([]);

  const handleAddChecklist = (checklist: JSAChecklist) => {
    setChecklists((prev) => [...prev, checklist]);
  };

  const handleUpdateChecklist = (updatedChecklist: JSAChecklist) => {
    setChecklists((prev) =>
      prev.map((checklist) =>
        checklist.id === updatedChecklist.id ? updatedChecklist : checklist
      )
    );
  };

  const handleDeleteChecklist = (id: string) => {
    setChecklists((prev) => prev.filter((checklist) => checklist.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">JSA Checklists</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Checklist
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Add JSA Checklist</SheetTitle>
            </SheetHeader>
            <JSAForm onSubmit={handleAddChecklist} />
          </SheetContent>
        </Sheet>
      </div>
      <JSAList
        checklists={checklists}
        onUpdate={handleUpdateChecklist}
        onDelete={handleDeleteChecklist}
      />
    </div>
  );
};