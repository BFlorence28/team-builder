import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
// import React, { useState } from "react";

const NewMemberForm = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(teamMember);
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter Member name"
        name="name"
        onChange={handleChanges}
        value={teamMember.name}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Enter Member email"
        name="email"
        onChange={handleChanges}
        value={teamMember.email}
      />
      <label htmlFor="team-role">Class</label>
      <input
        id="role"
        type="text"
        placeholder="Enter Team role"
        name="role"
        onChange={handleChanges}
        value={teamMember.role}
      />

      <button type="submit">Add Star Wars Characters</button>
    </form>
  );
};

export default NewMemberForm;



// const Form = props => {
//     const [user, setUser] = useState({ name: "", email: "", role: ""});
//     // let userCount = 0;
//     const handleChange = event => {
//         setUser({ ...user, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//         props.setUserArray([...props.usersArray, user]);
//         // console.log("users array", props.usersArray);
//         // console.log(user.name);
//         // console.log(user.email);
//         // console.log(user.role);
//     };

//     return (
//         <div className="App">
//             <form onSubmit={event => handleSubmit(event)}>
//                 <label>
//                     Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={user.name}
//                         onChange={event =>handleChange(event)}
//                         />
//                 </label>
//                 <label>
//                     Email:
//                     <input
//                         type="text"
//                         name="email"
//                         value={user.email}
//                         onChange={event =>handleChange(event)}
//                         />
//                 </label>
//                 <label>
//                     Role:
//                     <input
//                         type="text"
//                         name="role"
//                         value={user.role}
//                         onChange={event =>handleChange(event)}
//                         />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Form;