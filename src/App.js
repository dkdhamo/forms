import React, {useState} from 'react';

import './App.css';
 
function App() {
    const [name , setName] = useState('');
    const [regno , setregno] = useState('');
    const [dept , setdept] = useState('');
    const [email , setEmail] = useState('');
    const handleChange =(e)=>{
      setName(e.target.value);
    }

    const handleregnoChange =(e)=>{
      setregno(e.target.value);
    }
    const handledeptChange =(e)=>{
      setdept(e.target.value);
    }

    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }

    const handleSubmit=(e)=>{
        alert('A form was submitted with Name :"' + name +
        '" ,Regno:"'+regno +'A form was submitted with Name :"'+dept +'" and Email :"' + email + '"');
      
      e.preventDefault();
 
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2>Checking form </h2>
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
        
        <label >
          Register No:
        </label><br/>
        <input type="text" value={regno} required onChange={(e)=> {handleregnoChange(e)}} /><br/>
        <label >
          Department :
        </label><br/>
        <input type="text" value={dept} required onChange={(e)=> {handledeptChange(e)}} /><br/>
           
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
 
export default App;


