
import React, { Component } from "react";

import Card from "../Card";
import "./Body.css";


class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    render() {
        const images = this.props.images;
    return (
        
        <div className="cards">
          
        {images.map(({id,img,clicked}) => (
            <Card id={id} cb={this.props.cb} img={img}/>))
        }
        </div>
    );
    }
}
export default Body;