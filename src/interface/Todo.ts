export type TodoStatus = 'en cours' | 'terminé';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  status: TodoStatus;
}

export interface ITodoItemProps {
  todo: ITodo;
  onDelete: (id: number) => void;
}

export interface ITodoFormProps {
  onAdd: (title: string, status: TodoStatus) => void;
}
