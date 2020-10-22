import { createStore } from "redux";
function reducer(state = {
  data: [
    {
      id: 0,
      message: "这是第一条TODO",
      selected: false
    }, {
      id: 1,
      message: "这是第二条TODO",
      selected: false
    }
  ]
}, action) {
  let nowData = [...state.data];
  switch (action.type) {
    case "ADD":
      return {
        data: [...nowData, {
          id: Date.now(),
          message: action.message,
          selected: false
        }]
      }
    case "SELECTED":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            selected: action.selected
          }
        }
      })
      return { data: nowData };
    case "EDIT":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            message: action.message
          }
        }
      })
      return {
        data: nowData
      }
    case "DELETE":
      return {
        data: nowData.filter(item=>item.id !== action.id)
      }
    case 'SELECTDELETE':
      return {
        data: nowData.filter(item=>!item.selected)
      }
  }
  return state;
}
const store = createStore(reducer);
export { store };