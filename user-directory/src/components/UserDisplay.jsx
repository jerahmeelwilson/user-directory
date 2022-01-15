import React, { useState } from "react";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import NewUserForm from "./NewUserForm";
import EditUserInfo from "./EditUserInfo";
export default function UserDisplay({
  users,
  setUsers,
  currentUser,
  setCurrentUser,
}) {
  const [addNewUser, setAddNewUser] = useState(false);
  const [newID, setNewID] = useState(26);
  const [editUser,setEditUser] = useState(false);
  let user = users[currentUser];
  
  if(editUser){
    return <EditUserInfo user={user} users={users} setEditUser={setEditUser} setUsers={setUsers}>
    </EditUserInfo>
  }

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
        editUser={editUser}
        setEditUser={setEditUser}
      ></Navbar>
    </div>
  );
}
