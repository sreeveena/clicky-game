import React, { Component } from "react";
class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    

    render() {
        return (
            <div className="cardimage" onClick={this.props.cb}>
            <img src={this.props.img} />
            </div>
        );
    }
}
export default Card;