export type JSAItemType = "yesNoNA" | "text";

export interface JSAItem {
  id: string;
  text: string;
  type: JSAItemType;
  response?: string;
}

export interface JSASection {
  id: string;
  title: string;
  items: JSAItem[];
}

export interface JSAChecklist {
  id: string;
  name: string;
  description: string;
  jobTitle: string;
  sections: JSASection[];
}

export interface CompletedJSA extends JSAChecklist {
  completedBy: string;
  completedAt: Date;
  signature?: string;
  status: 'completed' | 'pending_signature';
}