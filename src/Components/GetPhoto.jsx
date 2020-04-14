import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const SetPhoto = () => {
    // const [data, setData] = useState(props);
    Axios
    .get('https://api.nasa.gov/planetary/apod?api_key=7SlzHHzGVAYyD03bIYRt6lJlUZS8W42gGZSnf8fS')
    .then(res => {
        console.log('this works')
        // setData(res.data.url)
        console.log(res.data.url)
    })
    .catch(err => console.error(err))
};

const GetPhoto = (props) => {
    

    return (
        <div>
            <SetPhoto/>
        </div>
    );
};

export default GetPhoto;