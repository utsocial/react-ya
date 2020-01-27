import React, { Component } from "react";
import "./App.css";

// http://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=12&codigo=12&inicio=0

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      edad: "",
      estudio: false
    };
    // Enlazamos los métodos que se ejecutarán cuando haya cambios en los controles de formulario
    // Si no nos lanza: Cannot read property 'setState' of undefined en cada metodo: procesar, cambioXXXX
    this.procesar = this.procesar.bind(this);
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioEdad = this.cambioEdad.bind(this);
    this.cambioEstudio = this.cambioEstudio.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.procesar}>
          <p>
            Ingrese nombre:
            <input
              type="text"
              value={this.state.nombre}
              onChange={this.cambioNombre}
            />
          </p>
          <p>
            Ingrese edad:
            <input
              type="number"
              value={this.state.edad}
              onChange={this.cambioEdad}
            />
          </p>
          <p>
            Estudios:
            <input
              type="checkbox"
              value={this.state.estudio}
              onChange={this.cambioEstudio}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
        <hr />
        <h3>Datos Ingresados</h3>
        <p>Nombre:{this.state.nombre}</p>
        <p>Edad:{this.state.edad}</p>
        <p>Estudios:{this.state.estudio ? "con estudios" : "sin estudios"}</p>
      </div>
    );
  }

  procesar(e) {
    e.preventDefault();
    alert(
      "Dato cargado " +
        this.state.nombre +
        " " +
        +this.state.edad +
        " " +
        +this.state.estudio
    );
  }

  cambioNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }

  cambioEdad(e) {
    this.setState({
      edad: e.target.value
    });
  }

  cambioEstudio(e) {
    this.setState({
      estudio: !this.state.estudio
    });
  }
}

export default App;
