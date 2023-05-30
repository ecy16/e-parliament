
import './Member.css';
import { Link } from "react-router-dom";

import React, { useState } from "react";

function MemberManagement() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewMember({ ...newMember, [name]: value });
  }

  function handleAddMember(event) {
    event.preventDefault();
    setMembers([...members, newMember]);
    setNewMember({});
  }

  return (
    <div className='member-container'>
      <div className='member-form-body'>
        <h1>REGISTRATION</h1>
        <span>
          <h2>
            <Link to="/LoginPage">Login</Link>
          </h2>
        </span>
        <form onSubmit={handleAddMember}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newMember.name || ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Position:
            <input
              type="text"
              name="position"
              value={newMember.position || ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Party:
            <input
              type="text"
              name="party"
              value={newMember.party || ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={newMember.contact || ""}
              onChange={handleInputChange}
            />
          </label>
<label>
 
</label>

          <button type="submit">Register</button>


        </form>
        <h2></h2>
        {members && members.map((member, index) => (
          <div key={index} >
            <h3>{member.name}</h3>
            <p>Position: {member.position}</p>
            <p>Party: {member.party}</p>
            <p>Contact: {member.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberManagement;
