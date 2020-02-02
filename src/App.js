import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = null;

  fetchData = () => {
    // this.state = {}
    console.log(this.state);
    if (this.state == null) {
      fetch("http://scratchya.com.ar/vue/datos.php")
        .then(response => {
          return response.json();
        })
        .then(art => {
          this.setState({ articulos: art });
        });
    }
  };

  render() {
    this.fetchData();
    return (
      <div>
        <button onClick={this.fetchData}>llamar ajax</button>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {this.state &&
              this.state.articulos.map(art => {
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
