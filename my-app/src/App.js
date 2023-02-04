import './App.css';
import handleSubmit from './components/handlesubmit';
import { useRef } from 'react';
import Dashboard from './dashboard/Dashboard'
import BasicTable from './dashboard/BasicTable';
function App() {
  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
 
  return (
    <div className="App">
{/*       <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form> */}
<Dashboard/>
        </div>
  );
}
 
export default App;