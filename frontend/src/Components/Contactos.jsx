import React, { Component } from "react";

class Contactos extends Component {

  state = {
    Contactos: [],
    contacto: [
        {'email':'laura@gmail.com', 'name':'Laura', 'lastname':'Martin', 'img':'img/contacto1.png', 'description':'info1'},
        {'email':'carlos@gmail.com', 'name':'Carlos', 'lastname':'Alonso', 'img':'img/contacto2.png', 'description':'info2'},
        {'email':'sergio@gmail.com', 'name':'Sergio', 'lastname':'marino', 'img':'img/contacto3.png', 'description':'info3'},
        {'email':'edu@gmail.com', 'name':'Edu', 'lastname':'Lopez', 'img':'img/contacto4.png', 'description':'info4'},
        {'email':'bea@gmail.com', 'name':'Bea', 'lastname':'Redondo', 'img':'img/contacto5.png', 'description':'info5'}
    ]
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const Contactos = await res.json();
      this.setState({
        Contactos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
    <section id="team" class="pb-5">
        <div class ="container">
        <h5 class="section-title h1">GRADUATES</h5>
        <div class = "row">
        CONTACTO 1

        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div class="mainflip">
                    {this.state.contacto.map(item => (
                        <div>
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src={item.img} /></p>
                                        <h4 class="card-title">{item.name} {item.surname}</h4>
                                        <p class="card-text">{item.email}</p>
                                        <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class ="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Sunlimetech</h4>
                                        <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </div>
        </div>
    </section>
    );
  }

}
 
export default Contactos;