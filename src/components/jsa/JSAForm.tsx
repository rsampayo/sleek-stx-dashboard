import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { JSAChecklist, JSASection } from "@/types/jsa";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { JSASectionForm } from "./JSASectionForm";

const jsaSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(2, "Description must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
});

type JSAFormValues = z.infer<typeof jsaSchema>;

interface JSAFormProps {
  checklist?: JSAChecklist;
  onSubmit: (checklist: JSAChecklist) => void;
}

export const JSAForm = ({ checklist, onSubmit }: JSAFormProps) => {
  const [sections, setSections] = useState<JSASection[]>(
    checklist?.sections || []
  );

  const form = useForm<JSAFormValues>({
    resolver: zodResolver(jsaSchema),
    defaultValues: checklist || {
      name: "",
      description: "",
      jobTitle: "",
    },
  });

  const handleSubmit = (data: JSAFormValues) => {
    const newChecklist: JSAChecklist = {
      id: checklist?.id || crypto.randomUUID(),
      ...data,
      sections,
    };
    onSubmit(newChecklist);
  };

  const handleAddSection = () => {
    setSections((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: "", items: [] },
    ]);
  };

  const handleUpdateSection = (index: number, section: JSASection) => {
    setSections((prev) => {
      const newSections = [...prev];
      newSections[index] = section;
      return newSections;
    });
  };

  const handleRemoveSection = (index: number) => {
    setSections((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter checklist name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter checklist description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter job title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Sections</h3>
            <Button type="button" onClick={handleAddSection}>
              <Plus className="h-4 w-4 mr-2" />
              Add Section
            </Button>
          </div>

          {sections.map((section, index) => (
            <div key={section.id} className="space-y-4 p-4 border rounded-lg">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Section {index + 1}</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveSection(index)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
              <JSASectionForm
                section={section}
                onChange={(updatedSection) =>
                  handleUpdateSection(index, updatedSection)
                }
              />
            </div>
          ))}
        </div>

        <Button type="submit" className="w-full">
          {checklist ? "Update Checklist" : "Create Checklist"}
        </Button>
      </form>
    </Form>
  );
};