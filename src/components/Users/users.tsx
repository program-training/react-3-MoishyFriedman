import { useEffect, useState } from "react";
import Card from "../Card/card";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export default function UsersFromServer(): JSX.Element {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const getUsers = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!getUsers.ok) {
          throw new Error("server error");
        }
        const users: User[] = await getUsers.json();
        setUser(users);
      } catch (error) {
        if (error instanceof Error) console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {user.map((user) => (
        <Card name={user.name} email={user.email} id={user.id} key={user.id} />
      ))}
    </div>
  );
}
