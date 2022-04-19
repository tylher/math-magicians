import { Component } from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export class Calculator extends Component {
  render() {
    return (
      <table>
        <tr>
          <td colSpan="4" className="right"><input type="digit" placeholder="0" /></td>
        </tr>
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td className="right">&#247;</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="right">&#215;</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="right">&#8722;</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="right">&#43;</td>
        </tr>
        <tr>
          <td colSpan="2">0</td>
          <td>.</td>
          <td className="right">=</td>
        </tr>
      </table>
    );
  }
}

export default Calculator;
