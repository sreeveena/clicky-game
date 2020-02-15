
import React, { Component } from "react";
import img1 from "../Card/1.jpeg";
import img2 from "../Card/2.jpeg";
import img3 from "../Card/3.jpeg";
import img4 from "../Card/4.jpeg";
import img5 from "../Card/5.jpeg";
import img6 from "../Card/6.jpeg";
import img7 from "../Card/7.jpeg";
import img8 from "../Card/8.jpeg";
import img9 from "../Card/9.jpeg";
import img10 from "../Card/10.jpeg";
import img11 from "../Card/11.jpeg";
import img12 from "../Card/12.jpeg";
import Card from "../Card";
import "./Body.css";


class Body extends Component{
    state={
        images: [
            {id: 1, img: img1, clicked: false},
            {id: 2, img: img2, clicked: false},
            {id: 3, img: img3, clicked: false},
            {id: 4, img: img4, clicked: false},
            {id: 5, img: img5, clicked: false},
            {id: 6, img: img6, clicked: false},
            {id: 7, img: img7, clicked: false},
            {id: 8, img: img8, clicked: false},
            {id: 9, img: img9, clicked: false},
            {id: 10, img: img10, clicked: false},
            {id: 11, img: img11, clicked: false},
            {id: 12, img: img12, clicked: false}
        ]
    };
    shuffle = (id) => {
        const cards = this.state.images;
        for(var i=0; i<this.state.images.length; i++){
            if(this.state.images[i].id == id && this.state.images[i].clicked == false){
                this.state.images[i].clicked = true;
            }else if(this.state.images[i].clicked != false){
                
            }
            
        }
        
        cards.sort((a, b) => {
            return 0.5 - Math.random();
          });
        this.setState({images: cards});
    }
    render() {
        const { images } = this.state;
    return (
        
        <div className="cards">
          
        {images.map(({id,img,clicked}) => (
            <Card id={id} cb={this.shuffle} img={img}/>))
        }
        </div>
    );
    }
}
export default Body;