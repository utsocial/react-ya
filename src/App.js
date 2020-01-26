import React, { Component } from 'react';
import './App.css';
import ListadoResultados from './ListadoResultados';
import FormularioNumeros from './FormularioNumeros';

class App extends Component {
  constructor(props) {
    super(props);
    this.sumar=this.sumar.bind(this);
    this.state = {
      resultados: []
    }
  }

  render() {
    return (
      <div>
        <FormularioNumeros onSumar={this.sumar} />
        <ListadoResultados resultados={this.state.resultados} />
      </div>
    );
  }

sumar(event) {
  event.preventDefault();
  const v1=parseInt(event.target.valor1.value,10);
  const v2=parseInt(event.target.valor2.value,10);
  const suma=v1+v2;
  const nuevo = {
    resultado: suma,
    valor1: v1,
    valor2: v2
  }
  const vec = this.state.resultados;
  vec.unshift(nuevo);
  this.setState({
    resultados: vec
    });
  }
}

export default App;