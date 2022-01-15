import React,{useState} from "react";
import './UserInfo.css'
export default function EditUserInfo({users,user,setUsers,setEditUser}) {
    const [edittedUser, setEdittedUser] = useState({...user
      });

    function handleSubmit(event){
        event.preventDefault();
        let newUsers = users.map((elem) => {
            if(elem.id===edittedUser.id){
                elem = edittedUser;
            }
            return elem;
        })
        setUsers(newUsers);
        setEditUser(false);
    }

    function handleInput(event) {
        switch (event.target.id) {
            case "first":
                setEdittedUser({
                ...edittedUser,
                name: {
                  ...edittedUser.name,
                  first: event.target.value,
                },
              });
              break;
            case "last":
                setEdittedUser({
                ...edittedUser,
                name: {
                  ...edittedUser.name,
                  last: event.target.value,
                },
              });
              break;
            case "city":
                setEdittedUser({
                ...edittedUser,
                city: event.target.value,
              });
              break;
            case "country":
                setEdittedUser({
                ...edittedUser,
                country: event.target.value,
              });
              break;
            case "employer":
                setEdittedUser({
                ...edittedUser,
                employer: event.target.value,
              });
              break;
            case "title":
                setEdittedUser({
                ...edittedUser,
                title: event.target.value,
              });
              break;
            case "movie1":
                setEdittedUser({
                ...edittedUser,
                favoriteMovies: edittedUser.favoriteMovies.map((elem, index) => {
                  if (index === 0) {
                    return elem = event.target.value;
                  }
                  return elem;
                }),
              });
              break;
            case "movie2":
                setEdittedUser({
                ...edittedUser,
                favoriteMovies: edittedUser.favoriteMovies.map((elem, index) => {
                  if (index === 1) {
                    return elem = event.target.value;
                  }
                  return elem;
                }),
              });
              break;
            case "movie3":
                setEdittedUser({
                ...edittedUser,
                favoriteMovies: edittedUser.favoriteMovies.map((elem, index) => {
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
      return (
        <div>
          <form>
            <label htmlFor="first">First Name:</label>
            <input value={edittedUser.name.first} onChange={handleInput} id="first" type="text" />
            <br />
            <label htmlFor="last">Last Name:</label>
            <input value={edittedUser.name.last}onChange={handleInput} id="last" type="text" />
            <br />
            <label htmlFor="city">City:</label>
            <input value={edittedUser.city}onChange={handleInput} id="city" type="text" />
            <br />
            <label htmlFor="country">Country:</label>
            <input value={edittedUser.country} onChange={handleInput} id="country" type="text" />
            <br />
            <label htmlFor="employer">Employer:</label>
            <input value={edittedUser.employer} onChange={handleInput} id="employer" type="text" />
            <br />
            <label htmlFor="title">Title:</label>
            <input value={edittedUser.title} onChange={handleInput} id="title" type="text" />
            <br />
            <label htmlFor="first-name">Favorite Movies:</label>
            <br />
            <input value={edittedUser.favoriteMovies[0]}onChange={handleInput} id="movie1" type="text" />
            <br />
            <input value={edittedUser.favoriteMovies[1]} onChange={handleInput} id="movie2" type="text" />
            <br />
            <input value={edittedUser.favoriteMovies[2]} onChange={handleInput} id="movie3" type="text" />
            <br />
            <button onClick={handleSubmit}>Edit</button>
          </form>
        </div>
      );
}
