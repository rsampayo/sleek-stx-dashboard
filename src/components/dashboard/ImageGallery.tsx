import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Image } from "lucide-react";

interface UploadedImage {
  id: string;
  url: string;
  metadata: {
    uploadedBy: string;
    uploadDate: string;
    projectName: string;
    description: string;
  };
}

export function ImageGallery() {
  // Mock data - in a real app this would come from an API
  const images: UploadedImage[] = [
    {
      id: "1",
      url: "/lovable-uploads/32095b6c-4dea-4566-b8ed-98fbaad0a5dd.png",
      metadata: {
        uploadedBy: "John Doe",
        uploadDate: "2024-02-20",
        projectName: "Site A Construction",
        description: "Equipment inspection photo"
      }
    },
    {
      id: "2",
      url: "/lovable-uploads/5be201ae-dd2b-4aa4-b5dc-aa5c3c181ace.png",
      metadata: {
        uploadedBy: "Jane Smith",
        uploadDate: "2024-02-19",
        projectName: "Site B Maintenance",
        description: "Safety inspection documentation"
      }
    }
  ];

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="h-5 w-5" />
          Recent Uploads
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="grid gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg transition-all duration-200 hover:bg-muted hover:translate-x-1 cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.metadata.description}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="space-y-1">
                  <p className="font-medium">{image.metadata.description}</p>
                  <p className="text-sm text-muted-foreground">
                    Uploaded by {image.metadata.uploadedBy}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Project: {image.metadata.projectName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Date: {image.metadata.uploadDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}