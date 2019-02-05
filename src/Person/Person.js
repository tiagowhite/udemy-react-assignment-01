import React from 'react';
import Radium from 'radium'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p className="name" onClick={props.click}> Hello! my name is {props.name}, and i'm {props.age} years
                old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);