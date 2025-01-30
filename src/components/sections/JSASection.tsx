import { useState } from "react";
import { JSAChecklist, CompletedJSA } from "@/types/jsa";
import { JSAList } from "../jsa/JSAList";
import { JSAForm } from "../jsa/JSAForm";
import { CompletedJSAList } from "../jsa/CompletedJSAList";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const JSASection = () => {
  const [checklists, setChecklists] = useState<JSAChecklist[]>([]);
  const [completedChecklists, setCompletedChecklists] = useState<CompletedJSA[]>([]);

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
      <Tabs defaultValue="templates">
        <TabsList>
          <TabsTrigger value="templates">JSA Templates</TabsTrigger>
          <TabsTrigger value="completed">Completed JSAs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="templates" className="space-y-6">
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
                <JSAForm onSubmit={handleAddChecklist} />
              </SheetContent>
            </Sheet>
          </div>
          <JSAList
            checklists={checklists}
            onUpdate={handleUpdateChecklist}
            onDelete={handleDeleteChecklist}
          />
        </TabsContent>
        
        <TabsContent value="completed">
          <CompletedJSAList completedChecklists={completedChecklists} />
        </TabsContent>
      </Tabs>
    </div>
  );
};