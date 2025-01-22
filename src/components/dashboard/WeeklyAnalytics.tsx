import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Mon', tasks: 7, equipment: 4, payroll: 2400, incidents: 1 },
  { name: 'Tue', tasks: 6, equipment: 7, payroll: 2100, incidents: 0 },
  { name: 'Wed', tasks: 9, equipment: 8, payroll: 2800, incidents: 2 },
  { name: 'Thu', tasks: 6, equipment: 9, payroll: 2300, incidents: 1 },
  { name: 'Fri', tasks: 8, equipment: 7, payroll: 2600, incidents: 0 },
  { name: 'Sat', tasks: 7, equipment: 4, payroll: 1800, incidents: 1 },
  { name: 'Sun', tasks: 5, equipment: 3, payroll: 1500, incidents: 0 },
];

export function WeeklyAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D3E4FD" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#D3E4FD" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEquipment" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F2FCE2" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F2FCE2" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPayroll" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFE4E4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFE4E4" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFD7D7" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFD7D7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="tasks" 
                name="Tasks Completed"
                stroke="#9b87f5" 
                fillOpacity={1} 
                fill="url(#colorTasks)" 
              />
              <Area 
                type="monotone" 
                dataKey="equipment" 
                name="Equipment Active"
                stroke="#1EAEDB" 
                fillOpacity={1} 
                fill="url(#colorEquipment)" 
              />
              <Area 
                type="monotone" 
                dataKey="payroll" 
                name="Payroll ($)"
                stroke="#FF4444" 
                fillOpacity={1} 
                fill="url(#colorPayroll)" 
              />
              <Area 
                type="monotone" 
                dataKey="incidents" 
                name="Incidents"
                stroke="#FF0000" 
                fillOpacity={1} 
                fill="url(#colorIncidents)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}