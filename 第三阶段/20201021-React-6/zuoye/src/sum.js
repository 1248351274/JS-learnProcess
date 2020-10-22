import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Sum() {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.data);
  const selectData = data.filter(item=>item.selected);
  return <div id="todo-stats">
    <span className="todo-count">
<span className="number">{data.length - selectData.length}</span>
        <span className="word">项待完成</span>
    </span>
    <span className="todo-clear">
        <a
            onClick = {()=>{
                dispatch({
                    type: "SELECTDELETE"
                });
            }}
        >Clear <span>{selectData.length}</span> 已完成事项</a>
    </span>
</div>
}
export default Sum;