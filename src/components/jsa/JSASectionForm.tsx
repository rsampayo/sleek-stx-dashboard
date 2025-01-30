import { JSAItem, JSASection } from "@/types/jsa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus, Minus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface JSASectionFormProps {
  section: JSASection;
  onChange: (section: JSASection) => void;
}

export const JSASectionForm = ({ section, onChange }: JSASectionFormProps) => {
  const handleTitleChange = (title: string) => {
    onChange({ ...section, title });
  };

  const handleAddItem = () => {
    const newItem: JSAItem = {
      id: crypto.randomUUID(),
      text: "",
      type: "yesNoNA",
    };
    onChange({ ...section, items: [...section.items, newItem] });
  };

  const handleUpdateItem = (index: number, updatedItem: Partial<JSAItem>) => {
    const newItems = [...section.items];
    newItems[index] = { ...newItems[index], ...updatedItem };
    onChange({ ...section, items: newItems });
  };

  const handleRemoveItem = (index: number) => {
    onChange({
      ...section,
      items: section.items.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <Input
          placeholder="Enter section title"
          value={section.title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h5 className="font-medium">Items</h5>
          <Button type="button" variant="outline" onClick={handleAddItem}>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>

        {section.items.map((item, index) => (
          <div key={item.id} className="flex gap-2 items-start">
            <Input
              placeholder="Enter item text"
              value={item.text}
              onChange={(e) =>
                handleUpdateItem(index, { text: e.target.value })
              }
              className="flex-1"
            />
            <Select
              value={item.type}
              onValueChange={(value) =>
                handleUpdateItem(index, {
                  type: value as JSAItem["type"],
                })
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesNoNA">Yes/No/NA</SelectItem>
                <SelectItem value="text">Text Field</SelectItem>
              </SelectContent>
            </Select>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveItem(index)}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};