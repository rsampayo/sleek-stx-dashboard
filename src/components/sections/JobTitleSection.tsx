import { useState } from "react";
import { JobTitleList } from "../job-title/JobTitleList";
import { JobTitleForm } from "../job-title/JobTitleForm";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { toast } from "sonner";
import { JobTitle } from "@/types/jobTitle";

export const JobTitleSection = () => {
  const [jobTitles, setJobTitles] = useState<JobTitle[]>([
    {
      id: "1",
      title: "Project Manager",
      description: "Manages construction projects and team coordination",
    },
    {
      id: "2",
      title: "Equipment Operator",
      description: "Operates heavy machinery and equipment",
    },
  ]);

  const handleAddJobTitle = (jobTitle: Omit<JobTitle, "id">) => {
    const newJobTitle = {
      ...jobTitle,
      id: Math.random().toString(36).substr(2, 9),
    };
    setJobTitles([...jobTitles, newJobTitle]);
    toast.success("Job title added successfully");
  };

  const handleUpdateJobTitle = (updatedJobTitle: JobTitle) => {
    setJobTitles(jobTitles.map((jobTitle) => 
      jobTitle.id === updatedJobTitle.id ? updatedJobTitle : jobTitle
    ));
    toast.success("Job title updated successfully");
  };

  const handleDeleteJobTitle = (jobTitleId: string) => {
    setJobTitles(jobTitles.filter((jobTitle) => jobTitle.id !== jobTitleId));
    toast.success("Job title deleted successfully");
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Job Title Management</h1>
          <p className="text-muted-foreground">
            Manage job titles and their descriptions
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Job Title
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Job Title</SheetTitle>
            </SheetHeader>
            <JobTitleForm onSubmit={handleAddJobTitle} />
          </SheetContent>
        </Sheet>
      </div>
      <JobTitleList 
        jobTitles={jobTitles}
        onUpdate={handleUpdateJobTitle}
        onDelete={handleDeleteJobTitle}
      />
    </div>
  );
};