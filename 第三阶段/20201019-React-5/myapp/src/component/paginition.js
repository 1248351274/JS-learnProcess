import React from 'react';
import {Link, useParams} from 'react-router-dom';
import data from "../data";

function Pagination() {
  const {type="good",page=1} = useParams();
  let nowData = [];
  if(type == "all"){
    console.log(11);
    for (const key in data) {
      if (data[key]) {
        nowData = nowData.concat(data[key]);
      }
    }
  } else {
    nowData = data[type];
  }
  const len = 5;
  const pageLen = Math.ceil(nowData.length/len);
  function setNub() {
      let nubs = [];
      for(let i = 1;i<=pageLen;i++){
        if(i == page){
          nubs.push(<a className="active" key={i}>{i}</a>);
        } else {
          nubs.push(<Link to={`/${type}/${i}`} key={i}>{i}</Link>);
        }
       
      }
      return nubs;
  }
  function previousPage(){
    let num = 0;
    if( page == 1) {
      num = pageLen
    } else {
      num = page - 1
    }
    return num
  }
  function nextPage(){
    let num = 0;
    if( page == pageLen) {
      num = 1
    } else {
      num = Number(page) + 1
    }
    return num
  }
  return (<nav className="pagination">
      <Link to={`/${type}/${previousPage()}`}>上一页</Link>
      {setNub()}
      <Link to={`/${type}/${nextPage()}`}>下一页</Link>
    </nav>
    
    )
}
export default Pagination;
