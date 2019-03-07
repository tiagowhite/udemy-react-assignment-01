import React from 'react';
import styles from './Person.module.scss';

const person = (props) => {
    return (
        <div className={styles.Person}>
            <p onClick={props.click}> Hello! my name is {props.name}, and i'm {props.age} years
                old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person
