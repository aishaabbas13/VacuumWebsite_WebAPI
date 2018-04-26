import React, { Component } from 'react';
import './App.css';
import CharityHeader from './components/charityHeader';
import CharityList from './components/charityList';
import Charity from './components/charity';
import Authentication from './components/authentication';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'

//add routing configuration
class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                <HashRouter>
                    <div>
                        <CharityHeader />
                        <Route exact path="/" render={()=><CharityList />}/>
                        <Route path="/charitylist" render={()=><CharityList />}/>
                        <Route path="/Charity/Get/:charityName" render={()=><Charity />}/>
                        <Route path="/signin" render={()=><Authentication />}/>
                    </div>
                </HashRouter>
                </Provider>
            </div>
        );
    }
}

export default App;