import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState();

  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    const users = await fetch('http://localhost:5000/users')
      .then(res => res.json());
    setUsers(users);
  }

  useEffect(()=>{
    fetchUsers();
  }, []);

  let post = (data) => {
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
  }

  const addNewUser = (newUser) => {
    post(newUser);
    setUsers([...users, newUser]);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        loggedInUser,
        setLoggedInUser,
        addNewUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;