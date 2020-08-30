class YVue{
    constructor(option){
        this.$option = option
        this.$data = option.$data
        this.complie()
    }
    complie(){
        let eles = document.querySelector(this.$option.el)
        console.log(eles)
        this.complieChildnodes(eles)
    }
    complieChildnodes(eles){
        let childNodes = eles.childNodes
        childNodes.forEach(node => {
            // 文本
            if(node.nodeType === 1){
                let textContent = node.textContent
                let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/
                if(reg.test(textContent)){
                    console.log(111)
                    let $1 = RegExp.$1
                    console.log($1)
                    node.textContent = node.textContent.replace(reg,this.$data[$1])
                }
            }else if(node.nodeType === 3){
                if(node.childNodes.length>0){
                    this.complieChildnodes(node)
                }
                
            }

        });
    }
    
}