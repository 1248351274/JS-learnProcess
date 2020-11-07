import React  from 'react';
import { Redirect } from 'react-router-dom';
import View404 from './view/404view';
import ListView from './view/list';

const types = ["good","share","ask"]

const list_navs = [
  {
    title: "精华",
    to: "/good",
    exact: false,
    isActive(pathname){
        return pathname === "/" || pathname.slice(0,10) === "s/good"
    }
  },{
    title: "分享",
    to: "/share",
    exact: false
  },{
    title: "问答",
    to: "/ask",
    exact: false
  }
];

const route_nav_list = [
  {
    path: ["/","/:type","/:type/:page"],
    exact:true,
    render(props){
        const {type="good",page="1"} = props.match.params;
        if(types.includes(type)
        &&page>0
        &&parseInt(page)+"" === page){
          return <ListView {...props} />
        }
        return <Redirect to="/undefined" />
    }
  },
  {
    path: "",
    render(props){
      return <View404 {...props} />
    }
  }
];

export {list_navs,route_nav_list}