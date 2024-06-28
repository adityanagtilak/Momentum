import React, { useEffect} from 'react';
import '../App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const LocationWeather = () => {
        useEffect(() =>{
            Aos.init({duration: 1000})
        }, []);
  
        return (
            <div responseData-aos="fade-up" className='upperLocation'>
            <img id='weather-img' src="images/mist.png" alt="weather-icon" />
            <div responseData-aos="fade-up" className='upperLocation2'>
            <h1 className="temp">30°</h1>
            <p className="city">Pune</p>
            </div>
            </div>
        )
}
// export default LocationWeather;


// const KEY = "3ca7d8c8b5da6aded2ce76818638f20e";
// const city = "Pune";
// const exclude = "daily";

// const LocationWeather = () => {
//   const fetchData = async () => {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/onecall?q=${city}&exclude=${exclude}&appid=${KEY}`
//     );
//     const data = await response.json();
//     console.log(data);
//   };
//   return (
//     <div responseData-aos="fade-up" className='upperLocation'>
//     <img id='weather-img' src="images/mist.png" alt="weather-icon" />
//     <div responseData-aos="fade-up" className='upperLocation2'>
//     <h1 className="temp">30°</h1>
//     <p className="city">Your city</p>
//     </div>
//     </div>
//   );
// };


// const LocationWeather = () => {
//   const city = document.querySelector(".city");
//   const temp = document.querySelector(".temp");

//   const success = (position) => {
//     console.log(position);
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     const getAPIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid={API key}`;

//     fetch(getAPIURL)
//       .then(res => res.json())
//       .then(data => {
//         city.textContent = data.city;
//         temp.textContent = data.temp;
//       })
//   }

//   const error = () => {
//     city.textContent = 'NA';
//   }

//   navigator.geolocation.getCurrentPosition(success, error);

//   return (
//     <div responseData-aos="fade-up" className='upperLocation'>
//     <img id='weather-img' src="images/mist.png" alt="weather-icon" />
//     <div responseData-aos="fade-up" className='upperLocation2'>
//     <h1 className="temp">30°C</h1>
//     <p className="city">Your city</p>
//     </div>
//     </div>
//   )
// }

export default LocationWeather;
