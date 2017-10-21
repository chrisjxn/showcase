import React, { Component } from 'react';

class Sum extends Component {

    constructor() {
        super();

        this.state = {
            userInput1: 0,
            userInput2: 0,
            sum: null
        };
    }

    updateUserInput1(num1) {
        this.setState({
            userInput1: parseInt(num1, 10)
        });
    }

    updateUserInput2(num2) {
        this.setState({
            userInput2: parseInt(num2, 10)
        });
    }

    sumNums(userInput1, userInput2) {
        this.setState({
            sum: userInput1 + userInput2
        });
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input
                    className="inputLine"
                    onChange={e => this.updateUserInput1(e.target.value)}>
                </input>
                <input
                    className="inputLine"
                    onChange={e => this.updateUserInput2(e.target.value)}>
                </input>
                <button
                    className="confirmationButton"
                    onClick={e => this.sumNums(this.state.userInput1, this.state.userInput2)}>
                    Solve
                </button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;