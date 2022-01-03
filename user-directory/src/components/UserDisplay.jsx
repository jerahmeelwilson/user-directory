import React, { useState } from "react";
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

  
  let user = users[currentUser];
  
  if(addNewUser){
      return <NewUserForm></NewUserForm>
  }
  return (
    <div>
      <UserInfo addNewUser={addNewUser} user={user} users={users} currentUser={currentUser}></UserInfo>
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
