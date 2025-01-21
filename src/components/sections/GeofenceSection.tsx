import { useState, useCallback, useRef } from "react";
import { GoogleMap, LoadScript, DrawingManager } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const libraries: ("drawing")[] = ["drawing"];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};

// Import the correct types from the library
const drawingManagerOptions: google.maps.drawing.DrawingManagerOptions = {
  drawingControl: true,
  drawingControlOptions: {
    position: google.maps.ControlPosition.TOP_CENTER,
    drawingModes: [google.maps.drawing.OverlayType.POLYGON],
  },
  polygonOptions: {
    fillColor: "#FF0000",
    fillOpacity: 0.3,
    strokeWeight: 2,
    clickable: true,
    editable: true,
    draggable: true,
    zIndex: 1,
  },
};

export const GeofenceSection = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const polygonRef = useRef<google.maps.Polygon | null>(null);

  const geofences = [
    { id: "GF-001", name: "Project X Site", radius: 300 },
    { id: "GF-002", name: "Warehouse A", radius: 150 },
  ];

  const onPolygonComplete = useCallback((polygon: google.maps.Polygon) => {
    polygonRef.current = polygon;
    
    // Get polygon coordinates
    const path = polygon.getPath();
    const coordinates = path.getArray().map(coord => ({
      lat: coord.lat(),
      lng: coord.lng(),
    }));

    console.log("Geofence coordinates:", coordinates);
    
    toast({
      title: "Geofence Created",
      description: "The geofence has been drawn successfully.",
    });
  }, [toast]);

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
            <LoadScript
              googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
              libraries={libraries}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
              >
                <DrawingManager
                  onPolygonComplete={onPolygonComplete}
                  options={drawingManagerOptions}
                />
              </GoogleMap>
            </LoadScript>
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