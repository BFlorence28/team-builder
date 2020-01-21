import React from "react";

const Team = props => {
  console.log(props.teamMember)
  return (
    <div className="team-list">
      {props.teamMember.map(member => (
           <div className="team" key={member.id}>
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
          </div>
      ))}
      </div>
  );
};

export default Team;



// import React from "react";

// const Card = props => {
//     if (
//         props.user.name === "" ||
//         props.user.email === "" ||
//         props.user.role === ""
//     ){
//     alert("Field is empty, please adjust it and try again");
//     return <></>;
//     }
//     return (
//         <div class="card">
//             <h3>{props.user.name}</h3>
//             <h5>{props.user.role}</h5>
//             <h7>{props.user.email}</h7>
//             <button>Edit</button>
//         </div>
//     );
// };

// export default Card;