import React from 'react';
import classes from './Condtions.module.css'
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon'; 

function Icon(props){
    var digit = props.id;
    digit = digit.toString()[0];

    if(props.id === 800){
        return <Sunny />
    }

    switch(digit){
        case '2':
        case '3':
        case '5':        
            return <Rain />; 
        case '6':
            return <Snow />       
        case '8':    
            return <Cloudy />;
        default:
            return null;    
    }
}

const Conditions = (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

            {props.loading && <div className={classes.Loader} />}

            {props.responseObj.cod === 200 ?
                <div>
                    <p>In <strong>{props.responseObj.name}, {props.responseObj.sys.country}</strong> it is currently {Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}.</p>
                    <Icon id = {props.responseObj.weather[0].id} />;
                </div>
                
            : null
            }
        </div>
    )
 }

export default Conditions;