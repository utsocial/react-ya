import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          codigo: 1,
          descripcion: "papas",
          precio: 12.52
        },
        {
          codigo: 2,
          descripcion: "naranjas",
          precio: 21
        },
        {
          codigo: 3,
          descripcion: "peras",
          precio: 18.2
        }
      ]
    };
    this.borrar = this.borrar.bind(this);
  }
  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borra?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => {
              return (
                <tr key={elemento.codigo}>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.descripcion}</td>
                  <td>{elemento.precio}</td>
                  <td>
                    <button onClick={() => this.borrar(elemento.codigo)}>
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  borrar(cod) {
    var temp = this.state.articulos.filter(el => el.codigo !== cod);
    this.setState({
      articulos: temp
    });
  }
}

export default App;
