import React from 'react';

const Photo = (props) => {
    if(!props.url) {
        return (
            <h3>Loading...</h3>
        );
    }
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <img src={props.url} alt={props.title}/>
            <p>{props.explanation}</p>
        </div>
    );
};

export default Photo;