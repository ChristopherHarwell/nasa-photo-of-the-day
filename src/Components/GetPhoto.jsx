import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Photo from '../Components/Photo/Photo';

function GetPhoto() {
    const [image, setImage] = useState([]);
    useEffect(() => {
        Axios
        .get('https://api.nasa.gov/planetary/apod?api_key=VWqyZc0tkbR1JhTQi6iUfXvkAOc6sh0JCTXzjYtk')
        .then(res => {
            setImage(res.data);
        })
        .catch(err => console.error(err));
    },[]);

    return (
        <div>
            {
                <Photo 
                    // date={images.date}
                    title={image.title}
                    url={image.url}
                    explanation={image.explanation}
                /> 
            }
        </div>
    );
};

export default GetPhoto;