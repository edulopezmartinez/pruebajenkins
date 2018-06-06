import React, { Component } from 'react';
import AnswerNumber from './AnswerNumber';
import AnswerSeveral from './AnswerSeveral';

class Recomendacion extends Component {
 
  state = {
    recommendation: [],
    stylesPrev: { display: "none" },
    stylesNext: { display: ""},
    index: 0
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/recommendation');
      const recommendation = await res.json();
      this.setState({
        recommendation: recommendation.result,
        //recommendation: [1,2,3]
      });
    } catch (e) {
      console.log(e);
    }
  }

  answerType(item = 0, index = 0) {
    if(item === 0){
      return;
    }
    if(item.answers.length > 0){
      return <AnswerSeveral key={index} item={item} />;
    }
    else{
      return <AnswerNumber key={index} item={item} />;
    }
  }

  handleNext(event) {
    if(this.state.index < this.state.recommendation.length){
      this.setState({stylesPrev: {index: this.state.index++}});
      this.setState({stylesPrev: {display: ""}});
      if(this.state.index === this.state.recommendation.length -1){
        this.setState({stylesNext: {display: "none"}});
      }
    }
    event.preventDefault();
  }

  handlePrevious(event) {
    if(this.state.index > 0){
      this.setState({stylesPrev: {index: this.state.index--}});
      this.setState({stylesNext: {display: ""}});
      if(this.state.index === 0){
        this.setState({stylesPrev: {display: "none"}});
      }
    }  
  }

  render() {

    return (
     

    <section id="team" class="pb-5">
        <main className="recomendacion">
        <div class="col-md-4 mt-4">
    		    <div class="card profile-card-5">
                    <div class="card-body pt-0">
                    {
                      this.answerType(this.state.recommendation[this.state.index], this.state.index)
                     }
                  </div>
            </div>
    		</div>

              <div className="botones">
              <ul>
                  <button className="btn btn-primary" style={this.state.stylesPrev} onClick={this.handlePrevious.bind(this)}>&raquo;Previous</button>
                  <button className="displayNone" style={this.state.stylesNext} onClick={this.handleNext.bind(this)}>Next &raquo;</button>
              </ul>
           </div>
        </main>
     </section>
    );
  }
}
export default Recomendacion;


