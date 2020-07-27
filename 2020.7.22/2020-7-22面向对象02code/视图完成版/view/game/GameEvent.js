export default class GameEvnet {
    constructor() {
        this.handle = {};
    }
    // 添加事件
    addEvent(eventName, fn) {
        if (typeof this.handle[eventName] === 'undefined') {
            this.handle[eventName] = [];
        }
        this.handle[eventName].push(fn);
    }
    // 触发事件
    trigger(eventName) {
        if (typeof this.handle[eventName] === undefined) {
            return;
        }
        this.handle[eventName].forEach(fn => {
            fn();
        })
    }
    // 移除自定义事件
    removeEvent(eventName,fn){

    }
}

// let newmyevent = new GameEvnet();
// newmyevent.addEvent("myevnet",fn1);
// newmyevent.addEvent("myevnet",fn2);
// newmyevent.removeEvent("myevnet",fn1);
// newmyevent.trigger("myevnet")