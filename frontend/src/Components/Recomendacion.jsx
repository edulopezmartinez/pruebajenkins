import React, { Component } from 'react';
import AnswerNumber from './AnswerNumber';
import AnswerSeveral from './AnswerSeveral';


class Recomendacion extends Component {
  state = {
    recommendation: [],
  };
  
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:5000/recommendation');
      const recommendation = await res.json();
      
      this.setState({
        recommendation: recommendation.result,
      });
      console.log(this.state);
    } catch (e) {
      console.log(e);
    }
  }

  answerType(lengthAnswers, item) {
    if(lengthAnswers > 0){
      return <AnswerSeveral key={item.order} item={item} />;
    }
    else{
      return <AnswerNumber key={item.order} item={item} />;
    }
  }

  handleSubmit(event) {
    alert("1.Proyecto 1 \n2.Proyecto 2 \n3.Proyecto 3");
    event.preventDefault();
  }

  render() {
    return (
      <form className="col-md-12" onSubmit={this.handleSubmit}>
        {
          this.state.recommendation.map(item => (
            this.answerType(item.answers.length, item)
        ))}
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    );
  }
}
export default Recomendacion;


