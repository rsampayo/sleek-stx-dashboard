import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Mon', hours: 8.5, overtime: 1.5 },
  { name: 'Tue', hours: 7.0, overtime: 0 },
  { name: 'Wed', hours: 9.0, overtime: 2.0 },
  { name: 'Thu', hours: 8.0, overtime: 0.5 },
  { name: 'Fri', hours: 8.5, overtime: 1.0 },
  { name: 'Sat', hours: 4.0, overtime: 0 },
  { name: 'Sun', hours: 0, overtime: 0 },
];

export function WeeklyAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hours Reported (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D3E4FD" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#D3E4FD" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorOvertime" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFE4E4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFE4E4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis 
                label={{ 
                  value: 'Hours', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle' }
                }}
              />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="hours" 
                name="Regular Hours"
                stroke="#9b87f5" 
                fillOpacity={1} 
                fill="url(#colorHours)" 
              />
              <Area 
                type="monotone" 
                dataKey="overtime" 
                name="Overtime Hours"
                stroke="#FF4444" 
                fillOpacity={1} 
                fill="url(#colorOvertime)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}