class YM extends EventTarget{
    constructor(option){
        super()
        this.$option = option
        this.$data = option.$data
        this.observer(this.$data)
        this.complie()
        
        // 只收集message的watcher
        // new Watcher()
        // 触发了get方法
        // this.$data.message
    }
    // 观察数据（劫持数据）
    observer(data){
        Object.keys(data).forEach(key=>{
            let value = data[key]
            let _this = this
            let dep = new Dep()
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                    if(Dep.target){
                        dep.addSub(Dep.target)
                    }
                    console.log('defineProperty的get',data,key,value)
                    return value
                },
                set(newValue){
                    dep.notify(newValue)
                    console.log("set设置了")
                    // 更新视图;==>编译
                    // let event = new CustomEvent(key,{
                    //     detail:newValue
                    // })
                    // _this.dispatchEvent(event)

                    value = newValue
                    // console.log('set',newValue)
                }
            })
        })
    }
    complie(){
        let eles = document.querySelector(this.$option.el)
        this.complieChildnodes(eles)
    }
    complieChildnodes(eles){
        let childNodes = eles.childNodes
        childNodes.forEach(node => {
            // nodeType：节点类型 https://www.w3school.com.cn/jsref/prop_node_nodetype.asp
            // node.nodeType === 1 代表元素
            // node.nodeType === 3 代表文本
            if(node.nodeType === 3){
                // node.textContent:元素的文本内容
                // node.nodeValue元素的节点值
                // node.wholeText返回Text逻辑上相邻的节点的所有文本
                // node.data
                let textContent = node.textContent
                let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g
                if(reg.test(textContent)){
                    // 获取message
                    let $1 = RegExp.$1
                   
                    // ???
                    new Watcher(this.$data,$1,(newValue)=>{
                        console.log("触发了")
                        let oldValue = this.$data[$1]
                        let reg = new RegExp(oldValue)
                        node.textContent = node.textContent.replace(reg,newValue)

                    })
                     // 文本节点替换
                    node.textContent = node.textContent.replace(reg,this.$data[$1])

                    // 编译,绑定自定义事件，（自定义事件名称，data的键名）
                    // this.addEventListener($1,e=>{
                    //     let newValue = e.detail
                    //     let oldValue = this.$data[$1]
                    //     let reg = new RegExp(oldValue)
                    //     node.textContent = node.textContent.replace(reg,newValue)

                    //     console.log('自定义事件',e)
                    // })

                    //
                    
                    // this.$data[$1]
                }

            }else if(node.nodeType === 1){
                let attrs = node.attributes;
                console.log(attrs);
                // for(let i=0;i<attrs.length;i++){
                //     let attr = attrs[i]
                //     let attrName = attr.name
                //     let attrValue = attr.value
                //     if(attrName === 'v-model'){
                //         // ???
                //         node.value = this.$data[attrValue]
                //         node.addEventListener('input',e=>[
                //             this.$data[attrValue] = e.target.value
                //         ])
                //     }
                // }
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
                        new Watcher(this.$data,attrValue,(newValue)=>{
                            console.log("触发了")
                            let oldValue = this.$data[attrValue]
                            let reg = new RegExp(oldValue)
                            node.innerHTML = node.innerHTML.replace(reg,newValue)
                        })
                    }
                })

                
                if(node.childNodes.length>0){
                    this.complieChildnodes(node)
                }
            }
        });

    }
}

// 依赖收集器

class Dep{
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    // 发布
    notify(newValue){
        this.subs.forEach(sub=>{
            sub.update(newValue)
        })
    }
}

// 订阅者
class Watcher{
    constructor(data,key,cb){
        // ???
        Dep.target = this // 指向new Watcher
        data[key]
        this.cb = cb
        Dep.target = null
    }
    update(newValue){
        this.cb(newValue)
        console.log('更新了')
    }
}