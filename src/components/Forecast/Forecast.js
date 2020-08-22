import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css'

const Forecast = () => {
    let [city, setCity] = useState('');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {

        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});       
        setLoading(true);

        fetch(`https://weatherapi-backend-as.azurewebsites.net/api/WeatherAPI/${uriEncodedCity}`, {
            "method": "GET",
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }

            setResponseObj(response)
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
    }
    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <form onSubmit={getForecast}>
           <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
           <Conditions 
                responseObj={responseObj}
                error={error}
                loading={loading}
                />
       </div>
    )
}

export default Forecast;