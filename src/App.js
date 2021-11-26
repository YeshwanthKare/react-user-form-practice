import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const userList = [
  {
    uName: "Max",
    uAge: 31,
    id: "g1",
  },
];

function App() {
  const [enteredUserDetails, setEnteredUserDetails] = useState(userList);

  const userDetails = (uName, uAge) => {
    setEnteredUserDetails((prevDetails) => {
      return [{ uName, uAge, id: Math.random().toString() }, ...prevDetails];
    });
  };

  return (
    <div>
      <AddUser userDetails={userDetails} />
      <UserList users={enteredUserDetails} />
    </div>
  );
}

export default App;
