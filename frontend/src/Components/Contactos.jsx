import React, { Component } from "react";

class Contactos extends Component {

  state = {
    contacto: [
     ]
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://back:8000/users');
      const users = await res.json();

      this.setState({
        contacto: users.result,
      });
      console.log(this.state);
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
