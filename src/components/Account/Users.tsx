import { useEffect, useState } from "react";

type User = {
  id: number;
  username: string;
  password: string;
  country: string;
};

const BASE_URL = "http://localhost:3000";
function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      if (!response.ok) {
        throw new Error(`HTTP Error! ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      throw new Error(
        `An error occurred: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Users</h2>
      {users.map((user, index) => (
        <div key={index}>
          {user.id} -{user.username} - {user.country}
        </div>
      ))}
    </div>
  );
}

export default Users;
