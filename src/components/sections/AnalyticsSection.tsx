import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const AnalyticsSection = () => {
  const { toast } = useToast();

  const handleGenerateReport = (format: 'pdf' | 'csv') => {
    toast({
      title: "Generating Report",
      description: `Your ${format.toUpperCase()} report is being generated.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics & Reports</h1>
        <p className="text-muted-foreground">
          View real-time and historical data on worker attendance, equipment status, and more. Generate payroll or usage reports.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Type:</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="attendance">Attendance</SelectItem>
                  <SelectItem value="equipment">Equipment Maintenance</SelectItem>
                  <SelectItem value="payroll">Payroll</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From:</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">To:</label>
                <Input type="date" />
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => handleGenerateReport('pdf')}>Generate PDF</Button>
              <Button variant="outline" onClick={() => handleGenerateReport('csv')}>
                Generate CSV
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};