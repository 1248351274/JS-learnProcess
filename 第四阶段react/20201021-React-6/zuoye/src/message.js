import React from "react";
import { useSelector } from "react-redux";
import Li from "./li";


function Message() {
    const data = useSelector(state=>state.data);
    return  (
        <ul id="todo-list">
            {
            data.map(item=>
            <Li 
                key={item.id}
                data={item}
            />)
            }
        </ul>
    )

  }
  export default Message;