import React, { Component } from "react";
import Message from './message'

export default class MessageList extends Component {
  render(){
    let {data,remove} = this.props;
    return (
        <ul className="messageList">
                  {
        data.map((item,index)=>{
            return <Message 
                {...this.props}
                data={item}
                key={index}
                remove={remove}
            />
            })
        }
    </ul>
    )
  }
}