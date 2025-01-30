import { JSAChecklist } from "@/types/jsa";
import { JSAList } from "./JSAList";
import { JSAForm } from "./JSAForm";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface JSATemplatesTabProps {
  checklists: JSAChecklist[];
  onAddChecklist: (checklist: JSAChecklist) => void;
  onUpdateChecklist: (checklist: JSAChecklist) => void;
  onDeleteChecklist: (id: string) => void;
}

export const JSATemplatesTab = ({
  checklists,
  onAddChecklist,
  onUpdateChecklist,
  onDeleteChecklist,
}: JSATemplatesTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">JSA Templates</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Template
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Add JSA Template</SheetTitle>
            </SheetHeader>
            <JSAForm onSubmit={onAddChecklist} />
          </SheetContent>
        </Sheet>
      </div>
      <JSAList
        checklists={checklists}
        onUpdate={onUpdateChecklist}
        onDelete={onDeleteChecklist}
      />
    </div>
  );
};