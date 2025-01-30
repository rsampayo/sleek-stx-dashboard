export type Permission = {
  module: string;
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

export type Role = {
  id: string;
  title: string;
  standardHours: number;
  overtimeLimit: number;
  hourlyRate: number;
  overtimeRate: number;
  permissions: Permission[];
};

export const defaultModules = [
  "dashboard",
  "analytics",
  "geofence",
  "userManagement",
  "equipment",
  "tasks",
  "notifications",
  "security",
  "integrations",
  "monitoring",
  "jsa",
  "roleAdmin"
];

const defaultPermissions: Permission[] = defaultModules.map(module => ({
  module,
  canView: false,
  canEdit: false,
  canDelete: false,
}));

export const roles: Role[] = [
  {
    id: "site-manager",
    title: "Site Manager",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 45,
    overtimeRate: 67.5,
    permissions: defaultModules.map(module => ({
      module,
      canView: true,
      canEdit: true,
      canDelete: true,
    })),
  },
  {
    id: "safety-officer",
    title: "Safety Officer",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 35,
    overtimeRate: 52.5,
    permissions: defaultPermissions,
  },
  {
    id: "equipment-operator",
    title: "Equipment Operator",
    standardHours: 8,
    overtimeLimit: 12,
    hourlyRate: 30,
    overtimeRate: 45,
    permissions: defaultPermissions,
  },
  {
    id: "maintenance-technician",
    title: "Maintenance Technician",
    standardHours: 8,
    overtimeLimit: 12,
    hourlyRate: 28,
    overtimeRate: 42,
    permissions: defaultPermissions,
  },
  {
    id: "field-supervisor",
    title: "Field Supervisor",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 40,
    overtimeRate: 60,
    permissions: defaultPermissions,
  },
  {
    id: "general-worker",
    title: "General Worker",
    standardHours: 8,
    overtimeLimit: 12,
    hourlyRate: 25,
    overtimeRate: 37.5,
    permissions: defaultPermissions,
  },
];

export const getRoleByTitle = (title: string): Role | undefined => {
  return roles.find((role) => role.title === title);
};

export const getRoleById = (id: string): Role | undefined => {
  return roles.find((role) => role.id === id);
};