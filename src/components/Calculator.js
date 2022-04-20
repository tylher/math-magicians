import { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const content = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

// eslint-disable-next-line react/prefer-stateless-function
export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { obj } = this.state;
    this.setState({ obj: calculate(obj, e.target.textContent) });
  }

  render() {
    const { obj } = this.state;
    const { next, total } = obj;
    return (
      <div className="column">
        <div className="row">
          <input type="digit" placeholder="0" value={next || total} />
        </div>
        {content.map((row) => (
          // eslint-disable-next-line react/jsx-key
          <div className="row">
            {row.map((item, i) => {
              if (i === row.length - 1) {
                return <button type="button" onClick={this.handleClick} className="right">{item}</button>;
              }
              if (row.length === 3 && i === 0) {
                return (
                  <button type="button" onClick={this.handleClick} className="w-2">{item}</button>
                );
              }
              return (
              // eslint-disable-next-line react/jsx-key
                <button type="button" onClick={this.handleClick}>{item}</button>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

export default Calculator;
