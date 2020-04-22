import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

const Photo = (props) => {
    if(!props.url) {
        return (
            <h3>Loading...</h3>
        );
    }
    return (
        <div>
            <CardBody body>
                <CardTitle body className='text-center'>{props.title}</CardTitle>
                <CardImg top width='80%'src={props.url} alt={props.title}/>
                <CardText body className='text-center'>{props.explanation}</CardText>
            </CardBody>
        </div>
    );
};

export default Photo;