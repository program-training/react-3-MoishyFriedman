import "./cardStyle.css";
import { useEffect, useState } from "react";
import { TodoListInfo, TodoList } from "../TodoLIst/todoList";

interface CardInfo {
  id: number;
  name: string;
  email: string;
}

export default function Card(userCard: CardInfo): JSX.Element {
  const [list, setList] = useState<TodoListInfo[]>([]);
  const [check, setCheck] = useState<boolean>(false);

  const handlerClick = async (): Promise<void> => {
    setCheck(true);
    try {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos?userId=" + userCard.id
      );
      if (!result.ok) {
        throw new Error("server error");
      }
      const todo: TodoListInfo[] = await result.json();
      const filter = todo.slice(0, 5);
      setList(filter);
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  };

  return (
    <div id="card" onClick={handlerClick}>
      <h3>name: {userCard.name}</h3>
      <h3>email: {userCard.email}</h3>
      {check &&
        list.map((task) => (
          <TodoList
            key={task.id}
            userId={task.userId}
            id={task.id}
            title={task.title}
            completed={task.completed}
          />
        ))}
    </div>
  );
}
