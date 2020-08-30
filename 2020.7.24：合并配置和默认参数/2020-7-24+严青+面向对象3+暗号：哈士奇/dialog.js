// import GameEvent from './GameEvent.js';

export default class Dialog extends EventTarget{
    constructor(options){
        super();


        // 默认配置
        let defalultOptions = {
            width: "30%",
            height: "250px",
            title: "测试标题",
            content: "测试内容",
            dragable: true, //是否可拖拽
            maskable: true, //是否有遮罩
            isCancel:false, //是否有取消
            success(){},
            cancel(){}
        }
         // 合并配置；
        // 作业： 在老师代码基础上用非 Object.assign 方法合并配置（options，defalultOptions）；具体方法不限；有配置传入 以 传入配置为准 ，没有以默认配置作为配置；
        this.opts1 = Object.assign(defalultOptions,options);
        console.log('Object.assign2',this.opts1)

        // 第一种
        this.opts = this.extend(defalultOptions,options)
        console.log('this.extend',this.opts);
        // 第二种
        this.opts2 = this.merge(defalultOptions,options);
        console.log('this.merge2',this.opts2)

        

       this.init();
    }
    // 初始化组件方法
    init(){
        this.createElement();
        // this.addEvent("success",this.opts.success);
        this.addEventListener("success",this.opts.success)
        this.addEleEvent();
        if(!this.opts.maskable){
            this.divEles.querySelector(".k-wrapper").style.display = "none";
        }
        if(this.opts.dragable){
            this.drag();
        }
    }
    combine(defalultOptions, options){

    }
    // 第一种
    extend(defalultOptions, options) { 
        for (var obj in options) {
            
            if(options.hasOwnProperty(obj)===true){
                defalultOptions[obj] = options[obj];
            }   
            
        } 
        return defalultOptions;
    }
    // 第二种
    merge(defalultOptions, options) {
     
        if (!options) {
            return defalultOptions
        }
        // Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名
        Object.getOwnPropertyNames(options).forEach(function forEachOwnPropertyName(name) {
            // if ( hasOwnProperty.call(defalultOptions, name )) {
            //     return
            // }
        
            // Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。
            var descriptor = Object.getOwnPropertyDescriptor(options, name)
            // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
            /**
             * defalultOptions 要定义属性的对象。
             * name 要定义或修改的属性的名称或 Symbol 。
             * descriptor 要定义或修改的属性描述符。
            */
           console.log('descriptor',descriptor)
            Object.defineProperty(defalultOptions, name, descriptor)
        })
     
        return defalultOptions
    }
    // 创建节点
    createElement(){
        // console.log(this.opts.width)
        let divEles = document.createElement("div"); 
        divEles.innerHTML = `<div class="k-wrapper"></div>
        <div class="k-dialog" style="width:${this.opts.width};height:${this.opts.height}">
            <div class="k-header">
                <span class="k-title">${this.opts.title}</span><span class="k-close">X</span>
            </div>
            <div class="k-body">
                <span>${this.opts.content}</span>
            </div>
            <div class="k-footer">
                ${this.opts.isCancel?'<span class="k-default">取消</span>':''}
                <span class="k-primary">确定</span>
            </div>
        </div>`;
        divEles.style.display = "none";
        document.body.appendChild(divEles);
        this.divEles = divEles;
    }
    // 添加事件
    addEleEvent(){
        // let closeEle = this.divEles.querySelector(".k-close");
        // closeEle.addEventListener("click",()=>{
        //     this.close();
        // })
        // let cancelEle = this.divEles.querySelector(".k-default") ;
        // console.log(cancelEle)
        // cancelEle &&  cancelEle.addEventListener("click",()=>{
        //     console.log("close")
        // })
        // 事件委托
        let kDialog = this.divEles.querySelector(".k-dialog");
        kDialog.addEventListener("click",e=>{
        //    console.log(e.target); 
         let className = e.target.className;
        //  console.log(className);
            switch(className){
                case 'k-close':
                    this.close();
                    break;
                case 'k-default':
                    this.opts.cancel();
                    this.close();
                    break;
                case 'k-primary':
                    // this.opts.success();
                    // this.trigger("success");
                    this.sure();
                    this.close();
                    break;
                default:
                    console.log("未点中");
                    break;
            }

        })
    }
    sure(value){
        let success = new CustomEvent("success",{
            detail:value
        });
        this.dispatchEvent(success);
    }
    // 关闭组件
    close(){
        this.divEles.style.display = "none";
    }
    // 打开组件
    open(){
        // console.log("open");
        this.divEles.style.display = "block";
    }
    drag(){
        let kDialog = this.divEles.querySelector(".k-dialog");
        kDialog.onmousedown = function (e) {
            let x = e.clientX  - this.offsetLeft;
            let y = e.clientY - this.offsetTop;
            this.onmousemove = function (e) {
                let xx = e.clientX;
                let yy = e.clientY;
                this.style.left = xx - x + "px";
                this.style.top = yy - y + "px";
            }
        }
        kDialog.onmouseup = function () {
            kDialog.onmousemove = '';
        }
    }
}

// 通过继承扩展功能；
export class InputDialog extends Dialog{
    constructor(options){
        super(options);
        this.createInput();
    }
    createInput(){
        let myInput = document.createElement("input");
        myInput.classList.add("input-inner");
        this.divEles.querySelector(".k-body").appendChild(myInput);
        this.myInput = myInput;
    }
    sure(){
        let value = this.myInput.value;
        super.sure(value);
    }
}

class ShowDialog extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<button>按钮</button>`;
        let dialog = new Dialog({
                title:this.title,
                success:(e)=>{
                    // console.log("点击了确定")
                    this.dispatchEvent(new CustomEvent("success"))
                }   
        })
        // this.title = this.getAttribute("title")
        this.onclick = function () {
            dialog.open();
        }
    }
    get title(){
        // if(this.getAttribute("title")){
        //     return this.getAttribute("title")
        // }else{
        //     return "默认标题"
        // }
        return this.getAttribute("title") ?? "默认标题"
    }

}

customElements.define("show-dialog",ShowDialog);

