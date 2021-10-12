import React, {useContext} from "react";
import {UserContext} from "./../Context/UserContext";

// dummy user details when logged in
const dummyDetails = {
  id: 5,
  name: "Kamrul",
};

const Home = () => {
  const {user, setUser} = useContext(UserContext); //use the user context generated in usercontext

  //   login function
  const login = () => {
    setUser(dummyDetails);
  };

  return (
    <div>
      <h2>Simple login using useContext</h2>
      <h4>{JSON.stringify(user)}</h4>
      <button onClick={login}>login</button>
    </div>
  );
};

export default Home;
