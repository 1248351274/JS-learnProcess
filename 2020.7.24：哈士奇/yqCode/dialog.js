export default class Dialog extends EventTarget{
    constructor(options){
        // 默认配置
        super()
        let defaultOption = {
            width:'30%',
            height: '250px',
            title: '测试标题',
            content: '测试内容',
            dragger: true, // 是否拖拽
            mastable: true, // 是否有遮罩
            isCancel: false, // 是否取消
            success(){},
            close(){}
        }
        // 合并配置
        this.opts = Object.assign(defaultOption,options)
        this.init();

    }
    // 初始化函数
    init(){
    
        this.createElement()
        // 监控事件success
        this.addEventListener("success",this.opts.success)
        this.addElesEvent()
        if(!this.opts.mastable){
            this.divEles.querySelector(".k-wrapper").style.display = "none";
        }
        if(this.opts.dragger){
            this.dragger()
        }
    }
    createElement(){
        let divEles = document.createElement('div')
        divEles.className = 'dialog'
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
        this.divEles = divEles
    }
    dragger(){
        let kDialog = this.divEles.querySelector('.k-dialog')
        kDialog.onmousedown = function(e){
            let x = e.screenX - this.offsetLeft
            let y = e.screenY - this.offsetTop
            kDialog.onmousemove = function(e){
                let xx = e.screenX 
                let yy = e.screenY
                this.style.left = xx - x + 'px'
                this.style.top = yy - y + 'px'
            }
        }
        kDialog.onmouseup = function(){
            kDialog.onmousemove = ''
        }
    }
 
    addElesEvent(){
        let kDialog = this.divEles.querySelector('.k-dialog')
        console.log('dialog',kDialog)
        // closeEle/addEventListener('click',()=>{
        //     this.close()
        // })
        let kWrapper = this.divEles.querySelector('.k-wrapper')
        kWrapper.addEventListener('click',e=>{
            this.close()
        })
        // 事件委托 
        kDialog.addEventListener('click',e=>{
            console.log(e)
            let className = e.target.className;
            switch(className){
                case 'k-close':
                    this.close()
                    break
                case 'k-default':
                    this.close()
                    break
                case 'k-primary':
                    this.sure()
                    this.close()
                    break
                default:
                    console.log('未点中')
                    break
            }
        })
    }
    sure(value){
        let success = new CustomEvent('success',{
            detail:value
        })
        this.dispatchEvent(success);
    }
    open(){
        console.log('open') 
        this.divEles.style.display = 'block'
    }
    close(){
        this.divEles.style.display = 'none'
    }
}