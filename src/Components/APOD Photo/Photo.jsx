import React from 'react';
import {Card, CardContent, CardMedia, CardHeader, TextField} from '@material-ui/core';

const APODPhoto = (props) => {
    if(!props.url) {
        return (
            <h3>Loading...</h3>
        );
    }
    return (
        <div>
            <Card>
                <CardHeader title={props.title}></CardHeader>
                <CardMedia component='img' src={props.url} alt={props.title}/>
                <CardContent children={props.explanation}></CardContent>
            </Card>
        </div>
    );
};

export default APODPhoto;