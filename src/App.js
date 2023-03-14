import { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'


function App() {

const [registerEmail, setRegisterEmail] = useState("")
const [registerPassword, setRegisterPassword] = useState("")
const [loginEmail, setLoginEmail] = useState("")
const [loginPassword,setLoginPassword] = useState("")



  //creating the functions that'll be used in our project
  //first function
  //register: used to register a user 
  const register = async () =>{

    try
    {
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
      console.log(user)
    }
    catch (error)
    {

      console.log(error.message)
    }



  };

  //second function
  //login: used to login a user 
  const login =async () =>{


  };
  //third function
  //login: used to logout a user
  const logout =async  () => {


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

        <button> Login </button>
        </div>
        <h4> User Logged in </h4>
        {auth.currentUser.email}

        <button> Sign out</button>

    </div>

       
);
}


export default App;
