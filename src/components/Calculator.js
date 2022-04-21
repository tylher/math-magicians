import { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const content = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

export const Calculator = () => {
  const [obj, setObj] = useState({});

  const handleClick = (e) => {
    setObj(calculate(obj, e.target.textContent));
  };
  const { next, total } = obj;
  return (
    <div className="column">
      <div className="row">
        <input type="digit" placeholder="0" value={next || total} />
      </div>
      {content.map((row) => (
        <div className="row" key={row.id}>
          {row.map((item, i) => {
            if (i === row.length - 1) {
              return <button type="button" key={item.i} onClick={(e) => handleClick(e)} className="right">{item}</button>;
            }
            if (row.length === 3 && i === 0) {
              return (
                <button type="button" key={item.i} onClick={(e) => handleClick(e)} className="w-2">{item}</button>
              );
            }
            return (
              <button type="button" key={item.i} onClick={(e) => handleClick(e)}>{item}</button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
