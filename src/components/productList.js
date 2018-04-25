import React, { Component } from 'react';
import { fetchCharities } from '../actions/charityActions';
import { setCharity } from '../actions/charityActions';
import {connect} from "react-redux";
import { Image } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { Glyphicon } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

//require a callback function to be sent to MovieList to update the header subtitle

class charityList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCharities());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setCharity(this.props.movies[selectedIndex]));
    }

    handleClick = (charity) => {
        const {dispatch} = this.props;
        dispatch(setCharity(charity));
    }

    render() {

        const MovieListCarousel= ({charityList}) => {
            if (!charityList) { // evaluates to true if currentMovie is null
                return <div>Loading...</div>;
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {charityList.map((movie) =>
                        <Carousel.Item key={movie._id}>
                            <div>
                                <LinkContainer to={'/movie/'+movie._id} onClick={()=>this.handleClick(movie)}>
                                    <Image className="image" src={movie.imageUrl} thumbnail />
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{movie.title}</h3>
                                <Glyphicon glyph={'star'} /> {movie.avgRating} &nbsp;&nbsp; {movie.releaseDate}
                            </Carousel.Caption>
                        </Carousel.Item>)}
                </Carousel>);
        }

        return (
            <MovieListCarousel charityList={this.props.charities} />
        );
    }
}

const mapStateToProps = state => {
    return {
        charities: state.charity.charities
    }
}

export default connect(mapStateToProps)(charityList);

   <Panel.Body><ReviewInfo reviews={currentMovie.reviews} /></Panel.Body>