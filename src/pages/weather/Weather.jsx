import { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import './weather.css';
import axios from 'axios'
import LoadingSpinner from "../../components/loader/loader";

const Weather = (params) => {
    const [wData, setData] = useState()
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true)
        const getGeoLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getWeatherData, () => { }, {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: Infinity
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        const getWeatherData = async (position) => {
            const { latitude, longitude } = position.coords
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(2)}&lon=${longitude.toFixed(2)}&units=metric&appid=7827823101d2b73da072f3788992569f`)
            setData(data.data);
            setIsloading(false)
        }
        getGeoLocation()
    }, [])

    return (isLoading ? <div className="container"><LoadingSpinner></LoadingSpinner></div> :
        (wData &&
            <div>
            <div className="container">
                      <div className="card" >
                      <h2>Weather</h2>
                      <img src={`https://openweathermap.org/img/wn/${wData?.weather[0].icon}@2x.png`} alt="weahter" />
                          <div >
                              <h4>Location: {wData?.name}</h4>
                              <h4>Temprature: {wData?.weather[0].main}</h4>
                              <h4>Feel's like: {wData?.main?.feels_like}°C</h4>
                              <h4>Humidity:{wData?.main?.humidity}</h4>
                              <h4>Max-Min Temprature:{wData?.main?.temp_min}°C to {wData?.main?.temp_max}°C</h4>
   
                          </div>
                      </div>  
              </div>
            </div>
            
        )
    )
}

export default Weather