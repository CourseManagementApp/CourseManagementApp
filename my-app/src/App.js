import './styles/App.css'
import handleSubmit from './firebase/handlesubmit';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/dashborad-v2/Dashboard';
import AddUserForm from './components/forms/AddUserForm';
import FileDropAndConverter from './components/FileDropAndConverter';
import { firebase, boardRef } from './firebase/firebase';
import { collection, addDoc } from "firebase/firestore"; 





let test = async () => {
  try {
    const docRef = await addDoc(collection(firebase, "test"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
};


function App() { 
 

 
  return (
    // <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="dashboard/*" element={<Dashboard />} /> 
    //       <Route path="*" element={<Home />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>

    <div>
<button onClick={test} label="Click me!">test</button>

    </div>

  );
}

 
export default App;