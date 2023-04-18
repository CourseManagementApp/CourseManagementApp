import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "../../Pages/Employee";
import Dashboard from "../../Pages/Dashbaord";
import Courses from "../../Pages/Courses";
import Orders from "../../Pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/Courses" element={<Employee />}></Route>
      <Route path="/Database" element={<Orders />}></Route>
      <Route path="/Settings" element={<Courses />}></Route>
    </Routes>
  );
}
export default AppRoutes;
