
import React, { useEffect } from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetTopic } from "../../store/action";

function TopicView() {
    const {loading,data} = useSelector(state=>state.topic);
    const getTopic = useGetTopic();
    const {id} = useParams();
    console.log(loading,data);
    useEffect(()=>{
        getTopic(id);
    },[id]);
    return <Card
      title={data.title}
      loading={loading}
    >
      <div dangerouslySetInnerHTML={{
        __html:data.content
      }}></div>
    </Card>
}

export default TopicView;