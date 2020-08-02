class YPromise{
    constructor(handle){
        this.status = 'pending'
        this.value = undefined
        // 数据队列保存
        this.resolveQueue = []
        this.rejectQueue = []

        // handle((val)=>{
        //     console.log(this)
        //     // resolve
        //     this.status = 'fulfilled'
        //     this.value = val
        //     //  bind()方法主要就是将函数绑定到某个对象，bind()会创建一个函数，
        //     // 函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值，
        //     // 例如：f.bind(obj)，实际上可以理解为obj.f()，这时f函数体内的this自然指向的是obj；
        // }).bind(this),(val)=>{
        //     // reject
        //     this.status = 'rejected'
        //     this.vlaue = val
        // }
        handle(this._resolve(val).bind(this),this._reject(val).bind(this))

    }
    _resolve(val){
        this.status = 'fulfilled'
        this.value = val
        const run = () => {
            let cb
            while (cb = this.resolveQueue.shift()) {
                cb && cb(val)
            }
        }
        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes: true
        })
        document.body.setAttribute('kkb',Math.random())
    }
    _reject(val){
        this.status = 'rejected'
        this.value = val
        const run = () => {
            let cb
            while (cb = this.resolveQueue.shift()) {
                cb && cb(val)
            }
        }
        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes: true
        })
        document.body.setAttribute('kkb',Math.random())
    }
    then(onResolved,onRejected){
        return new YPromise((resolve,reject)=>{
            this.resolveQueue.push(val=>{
                let res = onResolved && onResolved(val)
                if(res instanceof YPromise){
                    return res.then(resolve)
                }
                retrun(res)
            })
            this.rejectQueue.push(val=>{
                onRejected && onRejected(val)
                reject(val)
            })
        })
    }
    catch(onRejected){
        this.then(undefined,onRejected)
    }
    static resolve(val){
        return new YPromise(resolve => {
            resolve(val)
        })
    }
    static reject(val){
        return new YPromise(reject => {
            reject(val)
        })
    }
    static all(lists){
        let arr = []
        return new YPromise(resolve => {
            lists.forEach(item => {
                item.then(res=>{
                    arr.push(res)
                    if(arr.length === lists.length){
                        resolve(arr)
                    }
                })
            });
        })
    }
    static race(list){
        return new KPromise((resolve,reject)=>{
            list.forEach(item=>{
                item.then(res=>{
                    resolve(res)
                },err=>{
                    reject(err)
                })
            })
        })
    }
    finally(cd){
        return new KPromise((resolve,reject)=>{
            this.resolveQueue.push(()=>{
                let res = cb && cb();
                if(res instanceof KPromise){
                    // 返还 KPromise对象
                    return res.finally(resolve);
                }
                resolve(res)
            })
            this.rejectQueue.push(()=>{
                cb && cb();
                reject();
            })
        })
    }
}