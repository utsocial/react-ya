import React, { Component } from 'react';
import './App.css';
import Dado from './Dado'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor1: this.generarValor(),
      valor2: this.generarValor(),
      valor3: this.generarValor()
    }
    this.tirar=this.tirar.bind(this); // enlazamos el método a ejecutar cuando se presione el botón:
  }

  render() {
    const valor1 = Math.trunc(Math.random()*6)+1;
    const valor2 = Math.trunc(Math.random()*6)+1;
    const valor3 = Math.trunc(Math.random()*6)+1;
    return (
      <div>
        <Dado valor={valor1} />
        <Dado valor={valor2} />
        <Dado valor={valor3} />       
        <button onClick={this.tirar}>Tirar</button>         
      </div>      
    );
  }

  tirar() {
    this.setState({
      valor1: this.generarValor(),
      valor2: this.generarValor(),
      valor3: this.generarValor()      
    });
  }

  generarValor() {
    return Math.trunc(Math.random()*6)+1;
  }

}

export default App;