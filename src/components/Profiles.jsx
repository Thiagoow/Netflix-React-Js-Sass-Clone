import React from "react";
//Components:
import users from "./Users";

const Profiles = () => {
  return (
    <>
      <div className="profiles">
        {users.map((user, index) => (
          <div className="user" key={index}>
            <a href="/home">
              <img src={user.photo} alt={user.name} />
              <p>{user.name}</p>
            </a>
          </div>
        ))}
      </div>
      <button className="btn">Manage Profiles</button>
    </>
  );
};

export default Profiles;
