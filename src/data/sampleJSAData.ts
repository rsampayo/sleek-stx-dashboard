import { CompletedJSA } from "@/types/jsa";

export const sampleCompletedJSAs: CompletedJSA[] = [
  {
    id: "jsa-001",
    name: "Excavation Safety Assessment",
    description: "Safety assessment for trench excavation work",
    jobTitle: "Construction Worker",
    sections: [
      {
        id: "section-1",
        title: "Pre-Work Inspection",
        items: [
          {
            id: "item-1",
            text: "Has the area been marked for underground utilities?",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-2",
            text: "Is proper shoring equipment available?",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      },
      {
        id: "section-2",
        title: "PPE Requirements",
        items: [
          {
            id: "item-3",
            text: "Hard hat",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-4",
            text: "Safety boots",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      }
    ],
    completedBy: "John Smith",
    completedAt: new Date("2024-03-15T09:00:00"),
    status: "completed"
  },
  {
    id: "jsa-002",
    name: "Working at Heights Assessment",
    description: "Safety assessment for roofing work",
    jobTitle: "Roofer",
    sections: [
      {
        id: "section-3",
        title: "Fall Protection",
        items: [
          {
            id: "item-5",
            text: "Fall arrest system inspected?",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-6",
            text: "Anchor points verified?",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      }
    ],
    completedBy: "Sarah Johnson",
    completedAt: new Date("2024-03-14T14:30:00"),
    status: "pending"
  },
  {
    id: "jsa-003",
    name: "Electrical Work Safety",
    description: "Safety assessment for electrical maintenance",
    jobTitle: "Electrician",
    sections: [
      {
        id: "section-4",
        title: "Lock Out/Tag Out",
        items: [
          {
            id: "item-7",
            text: "Power source identified and isolated?",
            type: "yesNoNA",
            response: "Yes"
          },
          {
            id: "item-8",
            text: "Lock out devices applied?",
            type: "yesNoNA",
            response: "Yes"
          }
        ]
      }
    ],
    completedBy: "Mike Wilson",
    completedAt: new Date("2024-03-13T11:15:00"),
    status: "completed"
  }
];