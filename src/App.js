import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articulos: [{
                      codigo: 1, 
                      descripcion: 'papas',
                      precio: 12.52
                 },{
                      codigo: 2, 
                      descripcion: 'naranjas',
                      precio: 21
                 },{
                      codigo: 3, 
                      descripcion: 'peras',
                      precio: 18.20
                 }]
    }
    this.eliminarUltimaFila = this.eliminarUltimaFila.bind(this);
  }
  render() {
    return (
      <div>
        <table border="1">
        <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th></tr></thead>
        <tbody>
        {this.state.articulos.map(elemento => {
          return (
            <tr key={elemento.codigo}>
              <td>
                {elemento.codigo}  
              </td>
              <td>
                {elemento.descripcion}
              </td>
              <td>
                {elemento.precio}
              </td>              
            </tr>
          )
        })}    
        </tbody>    
        </table>
        <button onClick={this.eliminarUltimaFila}>Eliminar última fila</button>
      </div>
    );
  }

  eliminarUltimaFila() {
    if (this.state.articulos.length > 0) {
      var temp = this.state.articulos;
      temp.pop();
      this.setState({
        articulos: temp
      })
    }  
  }
}

export default App;