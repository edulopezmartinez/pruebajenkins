import React, { Component } from 'react';
class AnswerSeveral extends Component {
  
  render() {
    return (
        <div className="form-group col-md-6" id={this.props.item.order}>
            <label>{this.props.item.order}. {this.props.item.question}</label>
            {this.props.item.answers.map(answer => (
            <div className="form-check" key={answer}>
                <input className="form-check-input" type={this.props.item.type === 'varias' ? 'checkbox' : 'radio'} value={answer} name={this.props.item.order} id={answer}/>
                <label className="form-check-label" htmlFor={answer}>
                {answer}
                </label>
            </div>
            ))}
        </div>  
    );
  }
}
export default AnswerSeveral;


