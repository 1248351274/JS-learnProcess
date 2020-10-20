import React, { Component } from "react";

export default class AddTodo extends Component {
  state={
    val: "",
    nameval: ""
  }
  render(){
    let {add} = this.props;
    let {val,nameval} = this.state;
    return (

    <div className="addMessage">
        <input type="text" 
            placeholder="请输入昵称" 
            value={nameval} 
            onChange={({target})=>{
                this.setState({
                    nameval:target.value
                })
            }}
        />
        <textarea 
            placeholder="请输入留言" 
            value={val} 
            onChange={({target})=>{
              this.setState({
                val:target.value
              })
            }}
        ></textarea>
        <button 
            onClick={()=>{
                add(nameval,val);
                    this.setState({
                        val:"",
                        nameval: ""
                    })
                }
            }
        >提交留言</button>
    </div>
    )
  }
}