import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, logOut, selectLogin} from './loginSlice';
import styles from '../counter/Counter.module.css';
export function Login() {
    const login = useSelector(selectLogin);
    const dispatch = useDispatch();


    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="logIn"
                    onClick={() => dispatch(logIn())}
                >
                    logIn
                </button>
                <span className={styles.value}>{login.toString()}</span>
                <button
                    className={styles.button}
                    aria-label="logOut"
                    onClick={() => dispatch(logOut())}
                >
                    logOut
                </button>
            </div>
        </div>
    );
}
