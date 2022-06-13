import React, { useState,Fragment } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
         { name: uName, age: uAge , id: Math.random().toString()},
        ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
