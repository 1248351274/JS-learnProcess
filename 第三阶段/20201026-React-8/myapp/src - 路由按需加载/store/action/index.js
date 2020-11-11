import Axios from "axios";
import { useDispatch } from "react-redux";
const Http = Axios.create({
  baseURL:" https://cnodejs.org/api/v1"
});

function useGetTopics() {
    const dispatch = useDispatch();
    return (page=1,tab="all")=>{
      dispatch({
        type: "TOPICS_LOAD"
      });
      Http.get(`/topics?page=${page}&tab=${tab}&limit=20`)
      .then((res)=>{
        dispatch({
          type: "TOPICS_GET",
          data:res.data.data
        });
      })
    }
}
function useGetTopic() {
  const dispatch = useDispatch();
  return (id)=>{
    dispatch({
      type: "TOPIC_LOAD"
    });
    Http.get(`/topic/${id}`)
    .then((res)=>{
      dispatch({
        type: "TOPIC_GET",
        data:res.data.data
      });
    })
  }
}
export {useGetTopics,useGetTopic};