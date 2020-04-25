import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import EARTHPhoto from './EARTH Photo/EARTHPhoto';

function GetEARTHPhoto(props) {
    const [image, setImage] = useState([]);

    useEffect(() => {
        Axios
        .get(`https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=bOfQh3L3axExpg0pxNWZ6OJljzLDmxps64ipnWtf`)
        .then(res => {
            setImage(res.data);
            
        })
        .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
            {
                <EARTHPhoto 
                    // date={image.date}
                    url={image.url}
                /> 
            }
        </div>
    );
};

export default GetEARTHPhoto;