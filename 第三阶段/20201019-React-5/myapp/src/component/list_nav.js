import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { list_navs } from "../route_list";

export default function ListNav() {
  const {pathname} = useLocation();
  return <nav className="nav">
    {
      list_navs.map((item,index)=>{
        return <NavLink 
          key={index} 
          exact={item.exact}
          to={item.to}
          isActive={item.isActive?()=>{
            return item.isActive(pathname)
          }:null}
        >{item.title}</NavLink>
      })
    }
  </nav>
}