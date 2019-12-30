import React, {Component} from 'react'

class ListadoResultados extends Component {
  render() {
    return (
      <ul>
      {this.props.resultados.map((elemento) => (
        <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
      ))}
    </ul>      
    )
  }

}

export default ListadoResultados;
