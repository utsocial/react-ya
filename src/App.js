import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      // https://overreacted.io/es/why-do-we-write-super-props/
      // 🔴 Aún no se puede usar `this`
      super(props);
      // ✅ Sin embargo ahora no hay problemas
    this.presion = this.presion.bind(this);
    console.log(props);      // ✅ {}
    console.log(this.props); // ✅ {}
    // 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.presion}>
          <p>Ingrese primer valor:
            <input type="number" name="valor1" />
          </p>
          <p>Ingrese segundo valor:
            <input type="number" name="valor2" />
          </p>        
          <p>
            <input type="submit" value="Sumar" />
          </p>
        </form>
      </div>
    );
  }

  presion(e) {
    e.preventDefault();
    const v1=parseInt(e.target.valor1.value, 10);
    const v2=parseInt(e.target.valor2.value, 10);
    const suma=v1+v2;
    alert('La suma es:'+suma);
  }
}

export default App;