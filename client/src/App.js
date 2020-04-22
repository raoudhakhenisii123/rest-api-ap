import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact APP</h1>
        <div>
       <Link to="/allContacts"><button>Contact list </button></Link> 
       <Link to="/newContact"><button>Add contact</button></Link> 
        </div>
        <h1>Add Contact Page</h1>

      </header>
    </div>
  );
}

export default App;
