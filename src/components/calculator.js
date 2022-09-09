import React from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <input className="cal-input" placeholder="0" />
        <div className="grid-container">
          <div className="grid-item1"><button type="button" className="button">AC</button></div>
          <div className="grid-item2"><button type="button" className="button">+/-</button></div>
          <div className="grid-item3"><button type="button" className="button">%</button></div>
          <div className="grid-item4" id="right-side"><button type="button" className="button">+</button></div>
          <div className="grid-item5"><button type="button" className="button">7</button></div>
          <div className="grid-item6"><button type="button" className="button">8</button></div>
          <div className="grid-item7"><button type="button" className="button">9</button></div>
          <div className="grid-item8" id="right-side"><button type="button" className="button">x</button></div>
          <div className="grid-item9"><button type="button" className="button">4</button></div>
          <div className="grid-item10"><button type="button" className="button">5</button></div>
          <div className="grid-item11"><button type="button" className="button">6</button></div>
          <div className="grid-item12" id="right-side"><button type="button" className="button">-</button></div>
          <div className="grid-item13"><button type="button" className="button">1</button></div>
          <div className="grid-item14"><button type="button" className="button">2</button></div>
          <div className="grid-item15"><button type="button" className="button">3</button></div>
          <div className="grid-item16" id="right-side"><button type="button" className="button">+</button></div>
          <div className="grid-item17"><button type="button" className="button">0</button></div>
          <div className="grid-item18"><button type="button" className="button">.</button></div>
          <div className="grid-item19" id="right-side"><button type="button" className="button">=</button></div>
        </div>
      </div>
    );
  }
}

export default Calculator;
