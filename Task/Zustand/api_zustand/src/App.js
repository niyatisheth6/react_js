import { useEffect } from "react";
import useStore from "./useStore/store";
import List from "./components/List";

function App() {
  const { users, getUsers } = useStore();

  useEffect(() => {
    getUsers();
  });
  return (
    <div className="container">
      {users &&
        users.map((user) => {
          return (
            <>
              <List key={user.id} user={user} />
            </>
          );
        })}
    </div>
  );
}

export default App;
