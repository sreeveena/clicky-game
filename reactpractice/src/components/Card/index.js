import React, { Component } from "react";
class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    

    render() {
        return (
            <div className="cardimage card-select" onClick={()=> this.props.cb(this.props.id)}>
            <img src={this.props.img} />
            </div>
        );
    }
}
export default Card;