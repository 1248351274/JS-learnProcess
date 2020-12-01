import React from "./mini-react/react";
import ReactDOM from "./mini-react/react-dom";
class App extends React.Component {
    state = {
        count: 1
    }
    static getDerivedStateFromProps(props){
        console.log(props);
        return {
            name: "kkb"
        }
    }
    render() {
        console.log(this.state);
        const {count} = this.state;
        return count%2?<div
        style={{
            width: '100px',
            height: '100px',
            background: "red",
            color: "#fff"
        }}
        className={"div" + count}
        onClick={() => {
            this.setState({
                count: count + 1
            })
        }}
    >
        {[
            <span className="span1">span1</span>,
            <span className="span2">span2</span>
        ]}
    </div>:1
    }
}
ReactDOM.render(
    <App info="app" />,
    document.querySelector("#root")
);
