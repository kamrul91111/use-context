import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
// context
import {UserContext} from "./Context/UserContext";

const App = () => {
  const [user, setUser] = useState(null); //change initial state of usecontext (initially no user)

  return (
    <Router>
      {/* nav bar */}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      {/* paths */}
      <Switch>
        {/* provide context, setvalue is a func we can use to change value */}
        <UserContext.Provider value={{user, setUser}}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
