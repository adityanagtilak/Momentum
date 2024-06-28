import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./Style.css";

const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const API_key = '3ca7d8c8b5da6aded2ce76818638f20e';

function Header() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [responsData, setResponsData] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>{
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
        let finalAPIEndpoint = `${API_endpoint}lat=${latitude}$lon=${longitude}&appid=${API_key}`;
        axios.get(finalAPIEndpoint)
            .then((response) =>{
                setResponsData(response.data)
            })
    }, [])
    return <div className="search">
        <h1 className="heading">{responsData.name}</h1>
        <p>{responsData.temp}</p>
    </div>
}

export default Header;