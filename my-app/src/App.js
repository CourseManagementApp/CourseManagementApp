import './styles/App.css'
import handleSubmit from './firebase/handlesubmit';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/dashborad-v2/Dashboard';
function App() {
 

 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} /> 
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

 
export default App;