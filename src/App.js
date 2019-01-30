import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';
import Person from './Person/Person';
import './App.scss';

class App extends Component {

    state = {
        persons: [

            {id: uuidv4(), name: 'Isaac', age: 23},
            {id: uuidv4(), name: 'Isobel', age: 47},
            {id: uuidv4(), name: 'Ferdinand', age: 18}
        ],
        username: 'morty',
        showPersons: false
    };
    //teken from https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
    fibonacci = (num, memo) => {
        memo = memo || {};

        if (memo[num]) return memo[num];
        if (num <= 1) return 1;

        return memo[num] = this.fibonacci(num - 1, memo) + this.fibonacci(num - 2, memo);
    };


    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesshow = this.state.showPersons;
        this.setState({showPersons: !doesshow});
        console.log(uuidv4());
    };


    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                        />
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hello i'm a robot</h1>
                <p>this is looking good</p>
                <button onClick={this.togglePersonsHandler}>Switch name</button>
                {persons}
            </div>
        );
    }
}

export default App;
