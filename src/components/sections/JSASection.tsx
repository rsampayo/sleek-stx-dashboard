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

const sampleCompletedJSAs: CompletedJSA[] = [
  {
    id: "jsa-001",
    name: "Excavation Safety Assessment",
    description: "Safety assessment for trench excavation work",
    jobTitle: "Construction Worker",
    sections: [
      {
        id: "section-1",
        title: "Pre-Work Inspection",
        items: [
          {
            id: "item-1",
            text: "Has the area been marked for underground utilities?",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-2",
            text: "Is proper shoring equipment available?",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      },
      {
        id: "section-2",
        title: "PPE Requirements",
        items: [
          {
            id: "item-3",
            text: "Hard hat",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-4",
            text: "Safety boots",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      }
    ],
    completedBy: "John Smith",
    completedAt: new Date("2024-03-15T09:00:00"),
    status: "completed"
  },
  {
    id: "jsa-002",
    name: "Working at Heights Assessment",
    description: "Safety assessment for roofing work",
    jobTitle: "Roofer",
    sections: [
      {
        id: "section-3",
        title: "Fall Protection",
        items: [
          {
            id: "item-5",
            text: "Fall arrest system inspected?",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-6",
            text: "Anchor points verified?",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      }
    ],
    completedBy: "Sarah Johnson",
    completedAt: new Date("2024-03-14T14:30:00"),
    status: "pending"
  },
  {
    id: "jsa-003",
    name: "Electrical Work Safety",
    description: "Safety assessment for electrical maintenance",
    jobTitle: "Electrician",
    sections: [
      {
        id: "section-4",
        title: "Lock Out/Tag Out",
        items: [
          {
            id: "item-7",
            text: "Power source identified and isolated?",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-8",
            text: "Lock out devices applied?",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      }
    ],
    completedBy: "Mike Wilson",
    completedAt: new Date("2024-03-13T11:15:00"),
    status: "completed"
  }
];

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