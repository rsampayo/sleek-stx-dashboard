import { Check, Clock, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Task {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  date: string;
}

export function TaskList() {
  const tasks: Task[] = [
    { id: '1', title: 'Equipment Maintenance Check', status: 'completed', date: '2024-02-20' },
    { id: '2', title: 'Vehicle Inspection', status: 'in-progress', date: '2024-02-21' },
    { id: '3', title: 'Safety Protocol Review', status: 'pending', date: '2024-02-22' },
  ];

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <Check className="h-4 w-4 text-success" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-primary" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg transition-all duration-200 hover:bg-muted hover:translate-x-1 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(task.status)}
                <span>{task.title}</span>
              </div>
              <span className="text-sm text-muted-foreground">{task.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}