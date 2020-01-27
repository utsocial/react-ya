import React, { Component } from "react";
import "./App.css";

//http://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=14&codigo=14&inicio=0

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ""
    };
    // Enlazamos los métodos que se ejecutarán cuando haya cambios en los controles de formulario:
    this.cambioTexto = this.cambioTexto.bind(this);
  }
  render() {
    return (
      <div>
        <p>
          <textarea
            value={this.state.texto}
            onChange={this.cambioTexto}
            cols="100"
            rows="5"
          ></textarea>
        </p>
        <p>Cantidad de caracteres ingresados: {this.state.texto.length}</p>
      </div>
    );
  }

  cambioTexto(e) {
    this.setState({
      texto: e.target.value
    });
  }
}

export default App;
