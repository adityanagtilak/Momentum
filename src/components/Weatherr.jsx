import React, {Fragment, useEffect, useState} from "react";
import '../App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Weatherr = () => {
    useEffect(() =>{
        Aos.init({duration: 1000})
    }, [])

    const [remove, removeDiv] = useState();

    const displayNone = () =>{
        removeDiv({display: 'none' });
    }
    
    const weather_report = () =>{
        const apiKey = "3ca7d8c8b5da6aded2ce76818638f20e";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".searchh input");
        const searchBtn = document.querySelector(".searchh button");
        
        async function checkWeather(city) {
            const response = await fetch(apiUrl  + city + `&appid=${apiKey}`);

            if (response.status === 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
            var data = await response.json();
            
            const weatherIcon = document.getElementById("weather-img");
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            const description = document.querySelector(".advice");
            
            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "images/clouds.png";
                description.innerHTML = "Its 'Cloud' outside keep umbrella with you while going out!";
            }
            else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "images/clear.png";
                description.innerHTML = "Its 'Clear' outside apply sunscreen on your face while going out!";
            }
            else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "images/rain.png";
                description.innerHTML = "Its 'Raining' outside keep umbrella with you while going out!";
            }
            else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
                description.innerHTML = "Its 'Drizzling' outside be safe!";
            }
            else if (data.weather[0].main === "Mist") {
                weatherIcon.src = "images/mist.png";
                description.innerHTML = "Its 'Mist' outside try to come home early!";
            }
            else if (data.weather[0].main === "Snow") {
                weatherIcon.src = "images/snow.png";
                description.innerHTML = "Its 'Snow' outside wear full clothes!";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

}

  return <Fragment>
      <div style={remove} onChange={removeDiv} className="searchh" data-aos="fade-up">
        <h1 style={{fontweight: 700}} className="headingg">Weather</h1>
        <IoMdCloseCircleOutline className="close" onClick={displayNone}/>
        <input style={{background: "whitesmoke", color: "#555"}} type="text" placeholder="Enter city name" spellCheck="false"/>
        <button onClick={weather_report}><img src="images/search.png" alt="search-img" /></button>

      <div className="error">
        <p>Invalid city name</p>
      </div>
      </div>
      <div className="weather" style={remove} onChange={removeDiv}>
        <h2 className="city">Bangalore</h2>
        <div className="weather-temp">
            <img id="weather-img" src="images/rain.png" alt="weather-icon" />
            <h1 className="temp">22°C</h1>
        </div>
        <h1 className="advice">Description</h1>
        <div className="details">
        <div className="col">
            <img src="images/humidity.png" alt="humidity-img" />
            <div>
                <p className="humidity">50%</p>
                <p>Humidity</p>
            </div>
        </div>
        <div className="col">
            <img src="images/wind.png" alt="wind-img" />
            <div>
                <p className="wind">15 km/hr</p>
                <p>Wind Speed</p>
            </div>
        </div>
        </div>
      </div>
    </Fragment>
  
}

export default Weatherr;
