import React, {useContext} from "react";
import {UserContext} from "./../Context/UserContext";

const About = () => {
  const {user, setUser} = useContext(UserContext); //use the user context generated in usercontext

  return (
    <div>
      <h2>About</h2>
      <h4>{JSON.stringify(user)}</h4>
      {/* log out the user, show logout button when user logged in */}
      {user ? (
        <button onClick={() => setUser(null)}>logout</button>
      ) : (
        <h2>no user</h2>
      )}
    </div>
  );
};

export default About;
