import React, {Component} from 'react';
import styles from './App.scss';
import uuid from 'uuid/v4';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

    state = {
        persons: [
            {id: uuid(), name: 'Isaac', age: 23},
            {id: uuid(), name: 'Isobel', age: 47},
            {id: uuid(), name: 'Ferdinand', age: 18}
        ],
        username: 'morty',
        showPersons: false
    };


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesshow = this.state.showPersons;
        this.setState({showPersons: !doesshow});
    };


    render() {
        let persons = null;
        if (this.state.showPersons) {
        }

        persons = (
            <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
        );

        return (
            <div className={styles.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;

