export type Role = {
  id: string;
  title: string;
  standardHours: number;
  overtimeLimit: number;
  hourlyRate: number;
  overtimeRate: number;
};

export const roles: Role[] = [
  {
    id: "site-manager",
    title: "Site Manager",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 45,
    overtimeRate: 67.5,
  },
  {
    id: "safety-officer",
    title: "Safety Officer",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 35,
    overtimeRate: 52.5,
  },
  {
    id: "equipment-operator",
    title: "Equipment Operator",
    standardHours: 8,
    overtimeLimit: 12,
    hourlyRate: 30,
    overtimeRate: 45,
  },
  {
    id: "maintenance-technician",
    title: "Maintenance Technician",
    standardHours: 8,
    overtimeLimit: 12,
    hourlyRate: 28,
    overtimeRate: 42,
  },
  {
    id: "field-supervisor",
    title: "Field Supervisor",
    standardHours: 8,
    overtimeLimit: 10,
    hourlyRate: 40,
    overtimeRate: 60,
  },
  {
    id: "general-worker",
    title: "General Worker",
    standardHours: 8,
    overtimeLimit: 12,
    hourlyRate: 25,
    overtimeRate: 37.5,
  },
];

export const getRoleByTitle = (title: string): Role | undefined => {
  return roles.find((role) => role.title === title);
};

export const getRoleById = (id: string): Role | undefined => {
  return roles.find((role) => role.id === id);
};