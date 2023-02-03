import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState(false);
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    const users = await fetch('http://localhost:5000/users')
      .then(res => res.json());
    setUsers(users);
  }

  useEffect(()=>{
    fetchUsers();
  }, []);


  return (
    <UserContext.Provider
      value={{
        users,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;