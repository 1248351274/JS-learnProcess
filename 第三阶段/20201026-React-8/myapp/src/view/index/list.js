import React, {useEffect } from "react";
import { List, Pagination } from "antd";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import { useGetTopics } from "../../store/action";
function IndexList() {
    const {loading,data} = useSelector(state=>state.topics);
    const {search} = useLocation();
    const {page="1",tab="all"} = qs.parse(search.slice(1));
    const getTopics = useGetTopics();
    const {push} = useHistory();
    useEffect(()=>{
      getTopics(page,tab);
    },[page,tab])
    return <div
      style={{
        background:"#fff",
        overflow: "hidden"
      }}
    >
        <List 
          dataSource={data}
          loading={loading}
          style={{
            padding: "0 15px",
            borderBottom:"1px solid #f0f0f0"
          }}
          renderItem={item=>{
              return <List.Item
                  style={{
                    padding: "10px 20px"
                  }}
              >
                <Link to={"/topic/"+item.id}>{item.title}</Link>
              </List.Item>
          }}
      />
      {loading?"":<Pagination 
          style={{
            margin: "10px 30px"
          }}
          current={page-0}
          pageSize={20}
          total={1000}
          onChange={(page)=>{
            push(`/?tab=${tab}&page=${page}`);
          }}
          showSizeChanger={false}
          showQuickJumper={true}
      />}
    </div>
}

export default IndexList;