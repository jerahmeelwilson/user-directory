import React from "react";
import "./Navbar.css";
export default function Navbar({users,setUsers, currentUser, setCurrentUser, setAddNewUser,editUser,setEditUser }) {
  
  
  function nextUser(event) {
    if (currentUser + 1 >= users.length) {
      return null;
    } else {
      setCurrentUser(currentUser + 1);
    }
  }
  function previousUser(event) {
    if (currentUser <= 0) {
      return null
    } else {
      setCurrentUser(currentUser - 1);
    }
  }

  function deleteUser(event){
    let newUsers = users.filter((user,index) => {
      return index !== currentUser;
    });
    setUsers(newUsers);
    if(currentUser !==0){
      setCurrentUser(currentUser-1)
    }
  }

  return (
    <div className="btns">
      <button className="navBtn" onClick={previousUser}>{`< Previous`}</button>
      <div>
        <button onClick={()=>{setEditUser(true)}}className="frmBtn">Edit</button>
        <button onClick={deleteUser}className="frmBtn">Delete</button>
        <button onClick={() =>{setAddNewUser(true)}}className="frmBtn">New</button>
      </div>
      <button className="navBtn" onClick={nextUser}>{`Next >`}</button>
    </div>
  );
}
