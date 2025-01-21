import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const IntegrationSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Integrations</h1>
        <p className="text-muted-foreground">
          Connect and manage your integrations with third-party systems.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Future Integration Possibilities</CardTitle>
          <CardDescription>
            The following integrations are possible but are currently not in scope for this project:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                <li>QuickBooks - For accounting and financial management</li>
                <li>Gusto - For payroll and HR management</li>
                <li>Google Calendar - For scheduling and coordination</li>
                <li>Okta - For Single Sign-On (SSO) capabilities</li>
              </ul>
              <p className="mt-4 italic">
                Note: These integrations are not part of the current project scope and will be considered for future development phases.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};