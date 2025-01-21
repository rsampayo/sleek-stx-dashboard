import { TaskList } from "@/components/tasks/TaskList";
import { TaskCalendar } from "@/components/tasks/TaskCalendar";
import { TaskForm } from "@/components/tasks/TaskForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const TaskSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Task & Schedule Management</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Task</SheetTitle>
            </SheetHeader>
            <TaskForm onSubmit={(task) => console.log('New task:', task)} />
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TaskList selectedDate={selectedDate} />
        <TaskCalendar selectedDate={selectedDate} onSelect={setSelectedDate} />
      </div>
    </div>
  );
};