import React from 'react';
import {Card, CardMedia, CardHeader} from '@material-ui/core';

const EARTHPhoto = (props) => {
    if(!props.url) {
        return (
            <h3>Loading...</h3>
        );
    }
    return (
        <div>
            <Card>
                <CardHeader title='Satellite image of Houston, TX using the NASA Earth API'></CardHeader>
                <CardMedia component='img' src={props.url} alt={props.title}/>
            </Card>
        </div>
    );
};

export default EARTHPhoto;