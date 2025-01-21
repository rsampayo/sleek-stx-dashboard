import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

interface TaskCalendarProps {
  selectedDate?: Date;
  onSelect: (date: Date | undefined) => void;
}

export function TaskCalendar({ selectedDate, onSelect }: TaskCalendarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onSelect}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}