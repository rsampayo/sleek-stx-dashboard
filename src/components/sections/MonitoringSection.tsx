import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, FileText, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const MonitoringSection = () => {
  const [newTicket, setNewTicket] = useState({ title: "", description: "" });

  const systemLogs = [
    { timestamp: "2024-03-14 10:30:22", level: "INFO", message: "System startup completed successfully" },
    { timestamp: "2024-03-14 10:30:25", level: "INFO", message: "Database connection established" },
    { timestamp: "2024-03-14 10:31:00", level: "WARN", message: "High CPU usage detected" },
    { timestamp: "2024-03-14 10:32:15", level: "INFO", message: "New user registration" },
    { timestamp: "2024-03-14 10:33:00", level: "ERROR", message: "Failed to process payment transaction" },
  ];

  const handleSubmitTicket = () => {
    if (!newTicket.title || !newTicket.description) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success("Support ticket created successfully");
    setNewTicket({ title: "", description: "" });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Monitoring & Support</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* System Logs Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              System Logs
            </CardTitle>
            <CardDescription>Real-time system logs and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              {systemLogs.map((log, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    log.level === "ERROR"
                      ? "bg-red-50 text-red-700"
                      : log.level === "WARN"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="text-xs font-mono">{log.timestamp}</div>
                  <div className="flex items-center gap-1">
                    {log.level === "ERROR" && <AlertCircle className="h-4 w-4" />}
                    <span className="font-medium">{log.message}</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Support Ticket Card */}
        <Card>
          <CardHeader>
            <CardTitle>Support</CardTitle>
            <CardDescription>Create and manage support tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Support Ticket
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>New Support Ticket</SheetTitle>
                  <SheetDescription>
                    Create a new support ticket for technical assistance
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Brief description of the issue"
                      value={newTicket.title}
                      onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <textarea
                      id="description"
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Detailed description of the issue"
                      value={newTicket.description}
                      onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                    />
                  </div>
                  <Button className="w-full" onClick={handleSubmitTicket}>
                    Submit Ticket
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};