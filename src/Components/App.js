import React, {Component} from 'react';
import Board from './Board.js';
import '../Styles/App.css';

import alien from '../img/alien.png';
import astronaut from '../img/astronaut.png';
import bigcomets from '../img/big comets.png';
import earth from '../img/earth.png';
import flyingstars from '../img/flying stars.png';
import gun from '../img/gun.png';
import moon from '../img/moon.png';
import probe from '../img/probe.png';
import redplanet from '../img/red planet.png';
import rocket from '../img/rocket.png';
import satelite from '../img/satelite.png';
import satellites from '../img/satellites.png';
import saturn from '../img/saturn.png';
import ship from '../img/ship.png';
import stars from '../img/stars.png';
import sun from '../img/sun.png';
import system from '../img/system.png';
import telescope from '../img/telescope.png';
import back from '../img/back.png';
import empty from '../img/empty.png';

class App extends Component {
  count = 0;
  tempImages =[alien, alien, astronaut, astronaut, bigcomets, bigcomets, earth, earth, flyingstars, flyingstars, gun, gun, moon, moon, probe, probe, redplanet, redplanet, rocket, rocket, satelite, satelite, satellites, satellites, saturn, saturn, ship, ship, stars, stars, sun, sun, system, system, telescope, telescope];
  state = {
    indexes: [],
    choices: [],
    images: []
  }

  reset = () => {
    const tempIndexes = this.tempImages.map((img ,index) => index);
    const length = tempIndexes.length;
    this.count = 0;
    for(let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = tempIndexes[i];
        tempIndexes[i] = tempIndexes[j];
        tempIndexes[j] = temp;
    }
    this.setState({
      indexes: tempIndexes,
      images: this.tempImages.map((img) => back)
    })
  }

  isPair = () => {
    this.count++;
    let choices = this.state.choices;
    let images = this.state.images;
    const index1 = choices[0];
    const index2 = choices[1];
    if((choices[0] - choices[1] === 1) || (choices[0] - choices[1] === -1)) {
      console.log('PARA');
      this.setState({
        choices: []
      });
      setTimeout(() =>
        {images[index1] = empty;
        images[index2] = empty;
        this.setState({
          images
        });}
      ,1000);
    }
    else {
        this.setState({
          choices: [],
        });
        setTimeout(() =>
        {images[index1] = back;
        images[index2] = back;
        this.setState({
          images
        });}
      ,1000);
    }
  }

  addChoice = (x) => {
    let choices = this.state.choices;
    let images = this.state.images;
    images[x] = this.tempImages[x];
      if(choices[0] !== x) choices.push(x);
      this.setState({
        choices,
        images
      });
      if(this.state.choices.length === 2) this.isPair();
  }

  componentDidMount = () => this.reset();

  render() {
    const finishArray = this.state.images.map(image => image === empty);
    console.log(this.count);
    const finish = finishArray.indexOf(false);
    let render = <Board images={this.state.images} indexes={this.state.indexes} reset={this.reset} action={this.addChoice} empty={empty} back={back}/>;
    if(finish === -1) render = <><h2>Congratulations!</h2><p>Amount of moves: {this.count}</p></>;
    return (
      <div className="App">
        <h1>Space for your memory</h1>
        {render}
      </div>
    );
  }
}

export default App;
