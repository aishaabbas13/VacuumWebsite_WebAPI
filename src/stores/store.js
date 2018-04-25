import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import charityReducer from "../reducers/charityReducer";
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = createStore(
    combineReducers({
        auth: authReducer,
        charity: charityReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;