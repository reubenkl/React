import Employee from "./components/Employee";
import { useState } from 'react';


function App() {
  const allowAccess = true;
  const [role, setRole] = useState("Developer"); 
  return (
    <div>
      { allowAccess ?
      <>
      <input 
            type="text" 
            onChange={(e) =>{
                console.log(e.target.value)
                setRole(e.target.value);
            }} />
        <Employee name="Reuben" role="Intern"/>
        <Employee name="Prafulla" role={role}/>
        <Employee name="Frankenstein"/>
      </>
      :
      <p> You don't have access</p>
    }
    </div>
  );
}

export default App;