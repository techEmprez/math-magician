import React, { useState } from 'react';
import calculate from './logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [numbers, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const afterClick = (e) => {
    const buttonName = e.target.innerText;
    setState(calculate({
      ...numbers,
    }, buttonName));
  };

  const { total, operation, next } = numbers;

  const result = (
    <p>
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </p>
  );

  return (
    <div className="calculator-wrapper">
      <div className="cal-input">{result}</div>
      <div className="grid-container">
        <div className="grid-item1"><button type="button" className="button" onClick={afterClick}>AC</button></div>
        <div className="grid-item2"><button type="button" className="button" onClick={afterClick}>+/-</button></div>
        <div className="grid-item3"><button type="button" className="button" onClick={afterClick}>%</button></div>
        <div className="grid-item4" id="right-side"><button type="button" className="button" onClick={afterClick}>÷</button></div>
        <div className="grid-item5"><button type="button" className="button" onClick={afterClick}>7</button></div>
        <div className="grid-item6"><button type="button" className="button" onClick={afterClick}>8</button></div>
        <div className="grid-item7"><button type="button" className="button" onClick={afterClick}>9</button></div>
        <div className="grid-item8" id="right-side"><button type="button" className="button" onClick={afterClick}>x</button></div>
        <div className="grid-item9"><button type="button" className="button" onClick={afterClick}>4</button></div>
        <div className="grid-item10"><button type="button" className="button" onClick={afterClick}>5</button></div>
        <div className="grid-item11"><button type="button" className="button" onClick={afterClick}>6</button></div>
        <div className="grid-item12" id="right-side"><button type="button" className="button" onClick={afterClick}>-</button></div>
        <div className="grid-item13"><button type="button" className="button" onClick={afterClick}>1</button></div>
        <div className="grid-item14"><button type="button" className="button" onClick={afterClick}>2</button></div>
        <div className="grid-item15"><button type="button" className="button" onClick={afterClick}>3</button></div>
        <div className="grid-item16" id="right-side"><button type="button" className="button" onClick={afterClick}>+</button></div>
        <div className="grid-item17"><button type="button" className="button" onClick={afterClick}>0</button></div>
        <div className="grid-item18"><button type="button" className="button" onClick={afterClick}>.</button></div>
        <div className="grid-item19" id="right-side"><button type="button" className="button" onClick={afterClick}>=</button></div>
      </div>
    </div>
  );
};

export default Calculator;
