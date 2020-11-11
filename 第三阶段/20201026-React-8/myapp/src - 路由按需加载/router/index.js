import React, { lazy, Suspense } from "react";
import Loading from "../component/loading";
import IndexPage from "../view/index/index";
const UndefinedPage = lazy(()=>import("../view/404/index"));
const AboutView = lazy(()=>import("../view/about"))
const APIView = lazy(()=>import("../view/api"))
const TopicView = lazy(()=>import("../view/topic"));
const routes = [{
  path: "/",
  exact: true,
  render(props){
    return <IndexPage {...props} />
  }
},{
  path: "/topic/:id",
  exact: true,
  render(props){
    return <Suspense fallback={<Loading/>}>
        <TopicView {...props} />
    </Suspense>
  }
},{
  path: "/api",
  exact: true,
  render(props){
    return <Suspense fallback={<Loading/>}>
        <APIView {...props} />
    </Suspense>
  }
},{
  path: "/about",
  exact: true,
  render(props){
    return <Suspense fallback={<Loading/>}>
        <AboutView {...props} />
    </Suspense>
  }
},{
  path: "",
  exact: false,
  render(props){
    return <Suspense fallback={<Loading/>}>
        <UndefinedPage {...props} />
    </Suspense>
  }
}];
const navs=[
  {
      title: "首页",
      to: "/"
  },{
      title:"新手入门",
      to: "/getstart"
  },{
      title:"API",
      to: "/api"
  },{
      title:"关于",
      to: "/about"
  }
];
const indexNavs = [
  {
      title: "全部",
      to:"/?tab=all"
  },{
      title: "精华",
      to:"/?tab=good"
  },{
      title: "分享",
      to:"/?tab=share"
  },{
      title: "问答",
      to:"/?tab=ask"
  },{
      title: "招聘",
      to:"/?tab=job"
  },{
      title: "客户端测试",
      to:"/?tab=dev"
  }
]
export {routes,navs,indexNavs};