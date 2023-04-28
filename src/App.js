import { Space } from "antd";
import React from "react"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Container} from "react-bootstrap"
import { AuthProvider } from "./Components/Authentication/AuthContext";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Signup from "./Components/Authentication/Signup";

function App() {
  return (

    

   
    <Container className="d-flex align-items-center justify-content-center"
      style ={{minHeight:"100vh"}}
      >
     <div className="w-100" style ={{maxWidth :"400px"}}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path = "/signup" Component={Signup}/>
          </Routes>

        </AuthProvider>

      </Router>
    </div>
    </Container>
    
    
    
  );
}
export default App;
