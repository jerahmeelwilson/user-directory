import React from "react";
import './UserInfo.css'
export default function UserInfo({users,user, currentUser}) {
  if(users.length === 0){
    return <h1>Empty!</h1>
  }
  return (
    <div className="userInfo">
      <h2 className="userCount">
        {currentUser+1}/{users.length}
      </h2>
      <h2 className="userName">
        {user.name.first} {user.name.last}
      </h2>
      <p>
        <span>From: </span>
        {user.city},{user.country}
      </p>
      <p>
        <span>Job Title: </span>
        {user.title}
      </p>
      <p>
        <span>Employer: </span>
        {user.employer}
      </p>
      <span>Favorite Movies: </span>
      <ol>
          {user.favoriteMovies.map((movie,index)=>{
              return <li key={index}>{movie}</li>
          })}
      </ol>
    </div>
  );
}
