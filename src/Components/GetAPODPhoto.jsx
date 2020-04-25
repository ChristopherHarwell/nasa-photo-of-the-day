import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import APODPhoto from './APOD Photo/Photo';


function GetPhoto(props) {
    const [image, setImage] = useState([]);
    const [date] = useState('');
    useEffect(() => {
        Axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=VWqyZc0tkbR1JhTQi6iUfXvkAOc6sh0JCTXzjYtk&date=${date}`)
        .then(res => {
            setImage(res.data);
        })
        .catch(err => console.error(err));
    },[]);

    return (
        <div>
            {
                <APODPhoto 
                    date={image.newDate}
                    title={image.title}
                    url={image.url}
                    explanation={image.explanation}
                /> 
            }
        </div>
    );
};

export default GetPhoto;