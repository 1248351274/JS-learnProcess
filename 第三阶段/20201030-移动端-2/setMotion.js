(function() {
  let timer = 0;
  timer = setTimeout(function() {
    alert("请开启动作与方向的访问权限");
  }, 500);
  window.addEventListener("devicemotion",()=>{
    clearTimeout(timer);
  },{once:true})
})();    
function getAdr() {
  var u = window.navigator.userAgent;
  return u.indexOf("Android")>-1||u.indexOf("Adr")>-1;
}
function throttle(fn,interval=200,isStart=true) {
  let timer = 0;
  return function(...arg) {
    if(timer){
      return;
    }
    let _this = this;
    isStart&&fn.apply(_this,[...arg]);
    timer = setTimeout(function() {
      isStart||fn.apply(_this,[...arg]);
      timer = 0; 
    },interval);
  }
}
function debounce(fn,delay=200,isStart=false) {
  let timer = 0;
  return function(...arg) {
     let _this = this;
     // 该函数就是经过防抖处理的函数
     if(isStart&&timer===0){
       fn.apply(_this,[...arg]);
     }
     clearTimeout(timer);
     timer = setTimeout(function(){
       isStart||fn.apply(_this,[...arg]);
       timer = 0;
     }, delay);
   }
}
function setMotion(cb) {
    let fn = (e)=>{
      let { x, y, z } = e.accelerationIncludingGravity;
      let { x: x2, y: y2, z: z2 } = e.acceleration;
      if(getAdr()){
        e.accelerationIncludingGravity.x = -x;
        e.accelerationIncludingGravity.y = -y;
        e.accelerationIncludingGravity.z = -z;
        e.acceleration.x = -x2;
        e.acceleration.y = -y2;
        e.acceleration.z = -z2;
      }
      cb(e);
    }
    if(DeviceMotionEvent.requestPermission){
        // IOS 13 及之后
        DeviceMotionEvent.requestPermission().then((permissionState)=>{
            if(permissionState === 'granted'){
                window.addEventListener("devicemotion",fn);
            } else {
                alert("授权失败");
            }
        },()=>{
          alert("授权失败");
        })   
    } else {
        // IOS 13 之前
        window.addEventListener("devicemotion",fn);
    }
}
