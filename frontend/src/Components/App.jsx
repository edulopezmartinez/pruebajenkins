import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Formacion from './Formacion';
import Recomendacion from './Recomendacion';
import Contactos from './Contactos';
import logo from './logo2.png'




class App extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <header className="header2">
                <img className="img" src={logo} />
                <ul>
                    <li ><NavLink exact to="/">Formación</NavLink></li>
                    <li><NavLink to="/Recomendacion">Recomendación de proyecto</NavLink></li>
                    <li><NavLink to="/Contactos">Contactos</NavLink></li>
                </ul>
            </header>
        <div className="content">
            <Route exact path="/" component={Formacion}/>
            <Route path="/Recomendacion" component={Recomendacion}/>
            <Route path="/Contactos" component={Contactos}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;