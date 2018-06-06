import React, { Component } from 'react';
class Formacion extends Component {
  render() {
    return (
        <div>
            <div class="jumbotron" id="fondoDiv">
                <div class="container">
                    <div class="col-md-12">
                        <div class="text-center text-white">
                            <h1 class="display-2 mb-2">¿Qué es Blue Graduates?</h1>
                            <h5> 
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
                            nec molestie.</p></h5> 
                        </div>
                    </div>
                </div>
            </div>

            <section id="about">
                <div class="container">
                    <div class="text-intro">
                        <h2>HORARIO</h2>
                        <div class="divHorario">
                            <div class="row">
                                <div class="col-sm">
                                    <p>
                                    <a className="btn btn-outline-dark btn-lg btn-block" href="http://localhost:8000/horario.pdf" target="_blank"> Ver</a>
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <p>
                                    <a className="btn btn-outline-dark btn-lg btn-block" href="http://localhost:8000/horario.xlsx" download> Descargar</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h2>TEMARIO</h2>
                        <div class="divTemario">
                            <div class="row">
                                <div class="col-sm">
                                    <p>
                                    <a className="btn btn-outline-dark btn-lg btn-block" href="http://localhost:8000/temario.pdf" target="_blank"> Ver</a>
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
                </div>
            </section>
        </div>
    );
  }
}
export default Formacion;