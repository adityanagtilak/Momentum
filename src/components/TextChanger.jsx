import React from 'react'

const TextChanger = () => {

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
    const [text, setText] = useState("{message}{username}");
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText("Goodbye, world!"); //Generate quote using react
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    return <div>{text}</div>;

}

export default TextChanger
