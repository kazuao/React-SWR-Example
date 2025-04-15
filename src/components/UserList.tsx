import useSWR from "swr";
import { User } from "../types/user";
import { fetcher } from "../api/fetcher";

export const UserList = () => {
  const { data, error, isLoading } = useSWR<User[]>("https://jsonplaceholder.typicode.com/users", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  )
}
