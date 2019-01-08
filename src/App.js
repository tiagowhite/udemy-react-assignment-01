import React, {Component} from 'react';
import './App.scss';
import Person from './Person/Person';
import {UserOutput, UserInput} from "./User/User";
import * as names from './Person/Names';

class App extends Component {

    randomNames = names['default'];

    state = {
        persons: [
            {
                name: this.randomNames[Math.floor(Math.random() * this.randomNames.length)],
                age: Math.floor(Math.random() * Math.floor(57))
            }
        ],
        username: 'morty'
    };
    //teken from https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
    fibonacci = (num, memo) => {
        memo = memo || {};

        if (memo[num]) return memo[num];
        if (num <= 1) return 1;

        return memo[num] = this.fibonacci(num - 1, memo) + this.fibonacci(num - 2, memo);
    };

    switchNameHandler = () => {
        this.setState({
            persons: [
                {
                    name: this.randomNames[Math.floor(Math.random() * this.randomNames.length)],
                    age: Math.floor(Math.random() * Math.floor(57))
                }
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: event.target.value,
                    age: Math.floor(Math.random() * Math.floor(57))
                }
            ]
        })
    };


    userInputHandler = (event) => {
        this.setState({
                username: event.target.value
            }
        )
    };

    render() {
        return (
            <div className="App">
                <h1>Hello i'm a robot</h1>
                <p>this is looking good</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler}
                    changed={this.nameChangedHandler}
                />
                <UserInput
                    changed={this.userInputHandler}
                />
                <UserOutput
                    text={"this is a dummy text passed as argument to 'userOutput' component"}
                />
                <UserOutput
                    text={"this is a random fibonaci sequence: " + this.fibonacci(Math.random() * 50).toString()}
                />
                <UserOutput
                    text={"Username:"}
                    username={"Rick Sanchez"}
                />
                <UserOutput
                    text={"Username via state binding: "}
                    username={this.state.username}

                />

            </div>
        );
    }
}

export default App;
