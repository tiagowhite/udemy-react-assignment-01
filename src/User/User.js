import React from 'react';

const UserInput = (props) => {
    return (
        <div className="User">
            <p>User input: </p>
            <input type="text" onChange={props.changed}  />
        </div>
    )
};

const UserOutput = (props) => {
    return (
        <div className="User">
            <p>{props.text}</p>
            <p>{props.username}</p>
        </div>
    )
};

export {UserInput, UserOutput}