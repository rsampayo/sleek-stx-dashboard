import { Check, Settings, AlertCircle, Wrench, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Equipment {
  id: string;
  name: string;
  lastMaintenance: string;
  nextMaintenance: string;
  status: 'operational' | 'maintenance' | 'alert';
  maintenanceTasks: {
    id: string;
    type: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
  }[];
  incidents?: {
    date: string;
    description: string;
    severity: 'critical' | 'moderate' | 'low';
  }[];
}

export function EquipmentStatus() {
  const equipment: Equipment[] = [
    {
      id: '1',
      name: 'Excavator #1',
      lastMaintenance: '2024-02-15',
      nextMaintenance: '2024-03-15',
      status: 'operational',
      maintenanceTasks: [
        { id: 't1', type: 'Oil Change', dueDate: '2024-03-01', priority: 'high' },
        { id: 't2', type: 'Filter Replacement', dueDate: '2024-03-10', priority: 'medium' }
      ]
    },
    {
      id: '2',
      name: 'Bulldozer #2',
      lastMaintenance: '2024-02-10',
      nextMaintenance: '2024-02-20',
      status: 'maintenance',
      maintenanceTasks: [
        { id: 't3', type: 'Hydraulic System Check', dueDate: '2024-02-25', priority: 'high' }
      ],
      incidents: [
        { 
          date: '2024-02-19', 
          description: 'Hydraulic system pressure drop',
          severity: 'moderate'
        }
      ]
    },
    {
      id: '3',
      name: 'Crane #1',
      lastMaintenance: '2024-02-01',
      nextMaintenance: '2024-02-19',
      status: 'alert',
      maintenanceTasks: [
        { id: 't4', type: 'Safety Inspection', dueDate: '2024-02-20', priority: 'high' },
        { id: 't5', type: 'Cable Inspection', dueDate: '2024-02-21', priority: 'high' }
      ],
      incidents: [
        {
          date: '2024-02-18',
          description: 'Emergency stop system triggered',
          severity: 'critical'
        }
      ]
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

  const handleMaintenanceClick = (task: Equipment['maintenanceTasks'][0]) => {
    toast.info(`Maintenance task "${task.type}" scheduled for ${task.dueDate}`);
  };

  const handleIncidentReport = (incident: Equipment['incidents'][0]) => {
    toast.error(`Incident reported: ${incident.description}`);
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Equipment Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {equipment.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col p-4 bg-muted/50 rounded-lg transition-all duration-200 hover:bg-muted hover:translate-x-1 cursor-pointer"
            >
              <div className="flex items-center justify-between">
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

              {/* Maintenance Tasks */}
              <div className="mt-4">
                <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                  <Wrench className="h-4 w-4" />
                  Upcoming Maintenance
                </h4>
                <div className="grid gap-2">
                  {item.maintenanceTasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => handleMaintenanceClick(task)}
                      className="flex items-center justify-between text-sm p-2 bg-background rounded border"
                    >
                      <span>{task.type}</span>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{task.dueDate}</span>
                        <Badge variant={task.priority === 'high' ? 'destructive' : 'secondary'}>
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Incidents */}
              {item.incidents && item.incidents.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4" />
                    Recent Incidents
                  </h4>
                  <div className="grid gap-2">
                    {item.incidents.map((incident, index) => (
                      <div
                        key={index}
                        onClick={() => handleIncidentReport(incident)}
                        className="flex items-center justify-between text-sm p-2 bg-background rounded border"
                      >
                        <span>{incident.description}</span>
                        <Badge variant={incident.severity === 'critical' ? 'destructive' : 'secondary'}>
                          {incident.severity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}