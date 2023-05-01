
import { useLocation } from "react-router-dom";
import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Dashboard from "./Pages/Dashbaord";
import Courses from "./Pages/Courses";
import Settings from "./Pages/Settings";
import Database from "./Pages/Database";
import TaRegistrationForm from "./Components/Authentication/Registration/RegistrationFormTA";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/Authentication/AuthContext";
import React, { useMemo, useState, useEffect } from 'react';

import { AuthDetails } from "./Components/Authentication/Registration/AuthDetails";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthView from "./Components/Authentication/Registration/AuthView";


function App() {
  const location = useLocation();
  const isAuth = location.pathname.includes("/Auth");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }




  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        {!isAuth && <SideMenu />}
        <div className="PageContent">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Database" element={<Database />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Auth/TA-registration" element={<TaRegistrationForm />} />
            <Route path = "/Auth" element={<AuthView/>}/>
          </Routes>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
