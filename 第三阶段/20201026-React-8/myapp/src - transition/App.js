import React,{useState} from 'react';
import {Transition} from "react-transition-group";
import "./index.css";
/*
    入场动画：
        开始入场
        入场结束    
    出场动画:
        开始出场
        出场结束
*/
function App() {
    const [inProp, setInProp] = useState(false);
    return (
      <div>
        <Transition in={inProp} timeout={5000}>
          {state => {
              console.log(state);
            return <div className={"div div-"+state}></div>
          }}
        </Transition>
        <button onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button>
      </div>
    );
  }
export default App;
