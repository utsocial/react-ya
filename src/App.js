import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.generarAleatorio = this.generarAleatorio.bind(this);
    this.state = {
      numero: 'No se ha generado número aleatorio aún'
    }
  }
  render() {
    return (
      <div>
        <p>Número aleatorio: {this.state.numero}</p>
        <button onClick={this.generarAleatorio}>Generar número aleatorio</button>
      </div>
    );
  }
   
  generarAleatorio() {
    const v=Math.trunc(Math.random()*10);
    this.setState( {
      numero: v
    })
  }
}

export default App;