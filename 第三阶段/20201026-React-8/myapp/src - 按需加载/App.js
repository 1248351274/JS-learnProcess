import React, { lazy, Suspense } from 'react';
let Child = lazy(()=>import("./child")); 
function App() {
    return <div>
          <div>首页</div>
          <Suspense fallback={<div>模块加载中</div>}>
              <Child />
          </Suspense>
    </div>
}
export default App;
