import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const siglo=21;
    const persona = {
      nombre: 'Juan',
      edad: 34
    }
    const buscadores=['http://www.google.com',
                      'http://www.bing.com',
                      'http://www.yahoo.com'];
    return (
      <div>
        <h1>Título nivel 1</h1>
        <hr />
        <p>Estamos en el siglo {siglo}</p>
        <h3>Acceso a un objeto</h3>
        <p>{persona.nombre} tiene {persona.edad} años</p>
        <h3>Llamada a un método</h3>
        <p>Un valor aleatorio llamando a un método.</p>
        {this.retornarAleatorio()}
        <h3>Calculo inmediato de expresiones</h3>
        3 + 3 = {3+3}
        <hr/>
        <div>
          <a href={buscadores[0]}>Google</a><br />
          <a href={buscadores[1]}>Bing</a><br />
          <a href={buscadores[2]}>Yahoo</a><br />                
        </div>
      <hr/>
      <div>
        {this.mostrarTitulo('Hola Mundo')}
        {this.mostrarTitulo('Fin')}        
      </div>
      </div>
    );
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 10);
  }

  mostrarTitulo(tit) {
    return (<h1>
             {tit}
            </h1>)
  }
}

export default App;