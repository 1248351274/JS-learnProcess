import React, { Component } from "react";
import "./index.css";
import LeaveMessage from './leaveMessage';
import MessageList from './messageList'
class App extends Component {
  state={
    data:[
      {
         id: 0,
         name: "one",
         content: "这是第一条留言",
         done: true
      }
    ]
  }
  add=(newName,newTodo)=>{
    let {data} = this.state;
    data.push({
      id: Date.now(),
      name: newName,
      content: newTodo,
      done:false
    });
    this.setState({
      data
    })
  }
  changeDone = (id,done) => {
    let {data} = this.state;
    // for(let i=0;)
  }
  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  render() {
    let {data} = this.state;
    return (
      <section className="wrap">
        <h2 className="title">留言板</h2>
        <LeaveMessage add = {this.add}></LeaveMessage>
        <MessageList 
          data={data} 
          remove = {this.remove}
          changeDone = {this.changeDone}
        />
        
      </section>
    )
  }
}

export default App;