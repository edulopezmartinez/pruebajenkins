import React, { Component } from "react";

class Contactos extends Component {

  state = {
    Contactos: [],
    contacto: [
        {'email':'laura@gmail.com', 'name':'Laura', 'lastname':'Martin', 'img':'img/contacto1.png', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis est id purus porta efficitur. Nulla et metus sit amet lectus vestibulum sodales. Donec egestas porttitor sodales. Sed at facilisis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero a sagittis ullamcorper. '},
        {'email':'carlos@gmail.com', 'name':'Carlos', 'lastname':'Alonso', 'img':'img/contacto2.png', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis est id purus porta efficitur. Nulla et metus sit amet lectus vestibulum sodales. Donec egestas porttitor sodales. Sed at facilisis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero a sagittis ullamcorper. '},
        {'email':'sergio@gmail.com', 'name':'Sergio', 'lastname':'Marino', 'img':'img/contacto3.png', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis est id purus porta efficitur. Nulla et metus sit amet lectus vestibulum sodales. Donec egestas porttitor sodales. Sed at facilisis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero a sagittis ullamcorper. '},
        {'email':'edu@gmail.com', 'name':'Edu', 'lastname':'Lopez', 'img':'img/contacto4.png', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis est id purus porta efficitur. Nulla et metus sit amet lectus vestibulum sodales. Donec egestas porttitor sodales. Sed at facilisis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero a sagittis ullamcorper.'},
        {'email':'bea@gmail.com', 'name':'Bea', 'lastname':'Redondo', 'img':'img/contacto5.png', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis est id purus porta efficitur. Nulla et metus sit amet lectus vestibulum sodales. Donec egestas porttitor sodales. Sed at facilisis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero a sagittis ullamcorper.  '}
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
        <div class = "row">
{this.state.contacto.map(item => (
        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src={item.img} /></p>
                                        <h4 class="card-title">{item.name} {item.lastname}</h4>
                                        <p class="card-text">{item.email}</p>
                                        <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class ="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">{item.name}</h4>
                                        <p class="card-text"> {item.description}</p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
 ))}
        </div>
        </div>
    </section>
    );
  }

}
 
export default Contactos;