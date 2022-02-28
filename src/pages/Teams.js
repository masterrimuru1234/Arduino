import Team from "./Team";
import React from "react";
import "./style.css";
const data = [
  {
    name: "Roshan Rajesh",
    roll: "119EI0666",
  },
  {
    name: "Dharitri Mallik",
    roll: "119EI0658",
  },
  {
    name: "Mugdha Madhulika",
    roll: "119EI0283",
  },
  { name: "Priya Kumari", roll: "119EI0656" },

  { name: "Rithik Devendran", roll: "118EI0358" },
];
function Teams(props) {
  return (
    <div className="card-category-1">
      <h1>Group 13</h1>
      {data.map((ele) => {
        const { name, roll } = ele;
        return <Team name={name} roll={roll} />;
      })}
    </div>
  );
}
export default Teams;
