import React, { Component } from 'react';
import './Calculator.css';
import ResultComponent from './ResultComponent';
import ButtonsComponent from './ButtonsComponent';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            results: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        }

        else {
            this.setState({
                results: this.state.results + button
            })
        }
    };


    calculate = () => {
        this.setState({
            // eslint-disable-next-line
            results: (eval(this.state.results))
        })
    };

    reset = () => {
        this.setState({
            results: ""
        })
    };

    backspace = () => {
        this.setState({
            results: this.state.results.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <div className="calculator-body">
                        <h1>Calculator</h1>
                        <hr />
                        <ResultComponent results={this.state.results} />
                        <ButtonsComponent onClick={this.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;