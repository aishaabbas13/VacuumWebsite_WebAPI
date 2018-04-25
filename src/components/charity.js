import React, { Component }  from 'react';
import {connect} from "react-redux";
import { Glyphicon, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import {fetchCharity} from "../actions/charityActions";

//support routing by creating a new component

class Charity extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedCharity == null)
            dispatch(fetchCharity(this.props.charityName));
    }

    render() {
        /*     const ActorInfo = ({actors}) => {
                 return actors.map((actor, i) =>
                     <p key={i}>
                         <b>{actor.actorName}</b> {actor.characterName}
                     </p>
                 );
             };

             const ReviewInfo = ({reviews}) => {
                 return reviews.map((review, i) =>
                     <p key={i}>
                     <b>{review.username}</b> {review.review}
                         <Glyphicon glyph={'star'} /> {review.rating}
                     </p>
                 );
             }*/

        const DetailInfo = ({currentCharity}) => {
            if (!currentCharity) { // evaluates to true if currentMovie is null
                return <div>Loading...</div>;
            }
            return (
                <Panel>
                    <Panel.Heading>Charity Detail</Panel.Heading>
                    <Panel.Body><Image className="image" src={currentCharity.imageUrl} thumbnail/></Panel.Body>
                    <ListGroup>
                        <ListGroupItem>{currentCharity.Name}</ListGroupItem>
                        <ListGroupItem>{currentCharity.About}</ListGroupItem>
                        <ListGroupItem><h4><Glyphicon glyph={'star'}/> {currentCharity.Amount} </h4></ListGroupItem>
                    </ListGroup>
                </Panel>
            );
        };
        return (
            <DetailInfo currentCharity={this.props.selectedCharity}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        selectedCharity: state.charity.selectedCharity,
        charityName: ownProps.match.params.charityName
    }
}

export default withRouter(connect(mapStateToProps)(Charity));