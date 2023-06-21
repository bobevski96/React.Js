import { useState } from "react";
import './RegistrationForm.css'
const RegistartionForm=()=>{

    const [fullName, setName] = useState('');
    const [password, setPass] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) =>{
        console.log("Event",event.value)
        setName(event)
        setPass(event)
        
    }
    // console.log(fullName, password,email)

    return(
        <div className="returnDiv">
            <h2>Sing up</h2>
            <div className="fromDiv">
                
                <input className="inputClass" onClick={setName}
                id="name"
                value={fullName}
                type="text"
                placeholder="Enter name"
                />
                
                <input className="inputClass" onClick={setPass}
                  id="password"
                  value={password}
                type="password"
                placeholder="Enter password"
                />
                
                <input className="inputClass" onClick={setEmail}
                  id="email"
                  value={email}
                type="email"
                placeholder="Enter E-mail"
                />
            </div>
            <button className="btnSubmit" onClick={(event)=>handleSubmit(event)}>Submit</button>

        </div>
    )
    
}

export default RegistartionForm;