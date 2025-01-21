import { Check, Settings, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Equipment {
  id: string;
  name: string;
  lastMaintenance: string;
  nextMaintenance: string;
  status: 'operational' | 'maintenance' | 'alert';
}

export function EquipmentStatus() {
  const equipment: Equipment[] = [
    {
      id: '1',
      name: 'Excavator #1',
      lastMaintenance: '2024-02-15',
      nextMaintenance: '2024-03-15',
      status: 'operational'
    },
    {
      id: '2',
      name: 'Bulldozer #2',
      lastMaintenance: '2024-02-10',
      nextMaintenance: '2024-02-20',
      status: 'maintenance'
    },
    {
      id: '3',
      name: 'Crane #1',
      lastMaintenance: '2024-02-01',
      nextMaintenance: '2024-02-19',
      status: 'alert'
    }
  ];

  const getStatusIcon = (status: Equipment['status']) => {
    switch (status) {
      case 'operational':
        return <Check className="h-5 w-5 text-success" />;
      case 'maintenance':
        return <Settings className="h-5 w-5 text-primary" />;
      case 'alert':
        return <AlertCircle className="h-5 w-5 text-destructive" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {equipment.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Last maintenance: {item.lastMaintenance}</p>
                  <p>Next maintenance: {item.nextMaintenance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}