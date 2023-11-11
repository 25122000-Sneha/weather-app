import React from 'react';
import { useState, useEffect } from 'react';
import "../css/style.css";



const Tempapp = () => {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Kolkata");

    useEffect(
        () => {
            const fetchApi = async () => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=509a4b913073718db7326c616ca9826b&units=metric`
                const response = await fetch(url);
                const resJson = await response.json();
                console.log(resJson);
                setCity(resJson);
            }
            fetchApi();
        }, [search]);
    return (
        <>
            <div className='container'>
                <div className='box'>
                    <div className='inputData'>
                        <input 
                        type='search'
                        className='inputField'
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        />
                    </div>
                    {!city.main ? <p className='notFound'>No data found</p> 
                    : 
                        <div className='info'>
                            <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt='weather icon' className='weatherImg'/>
                            <h2 className='location'>
                                <i className="fa-solid fa-street-view icon"></i>
                                {city.name}
                            </h2>
                            <h1 className='weather_desc'>{city.weather[0].description}</h1>
                            <h1 className='temperature'>{city.main.temp} 45&deg;C</h1> 
                            <pre className='minmaxtemp'>Min : {city.main.temp_min} 45&deg;C | Max : {city.main.temp_max} 45&deg;C</pre>
                            
                        </div>
                    } 
                    
                </div>
            </div>
        </>
    )
};

export default Tempapp;