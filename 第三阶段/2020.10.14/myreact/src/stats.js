import React, { Component } from "react";
export default class Stats extends Component {

  render(){
    let {data,removeDone,changeAllDone,allDone} = this.props;
    let doneDataLen = data.filter(data=>data.done).length;
    return (
        <div className="sum">
            <label>
                <input type="checkbox" 
                checked = {allDone}
                onChange={({target})=>{
                    changeAllDone(target.checked)
                }}
                    />
                <span>选中全部</span>
            </label>
            <a onClick={
                ()=>{
                    removeDone()
                }
            }>删除选中项</a>
            <p>当前选中{doneDataLen}项，共{data.length}条留言</p>
        </div>
    )
  }
}