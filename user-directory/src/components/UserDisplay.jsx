import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import NewUserForm from "./NewUserForm";
export default function UserDisplay({
  users,
  setUsers,
  currentUser,
  setCurrentUser,
}) {
  const [addNewUser, setAddNewUser] = useState(false);
  const [newID, setNewID] = useState(26);
  
  let user = users[currentUser];
  
  if(addNewUser){
      return <NewUserForm newID={newID} setNewID={setNewID} users={users} setAddNewUser={setAddNewUser} setUsers={setUsers}></NewUserForm>
  }
  return (
    <div>
      <UserInfo user={user} users={users} currentUser={currentUser}></UserInfo>
      <Navbar
        users={users}
        setUsers={setUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setAddNewUser={setAddNewUser}
      ></Navbar>
    </div>
  );
}
