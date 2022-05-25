import { useState, useEffect } from "react"

import WeatherForm from "./weatherForm"
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./loading"

import styles from './weatherApp.module.css';

export default function WeatherApp(){

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo();
    },[])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`
    },[weather])

    const loadInfo = async (city = 'Tres de mayo, Morelos, Mexico') => {
        try{
            const resp = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
            const json = await resp.json()
           
            //console.log(json)
            setWeather(json)

        }catch(err){

        }

    }

    const handleChangeCity = (city) => {
        setWeather(null)
        loadInfo(city)

    }

    return <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity} />
        { weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        
    </div> 
}