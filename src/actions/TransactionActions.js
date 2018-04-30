import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function userLoggedIn(username){
    return {
        type: actionTypes.USER_LOGGEDIN,
        username: username
    }
}

function logout(){
    return {
        type: actionTypes.USER_LOGOUT
    }
}

function transactionsSet(transactions){
    return {
        type: actionTypes.SET_TRANSACTIONS,
        transactions: transactions
    }
}

function transactionsFetched(transactions) {
    return {
        type: actionTypes.FETCH_TRANSACTIONS,
        transactions: transactions
    }
}

export function submitTransactionDonate(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/Transaction/Save?donation=true`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {

                dispatch(transactionsSet(data));
            })
            .catch( (e) => console.log(e) );
    }
}

export function submitTransaction(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/Transaction/Save`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {

                dispatch(transactionsSet(data));
            })
            .catch( (e) => console.log(e) );
    }
}

export function fetchTransactions(){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/Transaction/GetAll`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(transactionsFetched(res));
            })
            .catch( (e) => console.log(e) );
    }
}

/*
export function submitRegister(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {

                dispatch(submitLogin(data));
            })
            .catch( (e) => console.log(e) );
    }
}
*/
export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        dispatch(logout());
    }
}