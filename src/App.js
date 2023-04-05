import { useState } from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from './firebase-config'
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { getDocs } from "firebase/firestore";



function App() {

const [registerEmail, setRegisterEmail] = useState("")
const [registerPassword, setRegisterPassword] = useState("")
const [loginEmail, setLoginEmail] = useState("")
const [loginPassword,setLoginPassword] = useState("")
const [userRole, setUserRole] = useState(null) // add state for user role



const colRef = collection(db,'user')
getDocs(colRef)
.then((snapshot)=>{
  let users = []
  snapshot.docs.forEach((doc)=>{y
    users.push({...doc.data(), id: doc.id})


  })
  console.log(users)
})
.catch(err=> {
console.log(err)

})



  //creating the functions that'll be used in our project
  //first function
  //register: used to register a user 
  const [user,setUser] = useState({})

  const handleRoleSelection = (role) => {
    setUserRole(role); // set user role state based on button click
  }

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)


    
    


  })
  const register = async () =>{

    try
    {
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
      await addDoc(collection(db, "users"), {
        name: user.user.email,
        role: userRole // save user role to database
      });
    }
    catch (error)
    {

      console.log(error.message)
    }



  };

  //second function
  //login: used to login a user 
  const login = async () =>{

    try
    {
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
      console.log(user)
    }
    catch (error)
    {

      console.log(error.message)
    }



  };
  //third function
  //login: used to logout a user
  const logout =async  () => {
    await signOut(auth)


  };
  return (
    <div className="App"> 
      <div>

        <h3> Register User </h3>
        <input placeholder='Email...'onChange={(event)=>{
          setRegisterEmail(event.target.value)
        }}
        
        />
        <input placeholder='Password...'onChange={(event)=>

        {
          setRegisterPassword(event.target.value)


        }
        
      
      
      }
        
        
        
        />

        <div>
          <button onClick={() => handleRoleSelection('TA')}>TA</button> // add TA button
          <button onClick={() => handleRoleSelection('Professor')}>Professor</button> // add Professor button
        </div>

        <button onClick={(register)}>Create User  </button>
      </div>



        <div>

        <h3> Login </h3>
        <input placeholder='Email...' onChange={(event)=>{
        setLoginEmail(event.target.value)


      }
    }
    />
        <input placeholder='Password...'onChange={(event)=>
        {
          setLoginPassword(event.target.value)


        }}
        
        
        />

        <button onClick={login}> Login </button>
        </div>
        <h4> User Logged in </h4>
        {user && user.email}
        <button onClick={logout}> Sign out</button>

    </div>

       
);
}


export default App;
