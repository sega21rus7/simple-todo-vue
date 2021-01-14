export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoObjType {
  [id: number]: TodoType,
}