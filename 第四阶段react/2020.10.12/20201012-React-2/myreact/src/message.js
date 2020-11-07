import React, { Component } from "react";

export default class Todo extends Component {
  render(){
    let {data,remove} = this.props;
    
    return (
        <li>
            <h3>{data.name}</h3>
            <input type="text" 
              placeholder="请输入昵称" 
              value={nameval} 
              onChange={({target})=>{
                  this.setState({
                      nameval:target.value
                  })
              }}
            />
            <p>{data.content}</p>
            <a onClick={()=>{
              remove(data.id);
            }}>删除</a>
        </li>
    )
  }
}