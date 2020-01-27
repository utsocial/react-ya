import React, { Component } from "react";
import "./App.css";

// http://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=10&codigo=10&inicio=0

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: []
    };
  }

  componentWillMount() {
    fetch("http://scratchya.com.ar/vue/datos.php")
      .then(response => {
        return response.json();
      })
      .then(art => {
        this.setState({ articulos: art });
      });
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
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(art => {
              return (
                <tr key={art.codigo}>
                  <td>{art.codigo}</td>
                  <td>{art.descripcion}</td>
                  <td>{art.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
