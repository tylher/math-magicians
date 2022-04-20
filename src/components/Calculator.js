import { Component } from 'react';
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
  render() {
    return (
      <table>
        <tr>
          <td colSpan="4" className="right">
            <input type="digit" placeholder="0" />
          </td>
        </tr>
        {content.map((row) => (
          // eslint-disable-next-line react/jsx-key
          <tr>
            {row.map((item, i) => {
              if (i === row.length - 1) {
                return <td className="right">{item}</td>;
              }
              if (row.length === 3 && i === 0) {
                return (
                  <td colSpan="2">{item}</td>
                );
              }
              return (
              // eslint-disable-next-line react/jsx-key
                <td>{item}</td>
              );
            })}
          </tr>
        ))}
      </table>
    );
  }
}

export default Calculator;
