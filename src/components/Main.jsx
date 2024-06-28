import React, {useState, useEffect} from "react"
import "../App.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Main() {

    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])

  const [randomText, setRandomText] = useState("");

  const generateRandomText = () => {
    const array = ["Be Ready", "Stay Strong", "Be Happy", "Achieve your dream", "Go for world tour", "Stay Calm", "Stay Motivated", "Focus", "Work Hard", "Stay Healthy", "Be Concentrated", "Be Careful", "Take Care", "Have a nice day", "Enjoy blessed life"];
    const randomIndex = Math.floor(Math.random() * array.length);
    setRandomText(array[randomIndex]);
    setTimeout(() =>{
        setRandomText(message);
    }, 3000)
    // setRandomText(message);
};

  useEffect(() => {
    generateRandomText();
    setInterval(generateRandomText, 60000);
  }, []);

  const t = new Date();
  let h = t.getHours();
  let m = t.getMinutes();
  let s = t.getSeconds();
  
  let timee = h + ":" + m + ":" + s;
  
  const [time, setTime] = useState(timee);
  
  const updateTime = () => {
      const newTime =  new Date().toLocaleTimeString();
      setTime(newTime);
    }
    setInterval(updateTime, 1000);

    //Get the username from info when user registers to the site
    const username = "Aditya"; 
    let currentTime = new Date().getHours();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let d = new Date();
    let Day = weekday[d.getUTCDay()].substring(0,3);
    let message ;

    if (currentTime >= 5 && currentTime < 12) {
        message = "Good Morning";
    } else if(currentTime >= 12 && currentTime < 17){
        message = "Good Afternoon";
    } else if(currentTime >= 17 && currentTime < 20){
        message = "Good Evening"
    } else {
        message = "Good Night";
    }
      
    //Change this message with the beautiful quote for every 1.3 min
    return <div className="main">
    <h1 data-aos="fade-up" className="time"><span data-aos="fade-up">{Day}</span>{timee}</h1>
        <h2 data-aos="fade-up">{randomText} {username}</h2>
    </div>
}

export default Main;