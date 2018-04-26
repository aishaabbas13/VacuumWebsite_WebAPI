import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';


export function submitTransactionDonate(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/Transaction/Save?donation=true`, {
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
                localStorage.setItem('username', data.username);
                localStorage.setItem('token', res.token);

                dispatch(userLoggedIn(data.username));
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
                localStorage.setItem('username', data.username);
                localStorage.setItem('token', res.token);

                dispatch(userLoggedIn(data.username));
            })
            .catch( (e) => console.log(e) );
    }
}

