import React, {useState} from 'react';
import ReactDOM from "react-dom";
import NewMemberForm from "./Form"
import Team from "./SavedTeam";
import './App.css';
console.log(App)
function App() {
  const [teamMember, setTeamMember] = useState([
    
    {
      id: 1,
      name: "Luke",
      email: "skywalker@gmail.com",
      role: "Jedi"
        
    },
    {
      id: 2,
      name: "BabyYoda",
      email: "MasterJedi@gmail.com",
      role: "Mandos BFF"
        
    } , 
    {
      id: 3,
      name: "Mando",
      email: "Mandolorian@gmail.com",
      role: "Bounty Hunter"
        
    }
    
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
     <NewMemberForm addNewMember ={addNewMember}/>
     <Team teamMember={teamMember} />
    </div>
  );
}
export default App;
















// // const userList = [
// //   "Luke Skywalker",
// //   "Baby Yoda",
// //   "Mando",

// // ];

// // const 
// // {
// // id 1, 
// // Name: "Luke"
// // Email: "skywalker@gmail.com"
// // Role: "Jedi Master"
// // }

// // const addNewMember = member => {

// // }



// function App() {
//   const [usersArray, setUsersArray] = useState([]);
//   const memberToEdit = props => {
//     // console.log("props", props);
//   }
 
// //   const handleSubmit = event => {
// //     event.preventDefault();
// //     props.setUserArray([...props.usersArray, user]);
// //     // console.log("users array", props.usersArray);
// //     // console.log(user.name);
// //     // console.log(user.email);
// //     // console.log(user.role);
// // };

//   return (
//     <div className="container">
//       <Form usersArray={usersArray} setUsersArray={setUsersArray} />
//       {usersArray.map(user => (
//         <Card user={user} memberToEdit={memberToEdit} />
//         ))}
// //       </div>
// //   );
// // }

// export default App;
