import "./App.css";
import data from "./data";
import Header from "./components/Header";
import UserDisplay from "./components/UserDisplay";
import React, { useState } from "react";


function App() {
  const [users, setUsers] = useState(data);
  const [currentUser, setCurrentUser] = useState(0);
  return (
    <div className="App">
      <Header></Header>
      <UserDisplay users={users} setUsers={setUsers}
      currentUser={currentUser} setCurrentUser={setCurrentUser}></UserDisplay>
    </div>
  );
}

export default App;
