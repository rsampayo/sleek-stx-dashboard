import { Download, Shield, Users, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { toast } from "sonner";

const roles = [
  {
    name: "Administrator",
    permissions: ["all"],
    users: 3,
  },
  {
    name: "Manager",
    permissions: ["read", "write", "manage_users"],
    users: 5,
  },
  {
    name: "Operator",
    permissions: ["read", "write"],
    users: 12,
  },
];

const complianceFrameworks = [
  {
    name: "GDPR",
    status: "Compliant",
    lastCheck: "2024-02-15",
  },
  {
    name: "HIPAA",
    status: "Compliant",
    lastCheck: "2024-02-10",
  },
  {
    name: "ISO 27001",
    status: "In Progress",
    lastCheck: "2024-02-01",
  },
];

export const SecuritySection = () => {
  const handleDownloadReport = () => {
    // In a real application, this would trigger a download of the actual audit report
    toast.success("Audit report download started");
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Security & Compliance</h1>
        <p className="text-muted-foreground">
          Manage security settings and compliance requirements
        </p>
      </div>

      <Tabs defaultValue="rbac" className="space-y-4">
        <TabsList>
          <TabsTrigger value="rbac">RBAC Settings</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="audit">Security Audits</TabsTrigger>
        </TabsList>

        <TabsContent value="rbac" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Card key={role.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {role.name}
                  </CardTitle>
                  <CardDescription>
                    {role.users} active users
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Permissions:</div>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission) => (
                        <Badge key={permission} variant="secondary">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.map((framework) => (
              <Card key={framework.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    {framework.name}
                  </CardTitle>
                  <CardDescription>
                    Last checked: {framework.lastCheck}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge 
                    variant={framework.status === "Compliant" ? "success" : "warning"}
                  >
                    {framework.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Latest Security Audit
              </CardTitle>
              <CardDescription>
                Last audit completed on 2025-01-05
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Key Findings:</div>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>All security protocols are up to date</li>
                  <li>SSL/TLS encryption properly configured</li>
                  <li>Access controls properly implemented</li>
                  <li>Regular security updates maintained</li>
                </ul>
              </div>
              <Button onClick={handleDownloadReport}>
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};