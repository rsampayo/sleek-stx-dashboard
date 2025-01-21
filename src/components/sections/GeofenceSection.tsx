import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  position: "relative" as const,
};

export const GeofenceSection = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const geofences = [
    { id: "GF-001", name: "Project X Site", radius: 300 },
    { id: "GF-002", name: "Warehouse A", radius: 150 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Geofence Management</h1>
        <p className="text-muted-foreground">
          Define and manage geofenced zones for each project or location.
        </p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Add New Geofence</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Draw New Geofence</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div style={mapContainerStyle}>
              <img 
                src="/lovable-uploads/5be201ae-dd2b-4aa4-b5dc-aa5c3c181ace.png" 
                alt="Map placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Geofence ID</TableHead>
            <TableHead>Location Name</TableHead>
            <TableHead>Radius (m)</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {geofences.map((geofence) => (
            <TableRow key={geofence.id}>
              <TableCell>{geofence.id}</TableCell>
              <TableCell>{geofence.name}</TableCell>
              <TableCell>{geofence.radius}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};