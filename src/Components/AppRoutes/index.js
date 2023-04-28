import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "../../Pages/Settings";
import Dashboard from "../../Pages/Dashbaord";
import Courses from "../../Pages/Courses";
import Settings from "../../Pages/Settings";
import Database from "../../Pages/Database";
import TaRegistrationForm from "../Authentication/Registration/RegistrationFormTA";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/Courses" element={<Courses />}></Route>
      <Route path="/Database" element={<Database />}></Route>
      <Route path="/Settings" element={<Settings />}></Route>
      <Route path="/TA-registration" element ={<TaRegistrationForm />}></Route>
    </Routes>
  );
}
export default AppRoutes;
