import React from 'react';
import styles from './Cockpit.module.scss';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hello i'm a robot</h1>
            <p className={assignedClasses.join(' ')}>this is looking good</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch name
            </button>
        </div>
    );
};
export default cockpit;
