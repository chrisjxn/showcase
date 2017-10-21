import React, { Component } from 'react';

class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            unfilteredArray: ['BMW', 'Porsche', 'Audi', 'Mercedes-Benz', 'Subaru', 'Mazda'],
            userInput: '',
            filteredArray: []
        };
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        });
    }

    solveProblem(userInput) {
        let unfilteredArray = this.state.unfilteredArray;
        let filteredArray = [];

        for (let i = 0; i < unfilteredArray.length; i++) {
            if (unfilteredArray[i].search(userInput) !== -1) {
                filteredArray.push(unfilteredArray[i]);
            }
        }

        this.setState({
            filteredArray: filteredArray
        });
    }




    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input
                    className="inputLine"
                    onChange={e => this.updateUserInput(e.target.value)}>
                </input>
                <button
                    className="confirmationButton"
                    onClick={e => this.solveProblem(this.state.userInput)}>
                    Filter
                </button>
                <span className="resultsBox filterStringRB" >Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        );
    }
}

export default FilterString;