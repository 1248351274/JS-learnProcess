import React from 'react';
import './index.css';
// import logo from './logo.svg';
import data from './data'
import List from "./list";


function App() {
  return (
    <div className="friend-list">
      {
        data.map((item,index)=>{
          return (
            <List key={index} data={item} index={index}>
            </List>
          )
        })
      }
    </div>
  );
}

export default App;
