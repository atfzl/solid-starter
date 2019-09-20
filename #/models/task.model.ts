export interface TaskModel {
  id: string;
  text: string;
  checklists: Array<{ text: string }>;
  note?: string;
  tags: Record<string, true>;
  scheduledDate?: Date;
  projectId?: string;
  superTags: Record<string, true>;
  checked?: boolean;
}

export interface TagModel {
  text: string;
  active: boolean;
}
