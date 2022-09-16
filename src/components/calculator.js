import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [obj, setobj] = useState({ total: 0, next: null, operation: null });

  const handleClickEvent = (e) => {
    setobj(calculate(obj, e.target.id));
  };

  const { total, next, operation } = obj;
  return (
    <>
      <span style={{
        fontSize: '1.3rem',
        marginLeft: '40px',
        color: 'blue',
      }}
      >
        Lets do some math!

      </span>
      <div className="container">
        <div className="display-result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="row-one grid">
          <button type="button" onClick={handleClickEvent} id="AC" className="col">AC</button>
          <button type="button" onClick={handleClickEvent} id="+/-" className="col">+/-</button>
          <button type="button" onClick={handleClickEvent} id="%" className="col">%</button>
          <button type="button" onClick={handleClickEvent} id="÷" className="col">÷</button>
        </div>
        <div className="row-two grid">
          <button type="button" onClick={handleClickEvent} id="7" className="col">7</button>
          <button type="button" onClick={handleClickEvent} id="8" className="col">8</button>
          <button type="button" onClick={handleClickEvent} id="9" className="col">9</button>
          <button type="button" onClick={handleClickEvent} id="*" className="col">*</button>
        </div>
        <div className="row-three grid">
          <button type="button" onClick={handleClickEvent} id="4" className="col">4</button>
          <button type="button" onClick={handleClickEvent} id="5" className="col">5</button>
          <button type="button" onClick={handleClickEvent} id="6" className="col">6</button>
          <button type="button" onClick={handleClickEvent} id="-" className="col">-</button>
        </div>
        <div className="row-four grid">
          <button type="button" onClick={handleClickEvent} id="1" className="col">1</button>
          <button type="button" onClick={handleClickEvent} id="2" className="col">2</button>
          <button type="button" onClick={handleClickEvent} id="3" className="col">3</button>
          <button type="button" onClick={handleClickEvent} id="+" className="col">+</button>
        </div>
        <div className="row-five grid">
          <div type="button" className="col div-col" />
          <button type="button" onClick={handleClickEvent} id="0" className="col">0</button>
          <button type="button" onClick={handleClickEvent} id="." className="col">.</button>
          <button type="button" onClick={handleClickEvent} id="=" className="col">=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
