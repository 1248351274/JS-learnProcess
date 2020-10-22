import React from 'react';
import './App.css';
import Message from './message';
import Sum from './sum';
import Add from './add';

function App() {
  return (
    <div id="todoapp">
    <div className="title">
      <h1>todo</h1>
    </div>
    <div className="content">
      <Add/>
      <Message/>
      <Sum/>
    </div>
  </div>

  );
}

export default App;
