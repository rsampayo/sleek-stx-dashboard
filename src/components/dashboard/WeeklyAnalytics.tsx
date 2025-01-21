import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', tasks: 7, equipment: 4 },
  { name: 'Tue', tasks: 6, equipment: 7 },
  { name: 'Wed', tasks: 9, equipment: 8 },
  { name: 'Thu', tasks: 6, equipment: 9 },
  { name: 'Fri', tasks: 8, equipment: 7 },
  { name: 'Sat', tasks: 7, equipment: 4 },
  { name: 'Sun', tasks: 5, equipment: 3 },
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
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="tasks" 
                stroke="#9b87f5" 
                fillOpacity={1} 
                fill="url(#colorTasks)" 
              />
              <Area 
                type="monotone" 
                dataKey="equipment" 
                stroke="#1EAEDB" 
                fillOpacity={1} 
                fill="url(#colorEquipment)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}