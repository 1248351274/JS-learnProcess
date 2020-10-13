import React, { Component } from 'react'

class List extends Component {
    state = {
        show: false
    }
    render() {
        let {data} = this.props;
        let {name,children} = data;
        let {show} = this.state;
        return (
            <dl className={ show ? "friend-group expanded" : "friend-group"}>
                <dt onClick={()=>{
                    this.setState({
                        show: !show
                    })
                }}>{name}</dt>
                { children.map((item,index) => {
                    return (
                    <dd key={index}>{item}</dd>
                    )
                }) }
            </dl>
        )
    };
};

export default List;