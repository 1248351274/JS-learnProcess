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
         content: "这是第一条留言"
      }
    ]
  }
  add=(newName,newTodo)=>{
    let {data} = this.state;
    data.push({
      id: Date.now(),
      name: newName,
      content: newTodo
    });
    this.setState({
      data
    })
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
        />
        
      </section>
    )
  }
}

export default App;