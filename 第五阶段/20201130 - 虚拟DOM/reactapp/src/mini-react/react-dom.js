import diff from "./diff";

//将 虚拟DOM 生成为真实DOM
function render(vnode, container) {
  let node = createNode(vnode);
  container.appendChild(node);
}

// 将虚拟 DOM 生成为真实DOM
function createNode(vnode) {
  let node = null;
  if (vnode.type === "text") {
    node = document.createTextNode(vnode.inner);
  } else if (typeof vnode.type === "function") {
    // 组件
    node = createClass(vnode);
  } else {
    node = document.createElement(vnode.type);
    // props
    createProps(vnode.props, node);
    // 子元素
    if (vnode.children) {
      vnode.children.forEach(item => {
        render(item, node)
      });
    }
  }
  return node;
}

// 创建组件，-- 组件的 mount 阶段
function createClass(vnode) {
  let cmp = new vnode.type(vnode.props);// init
  /*
      getDerivedStateFromProps
  */
  let newState = vnode.type.getDerivedStateFromProps(vnode.props);
  cmp.state = {
    ...cmp.state,
    ...newState
  }
  cmp.vnode = cmp.render();
  cmp.node = createNode(cmp.vnode);
  /*
    componentDidMount
  */
  /*
    组件更新，组件自身更新
  */
  cmp.update = function (nextProps=cmp.props,nextstate=cmp.state) {
    /*
      组件更新的生命周期
    */
    let prevState = null;
    let prevProps = null;
    nextstate = {
      ...nextstate,
      ...(vnode.type.getDerivedStateFromProps(nextProps)) //生命周期函数
    }
    let isUpdate = cmp.shouldComponentUpdate(nextProps, nextstate);//生命周期函数
    if (isUpdate) { //根据 shouldComponentUpdate 返回值来决定组件是否要进行更新
      prevProps =  cmp.props;
      prevState = cmp.state;
      cmp.props = nextProps;
      cmp.state = nextstate;
      const newVNode = cmp.render();// 根据更新后的 state 去生成新的虚拟DOM
      const prevDOM = cmp.getSnapshotBeforeUpdate(prevProps, prevState);
      // 更新视图 -- diff
      cmp.vnode = diff(cmp.vnode,newVNode);
      cmp.componentDidUpdate(prevProps, prevState, prevDOM);
    }

  }
  //if(cmp.componentDidMount){
  cmp.componentDidMount();
  //}
  return cmp.node;
}
//创建节点的属性
function createProps(props, node) {
  for (let s in props) {
    if (s === "style") {
      let style = props[s];
      for (let css in style) {
        node["style"][css] = style[css];
      }
    } else if (s.substr(0, 2) === "on") {
      let eventName = s.toLowerCase();
      node[eventName] = props[s];
    } else {
      node[s] = props[s];
    }
  }
}

export default {
  render
}