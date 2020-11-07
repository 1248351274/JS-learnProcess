import React  from 'react';
import { Redirect } from 'react-router-dom';
import View404 from './view/404view';
import ListView from './view/list';

const types = ["good","share","ask","all"]

const route_list = [
  {
    path: ['/','/list',"/list/:type","/list/:type/:page"],
    exact:true,
    render(props){
        const {type="all",page="1"} = props.match.params;
        if(types.includes(type)
        &&page>0
        &&parseInt(page)+"" === page){
          return <ListView {...props} />
        }
        return <Redirect to="/404" />
    }
  },
  {
    path: "",
    render(props){
      return <View404 {...props} />
    }
  }
];

const list_navs = [
  {
    title: "全部",
    to: "/list/all",
    exact: false,
    isActive(pathname){
        return pathname === "/" || pathname.slice(0,9) === "/list/all"
    }
  },
  {
    title: "精华",
    to: "/list/good",
    exact: false,
  },{
    title: "分享",
    to: "/list/share",
    exact: false
  },{
    title: "问答",
    to: "/list/ask",
    exact: false
  }
];

export {route_list,list_navs}