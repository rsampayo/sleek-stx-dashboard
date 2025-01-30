import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Eye, FileDown } from "lucide-react";
import { CompletedJSA } from "@/types/jsa";
import { format } from "date-fns";
import SignatureCanvas from "react-signature-canvas";
import { useToast } from "../ui/use-toast";

interface CompletedJSAListProps {
  completedChecklists: CompletedJSA[];
}

export const CompletedJSAList = ({ completedChecklists }: CompletedJSAListProps) => {
  const [selectedJSA, setSelectedJSA] = useState<CompletedJSA | null>(null);
  const { toast } = useToast();
  const [signaturePad, setSignaturePad] = useState<SignatureCanvas | null>(null);

  const handleSign = async () => {
    if (!signaturePad || !selectedJSA) return;
    
    const signature = signaturePad.toDataURL();
    // Here you would typically save the signature to your backend
    toast({
      title: "Signature saved",
      description: "The JSA has been signed successfully",
    });
  };

  const generatePDF = async (jsa: CompletedJSA) => {
    // Here you would implement PDF generation logic
    // For now, we'll just show a toast
    toast({
      title: "PDF Generated",
      description: "The JSA PDF has been generated and will download shortly",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Completed JSA Checklists</h2>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Completed By</TableHead>
              <TableHead>Completed At</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {completedChecklists.map((checklist) => (
              <TableRow key={checklist.id}>
                <TableCell>{checklist.name}</TableCell>
                <TableCell>{checklist.jobTitle}</TableCell>
                <TableCell>{checklist.completedBy}</TableCell>
                <TableCell>
                  {format(new Date(checklist.completedAt), "PPp")}
                </TableCell>
                <TableCell>{checklist.status}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedJSA(checklist)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{checklist.name}</DialogTitle>
                          <DialogDescription>
                            Completed by {checklist.completedBy} on{" "}
                            {format(new Date(checklist.completedAt), "PPp")}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          {checklist.sections.map((section) => (
                            <div key={section.id} className="space-y-4">
                              <h3 className="text-lg font-semibold">
                                {section.title}
                              </h3>
                              <div className="space-y-2">
                                {section.items.map((item) => (
                                  <div
                                    key={item.id}
                                    className="flex justify-between items-start border-b pb-2"
                                  >
                                    <span>{item.text}</span>
                                    <span className="font-medium">
                                      {item.response || "N/A"}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          {checklist.status === "pending_signature" && (
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold">
                                Digital Signature
                              </h3>
                              <div className="border rounded-md p-4">
                                <SignatureCanvas
                                  ref={(ref) => setSignaturePad(ref)}
                                  canvasProps={{
                                    className: "signature-canvas w-full h-40 border",
                                  }}
                                />
                                <div className="flex justify-end space-x-2 mt-2">
                                  <Button
                                    variant="outline"
                                    onClick={() => signaturePad?.clear()}
                                  >
                                    Clear
                                  </Button>
                                  <Button onClick={handleSign}>Sign</Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => generatePDF(checklist)}
                    >
                      <FileDown className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};