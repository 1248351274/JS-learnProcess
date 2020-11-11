# React 实战
## 课程内容
CNode 实战

### 按需加载处理
- suspense 和 lazy 进行懒加载设置
```
    const Child = lazy(()=>import("./child"));
    <Suspense fallback={<div>视图请求中</div>} >
        <Child />
    </Suspense>
```    
- 路由动画
入场动画：
```
function App() {
  return <TransitionGroup
    appear={true}
  >
    <CSSTransition
      classNames={{
        appear: "wrap-appear"
      }}
      timeout={1500}
    >
      <div>
        <Header />
        <IndexRouter />
      </div>
    </CSSTransition>
  </TransitionGroup>

}
```
切换动画：
```
function IndexRouter() {
    let location = useLocation();
    return <div className="main-wrap">
        <TransitionGroup>
            <CSSTransition
                timeout={500}
                key={location.pathname}
                onEnter={(node) => {
                    node.style.transform = "translateX(-100%)";
                }}
                onEntering={(node) => {
                    node.style.transform = "translateX(0)";
                }}
                onExit={(node)=>{
                    node.style.transform = "translateX(0)";
                }}
                onExiting={(node)=>{
                    node.style.transform = "translateX(100%)";
                }}
            >
                <Switch location={location}>
                    {routerList.map(item => {
                        return <Route key={item.name} exact={item.exact} path={item.path} render={item.render} />
                    })}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    </div>
}
```    


### 部署的小细节
history 路由一定记得配置404
xampp 
apache\conf\extra\httpd-multilang-errordoc.conf

### 下节课内容：
移动端事件：
1 - Touch事件
2 - 移动端滑屏幻灯片实现
3 - better-scroll 初使用

### 今天练习
基于 antd 实现 CNode 项目，不会的地方可以参考 React 录播


























