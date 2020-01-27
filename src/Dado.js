import React, { Component } from "react";
import "./Dado.css";

class Dado extends Component {
    render() {
        return <div className="Dado-recuadro">{this.props.valor}</div>;
    }
}

export default Dado;
