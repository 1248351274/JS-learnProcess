
class KVue{
    constructor(options){
        this.$options = options;
        this.$data = options.data;
        this.observer(this.$data);
        this.compile();
    }
    observer(data){
        Object.keys(data).forEach(key=>{
            let value = data[key];
            let _this = this;
            let dep = new Dep();
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                    // 收集依赖
                    // Dep.target 是Wather  对象；
                    if(Dep.target){
                        dep.addSub(Dep.target);
                        console.log(dep);
                    }
                    // console.log("get",Dep.target);
                    return value; 
                },
                set(newValue){
                    // 收集message的  watcher 触发了mydata的 notify；
                    console.log("??",dep);
                    dep.notify(newValue);
                    value = newValue;
                }

            })
        })
    }

    // 编译；
    compile(){
        let ele = document.querySelector(this.$options.el);
        this.compileChildnodes(ele);
    }
    compileChildnodes(ele){
        let childNodes = ele.childNodes;
        console.log('ele',ele.childNodes)
        childNodes.forEach(node=>{
            if(node.nodeType===3){
                let textContent = node.textContent;
                let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
                if(reg.test(textContent)){
                    let $1 = RegExp.$1;
                    // console.log("data里的数据",this.$data[$1]);
                    // 编译需要 初次渲染触发；
                    new Watcher(this.$data,$1,(newValue)=>{
                            // console.log("触发了wathcer")
                            let oldValue = this.$data[$1];
                            // console.log(oldValue);
                            let reg = new RegExp(oldValue);
                            node.textContent = node.textContent.replace(reg,newValue)
                    });
                    // 可以触发； 重复添加依赖；
                    // this.$data[$1];
                    // this.$data[$1];
                    node.textContent = node.textContent.replace(reg,this.$data[$1]);
                }
            }else if(node.nodeType===1){

                // 标签；
                // console.log(node)
                // 获取属性；
                let attrs = node.attributes;
                // console.log(attrs)
                [...attrs].forEach(attr=>{
                    let attrName = attr.name;
                    let attrValue = attr.value;
                    if(attrName==="v-model"){
                        // 双绑指令；
                        // console.log("--",attrValue);
                        node.value = this.$data[attrValue];
                        node.addEventListener("input",e=>{
                            // console.log(e.target.value);
                            // 已经被观察了
                            this.$data[attrValue] = e.target.value;
                        })
                        //作业：在老师的代码基础上实现v-html方法；：注意不要和v-text搞混了；
                    }
                    if(attrName==="v-html"){
                        node.innerHTML = this.$data[attrValue]
                    }
                })

                if(node.childNodes.length>0){
                    this.compileChildnodes(node);
                }
            }
        })
    }
}

// 依赖收集器；
class Dep{
    constructor(){
        this.subs = [];
    }
    addSub(sub){
        this.subs.push(sub);
    }

    // 发布；
    notify(newValue){
       this.subs.forEach(sub=>{
            sub.update(newValue);
       }) 
    }
}
//订阅者；
class Watcher{
    constructor(data,key,cb){
        Dep.target = this;  //this 指向 new Watcher
        // 手动触发get
        data[key];
        this.cb = cb;
        console.log("??--",data[key]);
        Dep.target = null;
    }
    update(newValue){
        // console.log("更新了");
        this.cb(newValue);
    }
}