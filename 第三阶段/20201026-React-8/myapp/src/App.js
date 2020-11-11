import React from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Affix, Layout } from "antd";
import Header from './component/header';
import { routes } from './router';
import { Route, useLocation } from 'react-router-dom';
import { Switch } from "react-router-dom";
function App() {
    let location = useLocation();
    let t = 0;
    let l = 0;
    return <TransitionGroup
        appear={true}
    >
        <CSSTransition
            classNames={{
                appear: "page-wrap-appear"
            }}
            timeout={1000}
        >
            {/* 在入场时会给page-wrap加上class "page-wrap-appear"，timeout之后，将class "page-wrap-appear" 删掉*/}
            {/* 旧视图在下边，新视图在上边 */}
            <div className="page-wrap">
                <Layout>
                    <Affix offsetTop={0}>
                        <Header />
                    </Affix>
                    <div className="wrap">
                        <TransitionGroup>
                            <CSSTransition
                                timeout={1000}
                                key={location.pathname}
                                onEnter={(node) => {
                                    node.style.transition = "none";
                                    node.style.height = "0";
                                    node.style.overflow = "hidden";
                                }}
                                onEntering={(node) => {
                                    node.style.transition = "1s";
                                    node.style.height = node.scrollHeight + "px";
                                }}
                                onEntered={(node)=>{
                                    node.style.transition = "none";
                                }}
                                onExit={(node) => {
                                    let h = node.offsetHeight;
                                    node.style.transition = "none";
                                    node.style.height = h + "px";
                                    node.style.overflow = "hidden";
                                }}
                                onExiting={(node) => {
                                    node.style.transition = "1s";
                                    node.style.height = "0";
                                }}
                                onExited={(node)=>{
                                    node.style.transition = "none";
                                    node.style.height = "auto";
                                    node.style.overflow = "visible";
                                }}
                            >
                                <Switch
                                    location={location}
                                >
                                    {routes.map((item, index) => {
                                        return <Route
                                            path={item.path}
                                            exact={item.exact}
                                            render={item.render}
                                            key={index}
                                        />
                                    })}
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </Layout>
            </div>
        </CSSTransition>
    </TransitionGroup>
}
export default App;
