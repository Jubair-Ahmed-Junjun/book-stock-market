import React from 'react';
import expert1 from "../../../../images/experts/expert-1.jpg";
import expert2 from "../../../../images/experts/expert-2.jpg";
import expert3 from "../../../../images/experts/expert-3.jpg";
import expert4 from "../../../../images/experts/expert-4.jpg";
import expert5 from "../../../../images/experts/expert-5.jpg";
import expert6 from "../../../../images/experts/expert-6.png";
import Expert from "../Supplier/Supplier";
const Suppliers = () => {
    const experts = [
        { id: 1, name: "Kerl Anderson", designation: "CEO", img: expert1 },
        { id: 2, name: "Nabil Ashraf", designation: "Sr. Manager", img: expert2 },
        { id: 3, name: "Sohail Alam", designation: "jr. Manager", img: expert3 },
        {
          id: 4,
          name: "Rafat Hossain",
          designation: "Information Provider",
          img: expert4,
        },
        { id: 5, name: "Hero Alam", designation: "Account handler", img: expert5 },
        { id: 6, name: "Naim Shahed", designation: "Operator", img: expert6 },
      ];
    return (
        <div className="container">
        <h1 className="text-secondary text-center mt-5">Team Members</h1>
        <div className="row">
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert}></Expert>
          ))}
        </div>
      </div>
    );
};

export default Suppliers;