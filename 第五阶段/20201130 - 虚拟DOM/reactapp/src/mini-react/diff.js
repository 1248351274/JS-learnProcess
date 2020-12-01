function diff(oldTree,newTree) {
   return diffNode(oldTree,newTree);
}
//对比节点
function diffNode(oldVNode,newVNode) {
  if(oldVNode.type !== newVNode.type){
      //如果类型不一致，则不需要进一步对比，直接替换掉
  } else if(oldVNode.type === "text"){
      if(oldVNode.inner !== newVNode.inner){
          //更新文本节点内容
      }
  } else if(typeof oldVNode.type === "function"){ //组件对比
      diffCmp(oldVNode,newVNode)
  } else {
      // 元素对比
        //属性对比
        diffPorps(newVNode.props,oldVNode.props);
        //对比子元素
        diffChild(newVNode.children,oldVNode.children);
  }
}
// 组件对比
function diffCmp(newCmp,oldCmp) {
  
}
//对比属性
function diffPorps(newProps,oldProps) {
    // 有没有被修改的属性
    // 有没有新增的属性
    // 有没有删除的属性
}
//对比子元素
function diffChild(newChild,oldChild) {
  /*
      1. 检测有没有子元素被删掉
      2. 检测有没有子元素位置发生变化
      3. 检测有没有新增子元素
  */
}

/*
  1. 节点整个替换掉了
  2. 文本节点，对比内容是否还一直
*/

export default diff;