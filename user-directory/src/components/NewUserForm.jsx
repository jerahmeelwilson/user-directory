import React, { useState } from "react";

export default function NewUserForm() {
  const [newUser, setNewUser] = useState({
    id: null,
    name: { first: "", last: "" },
    city: "",
    country: "",
    title: "",
    favoriteMovies: ['','',''],
  });
  
  function handleSubmit(event) {
    console.log("submitting");
  }
  
  function handleInput(event) {
    switch (event.target.id) {
      case "first":
        setNewUser({
          ...newUser,
          name: {
            ...newUser.name,
            first: event.target.value,
          },
        });
        break;
      case "last":
        setNewUser({
          ...newUser,
          name: {
            ...newUser.name,
            last: event.target.value,
          },
        });
        break;
      case "city":
        setNewUser({
          ...newUser,
          city: event.target.value,
        });
        break;
      case "country":
        setNewUser({
          ...newUser,
          country: event.target.value,
        });
        break;
      case "employer":
        setNewUser({
          ...newUser,
          employer: event.target.value,
        });
        break;
      case "title":
        setNewUser({
          ...newUser,
          title: event.target.value,
        });
        break;
      case "movie1":
        setNewUser({
          ...newUser,
          favoriteMovies: newUser.favoriteMovies.map((elem, index) => {
            if (index === 0) {
              return elem = event.target.value;
            }
            return elem;
          }),
        });
        break;
      case "movie2":
        setNewUser({
          ...newUser,
          favoriteMovies: newUser.favoriteMovies.map((elem, index) => {
            if (index === 1) {
              return elem = event.target.value;
            }
            return elem;
          }),
        });
        break;
      case "movie3":
        setNewUser({
          ...newUser,
          favoriteMovies: newUser.favoriteMovies.map((elem, index) => {
            if (index === 2) {
              return elem = event.target.value;
            }
            return elem;
          }),
        });
        break;

      default:
    }
  }
  console.log(newUser)
  return (
    <div>
      <form>
        <label htmlFor="first">First Name:</label>
        <input onChange={handleInput} id="first" type="text" />
        <br />
        <label htmlFor="last">Last Name:</label>
        <input onChange={handleInput} id="last" type="text" />
        <br />
        <label htmlFor="city">City:</label>
        <input onChange={handleInput} id="city" type="text" />
        <br />
        <label htmlFor="country">Country:</label>
        <input onChange={handleInput} id="country" type="text" />
        <br />
        <label htmlFor="employer">Employer:</label>
        <input onChange={handleInput} id="employer" type="text" />
        <br />
        <label htmlFor="title">Title:</label>
        <input onChange={handleInput} id="title" type="text" />
        <br />
        <label htmlFor="first-name">Favorite Movies:</label>
        <br />
        <input onChange={handleInput} id="movie1" type="text" />
        <br />
        <input onChange={handleInput} id="movie2" type="text" />
        <br />
        <input onChange={handleInput} id="movie3" type="text" />
        <br />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
