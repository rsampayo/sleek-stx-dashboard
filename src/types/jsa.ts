export type JSAItemType = "yesNoNA" | "text";

export interface JSAItem {
  id: string;
  text: string;
  type: JSAItemType;
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