import { Component } from "react";
import './Calculator.css'

export default class Calculator  extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tr>
                    <td colSpan='4' class="right"><input type="text" /></td>
                </tr>
                <tr>
                    <td>AC</td>
                    <td>+/-</td>
                    <td>%</td>
                    <td class="right">&#247;</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td class="right">&#215;</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td class="right">&#8722;</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td class="right">&#43;</td>
                </tr>
                <tr>
                    <td colspan="2">0</td>
                    <td>.</td>
                    <td class="right">&#43;</td>
                </tr>
            </table>
        )
    }
}