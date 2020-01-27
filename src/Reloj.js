import React, { Component } from "react";
//////
// componentWillMount() //se ejecuta antes que el DOM de la componente se haya montado
// componentDidMount() //se ejecuta luego que el DOM de la componente se ha generado (ya se ha ejecutado el método render())
// componentWillUnmount() //se ejecuta antes que el DOM de la componente se destruya

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: new Date()
    };
  }

  render() {
    return <div>{this.state.hora.toLocaleTimeString()}</div>;
  }

  componentDidMount() {
    this.id = setInterval(() => this.cambioSegundo(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  cambioSegundo() {
    this.setState({
      hora: new Date()
    });
  }
}

export default Reloj;
