/*
  创建虚拟DOM

  createElement(type,props,...children)
*/
function createElement(type,props,...child) {
    delete props.__self;
    delete props.__source;
    let children = [];
    child.forEach(item=>{
        if(Array.isArray(item)){
          item.forEach(subItem=>{
            children.push(subItem);
          })
        } else {
          children.push(item);
        }
    });
    children = children.map(item=>{
        if(typeof item === "object"){
          return item;
        }
        return {
          type: "text",
          inner: item
        }
    })
    return {
      type,
      props,
      children
    }
}

class Component {
  constructor(props){
    this.props = props;
    this.state = {};
  }
  static isClassComponent = true;
  static getDerivedStateFromProps(props){
      return {}
  }
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    return null;
  }
  componentDidMount(){

  }
  componentDidUpdate(){
    
  }
  setState(newState){
    newState = {
      ...this.state,
      ...newState
    }
    this.update(newState);
  }
}

export default {
  createElement,
  Component
}