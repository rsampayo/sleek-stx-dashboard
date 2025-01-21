import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Clock } from "lucide-react";
import { format } from "date-fns";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
}

interface TaskListProps {
  selectedDate?: Date;
}

export function TaskList({ selectedDate }: TaskListProps) {
  // Mock data - in a real app, this would come from a backend
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Equipment Maintenance',
      description: 'Perform routine maintenance on excavator',
      dueDate: new Date(),
      priority: 'high',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Safety Inspection',
      description: 'Conduct monthly safety inspection',
      dueDate: new Date(),
      priority: 'medium',
      status: 'in-progress'
    }
  ];

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'default';
      case 'in-progress':
        return 'default';
      case 'pending':
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col space-y-2 rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{task.title}</h3>
                <Badge variant={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{task.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CalendarCheck className="h-4 w-4" />
                  <span>{format(task.dueDate, 'PPP')}</span>
                </div>
                <Badge variant={getStatusColor(task.status)}>
                  {task.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}