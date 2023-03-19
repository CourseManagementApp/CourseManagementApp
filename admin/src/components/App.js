import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";
import TAForm from "../firebase/StudentForm";

// context
import { useUserState } from "../context/UserContext";
import Index from "../pages/tables/FileDropAndConverter";
import CreateTable from "../pages/dashboard/CreateTable";
import CSVReader from "../pages/tables/FileDropAndConverter";
import GroupOfCards from "../pages/dashboard/databaseList";
import UserTable from "../pages/advancedForm";
import CourseTable from "../pages/advancedForm";
import InstructorTable from "../pages/dashboard/components/Table/InstructorTable";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        
        <PublicRoute path="/login" component={Login} />
        <Route  path="/Course-Table">
          <CourseTable/>
        </Route>
        <Route exact path="/TA-Table" render={() => <CourseTable/>} />
        <Route exact path="/Instructor-Table" render={() => <CourseTable />} />

        <Route component={Error} />

      </Switch>

      
  </HashRouter>

  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
