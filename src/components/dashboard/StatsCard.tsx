import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  Icon: LucideIcon;
}

export function StatsCard({ title, value, change, Icon }: StatsCardProps) {
  const isPositive = change.startsWith('+');
  
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <p className={`mt-2 text-sm ${isPositive ? 'text-success' : 'text-destructive'}`}>
        {change}
      </p>
    </Card>
  );
}