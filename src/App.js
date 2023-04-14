// import { Route, Routes, Link } from "react-router-dom"
// import AuthenticationComponent from "./components/pages/AuthenticationComponent";
// import RegistrationForm from "./components/pages/AplicationComponent/RegistrationFormTA";

// function App() {
//   return (
//     <RegistrationForm/>
//   )
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationComponent from "./components/pages/AuthenticationComponent";
import TaRegistrationForm from "./components/pages/AplicationComponent/RegistrationFormTA";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={AuthenticationComponent} />
        <Route exact path="/ta-register" component={TaRegistrationForm} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;