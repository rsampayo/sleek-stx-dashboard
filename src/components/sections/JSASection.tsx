import { useState } from "react";
import { JSAChecklist, CompletedJSA } from "@/types/jsa";
import { CompletedJSAList } from "../jsa/CompletedJSAList";
import { JSATemplatesTab } from "../jsa/JSATemplatesTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { sampleCompletedJSAs } from "@/data/sampleJSAData";

export const JSASection = () => {
  const [checklists, setChecklists] = useState<JSAChecklist[]>([]);
  const [completedChecklists, setCompletedChecklists] = useState<CompletedJSA[]>(sampleCompletedJSAs);

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
        
        <TabsContent value="templates">
          <JSATemplatesTab
            checklists={checklists}
            onAddChecklist={handleAddChecklist}
            onUpdateChecklist={handleUpdateChecklist}
            onDeleteChecklist={handleDeleteChecklist}
          />
        </TabsContent>
        
        <TabsContent value="completed">
          <CompletedJSAList completedChecklists={completedChecklists} />
        </TabsContent>
      </Tabs>
    </div>
  );
};