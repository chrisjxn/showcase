import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            unfilteredArray: [{
                year: 2011,
                make: 'BMW',
                model: '1 Series M',
                transmission: 'manual'
            }, {
                year: 2013,
                make: 'Mercedes-Benz',
                model: 'Sprinter',
                seats: 12
            }, {
                make: 'Honda',
                model: 'Grom',
                color: 'white'
            }, {
                year: 2017,
                make: 'Volkswagen',
                interior: 'plaid'
            }],
            userInput: '',
            filteredArray: []
        }
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
            if (unfilteredArray[i].hasOwnProperty(userInput)) {
                filteredArray.push(unfilteredArray[i]);
            }
        }

        this.setState({
            filteredArray: filteredArray
        });
    }



    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
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
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        );
    }
}


export default FilterObject;