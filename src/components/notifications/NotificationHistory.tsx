import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  title: string;
  message: string;
  priority: string;
  timestamp: string;
  recipients: {
    name: string;
    email: string;
    readAt?: string;
  }[];
}

// Mock data - in a real app, this would come from your backend
const notifications: Notification[] = [
  {
    id: "1",
    title: "Maintenance Schedule Update",
    message: "Equipment maintenance scheduled for tomorrow at 9 AM",
    priority: "high",
    timestamp: "2024-02-20T10:00:00Z",
    recipients: [
      { name: "John Doe", email: "john@example.com", readAt: "2024-02-20T10:05:00Z" },
      { name: "Jane Smith", email: "jane@example.com" }
    ]
  },
  {
    id: "2",
    title: "Safety Protocol Reminder",
    message: "Please review updated safety protocols",
    priority: "normal",
    timestamp: "2024-02-19T15:30:00Z",
    recipients: [
      { name: "Bob Wilson", email: "bob@example.com", readAt: "2024-02-19T16:00:00Z" },
      { name: "John Doe", email: "john@example.com", readAt: "2024-02-19T15:45:00Z" }
    ]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'bg-red-500';
    case 'urgent':
      return 'bg-red-700';
    case 'normal':
      return 'bg-blue-500';
    case 'low':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

export const NotificationHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Sent At</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{notification.title}</div>
                      <div className="text-sm text-muted-foreground">{notification.message}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getPriorityColor(notification.priority)}`}>
                      {notification.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(notification.timestamp).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {notification.recipients.map((recipient, index) => (
                        <div key={index} className="text-sm">
                          {recipient.name}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {notification.recipients.map((recipient, index) => (
                        <div key={index} className="text-sm">
                          {recipient.readAt ? (
                            <Badge variant="outline" className="bg-green-50">Read</Badge>
                          ) : (
                            <Badge variant="outline" className="bg-yellow-50">Pending</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};