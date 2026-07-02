import React from 'react';
import './App.css';

function App() {
  function callFun(){
    alert('Button, clicked!');
  }
   const age = (age) => {
    alert(age);
  }
  const name = 'bhoomi';
  let x = 10;
  let y = 20;
  return ( 

    
    <div>
  <h1>Hello, React!</h1>
  <p>Welcome to your first React application.</p>
  <button className="button" onClick={callFun}>Click me</button>
  {/* dyanamic button */}
   <button className="button" onClick={() => age(20)}>Age</button>
   <p>My name is {name}.</p>  
    <p>{x + y}</p>
   </div> 
  );
};
  export function Profile() {   
    const name = 'bhoomi';
  return (
    <div>
      <h2>Profile</h2>
      <p>This is the profile page.</p>
      <p>My name is {name}.</p>
    </div>
  );
}

export default App;