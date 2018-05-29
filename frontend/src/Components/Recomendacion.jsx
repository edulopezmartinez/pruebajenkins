import React, { Component } from 'react';
class Recomendacion extends Component {
  state = {
    SistemaDeRecomendacion: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const SistemaDeRecomendacion = await res.json();
      this.setState({
        SistemaDeRecomendacion
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.SistemaDeRecomendacion.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}
export default Recomendacion;