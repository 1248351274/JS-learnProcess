import React, { Component, Fragment } from "react";
import "./index.css";
import LeaveMessage from './leaveMessage';
import MessageList from './messageList'
import Stats from './stats'
class App extends Component {
  state={
    data:[
      {
         id: 0,
         name: "one",
         content: "这是第一条留言",
         done: false
      }
    ],
    allDone:false
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
  changeDone = (id, done) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], done: done }
        break;
      }
    }

    let nocheck = data.filter(item => !item.done)
    if(nocheck.length===0){

      this.setState({
        // this.state.allDone=true
        allDone: true
      })
    }else{
      this.setState({
        allDone:false
      })
    }
    this.setState({
      data
    })
  }
  changeAllDone = (done) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
        data[i] = { ...data[i], done: done }
    }
    this.setState({
      data,allDone:done
    })
  }
  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  removeDone = ()=>{
    let { data } = this.state;
    this.setState({
      data: data.filter(item => !item.done)
    })
  }
  editTitle = (id,content)=>{
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], content}
        break;
      }
    }
    this.setState({
      data
    })
  }

  render() {
    let {data,allDone} = this.state;
    return (
      <section className="wrap">
        <h2 className="title">留言板</h2>
        <LeaveMessage add = {this.add}></LeaveMessage>
        {
          data.length > 0 && (<Fragment>
            <MessageList 
              data={data} 
              remove={this.remove}
              changeDone={this.changeDone}
              editTitle = {this.editTitle}
            />
            <Stats
              data={data}
              allDone={allDone}
              removeDone = {this.removeDone}
              changeAllDone = {this.changeAllDone}
            />
          </Fragment>)
        }

      </section>

    )
  }
}

export default App;