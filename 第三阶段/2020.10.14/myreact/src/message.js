import React, { PureComponent,createRef } from "react";

export default class Todo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      edit:false,
      val:props.data.content,
    }
    //组件初始化时，在 state 中，复制了title
  }
  editText=createRef();
  display = createRef();

  componentDidUpdate(prevProps,pervState){
      if(!pervState.edit&&this.state.edit){
        this.editText.current.focus();
      }
  }
  render(){
    let {data,remove,changeDone,editTitle} = this.props;
    let {name,done,id,content} = data;
    let {edit,val} = this.state;
    
    return (
        <li className={edit?"editing":""}>
          <div className={"todo "+ (done?"done":"")}>
                <h3>{name}</h3>
                <div ref={this.display} className="display" >
                  <input type="checkbox" 
                    checked={done}
                    onChange={({target})=>{
                      changeDone(id,target.checked)
                    }}
                  />
                  <p className="message-content"           
                    onDoubleClick={()=>{
                      this.setState({
                        edit:true
                      })
                    }}
                  >{content}</p>
                </div>


                <a onClick={()=>{
                  remove(id);
                }}>删除</a>

            <div className="edit">
              <textarea 
                className="todo-input" 
                type="textarea"
                ref={this.editText}
                value={val}
                onChange={({target})=>{
                  // 修改时先修改复制出来的content
                  console.log(target.value);
                  this.setState({
                    val: target.value
                  })
                }}
                onBlur={()=>{
                  // 退出编辑时，判断是否为空
                  if(val.trim()){
                      editTitle(id,val);
                  } else {
                      // 为空，则恢复本身的content
                      this.setState({
                        val:content
                      })
                  }
                  this.setState({
                    edit:false
                  })
                }}  
              />
            </div>
          </div>
        </li>
    )
  }
}