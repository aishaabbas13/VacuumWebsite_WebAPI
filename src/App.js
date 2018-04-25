import React, { Component } from 'react';
import './App.css';
import MovieHeader from './components/charityHeader';
import MovieList from './components/charityList';
import Movie from './components/charity';
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
                        <MovieHeader />
                        <Route exact path="/" render={()=><MovieList />}/>
                        <Route path="/movielist" render={()=><MovieList />}/>
                        <Route path="/movie/:movieId" render={()=><Movie />}/>
                        <Route path="/signin" render={()=><Authentication />}/>
                    </div>
                </HashRouter>
                </Provider>
            </div>
        );
    }
}

export default App;