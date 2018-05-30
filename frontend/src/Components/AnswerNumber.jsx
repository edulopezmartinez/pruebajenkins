import React, { Component } from 'react';
class AnswerNumber extends Component {
  
  render() {
    return (
        <div className="form-group col-md-6">
            <label>{this.props.item.order}. {this.props.item.question}</label>
            <input type="number" className="form-control col-md-2" min="0" max="10" required/>
        </div> 
    );
  }
}
export default AnswerNumber;


