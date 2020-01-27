import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estudios: "secundario"
    };
    this.cambioEstudios = this.cambioEstudios.bind(this);
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="radio"
            value="primario"
            checked={this.state.estudios === "primario"}
            onChange={this.cambioEstudios}
          />
          Primario
        </p>
        <p>
          <input
            type="radio"
            value="secundario"
            checked={this.state.estudios === "secundario"}
            onChange={this.cambioEstudios}
          />
          Secundario
        </p>
        <p>
          <input
            type="radio"
            value="universitario"
            checked={this.state.estudios === "universitario"}
            onChange={this.cambioEstudios}
          />
          Universitario
        </p>
        <p>Estudio seleccionado: {this.state.estudios}</p>
      </div>
    );
  }

  cambioEstudios(e) {
    this.setState({
      estudios: e.target.value
    });
  }
}

export default App;
