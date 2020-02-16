
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import img1 from "./components/Card/1.jpeg";
import img2 from "./components/Card/2.jpeg";
import img3 from "./components/Card/3.jpeg";
import img4 from "./components/Card/4.jpeg";
import img5 from "./components/Card/5.jpeg";
import img6 from "./components/Card/6.jpeg";
import img7 from "./components/Card/7.jpeg";
import img8 from "./components/Card/8.jpeg";
import img9 from "./components/Card/9.jpeg";
import img10 from "./components/Card/10.jpeg";
import img11 from "./components/Card/11.jpeg";
import img12 from "./components/Card/12.jpeg";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topscore: 0,
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

  }
  incrementScore=()=>{
    if(this.state.topscore>this.state.score){
    this.setState({score:this.state.score+1});
    }else 
    this.setState({score:this.state.score+1,topscore:this.state.topscore+1 });
  }
  resetScore= (click)=>{
    var check = click.map((obj)=>({id:obj.id, img: obj.img, clicked: false}));
    this.setState({score: 0, images:check});
    return check;
  }
  shuffle = (id) => {
    var cards = this.state.images;
    var callReset = false;
    for(var i=0; i<this.state.images.length; i++){
        if(this.state.images[i].id == id && this.state.images[i].clicked == false){

            cards[i].clicked = true;
            break;
        }else if(this.state.images[i].id == id && this.state.images[i].clicked != false){
            
            callReset = true;
            break;
        }
        
    }
    if(callReset) {
      cards = this.resetScore(cards);
    } else
    if(this.state.topscore>this.state.score){
      this.setState({score:this.state.score+1});
      }else 
      this.setState({score:this.state.score+1,topscore:this.state.topscore+1 });
    
    cards.sort((a, b) => {
        return 0.5 - Math.random();
      }); 
    this.setState({images: cards});
  }
  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} topscore={this.state.topscore}/>
        <Header />
        <Body incrementcb={this.incrementScore} resetcb={this.resetScore} images={this.state.images} cb={this.shuffle}/>
        <Footer />

      </div>
    );
  }
}

export default App;
