import React, { Component } from "react";

export default class Todo extends Component {
  render(){
    let {data,remove} = this.props;
    return (
        <li>
            <h3>{data.name}</h3>
            <p>{data.content}</p>
            <a onClick={()=>{
              remove(data.id);
            }}>删除</a>
        </li>
    )
  }
}