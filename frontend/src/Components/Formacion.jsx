import React, { Component } from 'react';
class Formacion extends Component {
  render() {
    return (
      <div>
      <main class = "formacion">
        <h1> ¿Qué es Blue Graduates? </h1>
        <div class ="divText" >
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie.</p>
            <p>
            uCum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.
            Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie.</p>
        </div>
        <div>
            <h2 > HORARIO </h2>
            <div class="divHorario">
                <div class="row">
                    <div class="col-sm">
                        <p>
                        <a className="btn btn-outline-secondary btn-lg btn-block" href="http://localhost:8000/horario.pdf" target="_blank"> Ver</a>
                        </p>
                    </div>
                    <div class="col-sm">
                        <p>
                        <a className="btn btn-outline-dark btn-lg btn-block" href="http://localhost:8000/horario.xlsx" download> Descargar</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <h2> TEMARIO </h2>
            <div class="divTemario">
                <div class="row">
                    <div class="col-sm">
                        <p>
                        <a className="btn btn-outline-secondary btn-lg btn-block" href="http://localhost:8000/temario.pdf" target="_blank"> Ver</a>
                        </p>
                    </div>
                    <div class="col-sm">
                        <p>
                        <a className="btn btn-outline-dark btn-lg btn-block" href="http://localhost:8000/temario.pptx" download> Descargar</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </main>

      </div>


    )
  }
}
export default Formacion;
