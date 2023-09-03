export interface TodoListInfo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function TodoList(list: TodoListInfo): JSX.Element {
  return (
    <ul id="list">
      <li>{list.userId}</li>
      <li>{list.id}</li>
      <li>{list.title}</li>
      <li>{list.completed}</li>
    </ul>
  );
}
