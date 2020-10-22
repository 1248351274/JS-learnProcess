import React, { useState } from "react";
import {useDispatch} from "react-redux";
function Add() {
  const [message,setMessage] = useState("");
  const dispatch = useDispatch();
  return <div id="create-todo">
            <input 
                id="new-todo" 
                placeholder="What needs to be done?" 
                type="text" 
                value={message}
                onChange={({target})=>{
                    setMessage(target.value);
                }}
                onKeyDown={({keyCode})=>{
                    if(keyCode===13&&message.trim()){
                        dispatch({
                            type: "ADD",
                            message
                        });
                      setMessage("");
                    }
                }}
            />
        </div>
}
export default Add;