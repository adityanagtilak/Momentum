import React, {useState} from "react";
import "../App.css";

const LifeInWeeks = () => {

    const [age, setAge] = useState({agee: " "});

    const Age = (event) => {
            var yearsRemaining = (90 - event.target.value);
            var monthsRemaining = (yearsRemaining * 12);
            var weeksRemaining = (monthsRemaining * 5);
            var daysRemaining = (weeksRemaining * 7);
            
            alert("You have left only " + yearsRemaining + " years " + monthsRemaining + " months " + weeksRemaining + " weeks and " + daysRemaining + " days in your life. So enjoy rest of your life!");
        
        }
    
    return <div className="lifeinweeks">
        <h1 className="title">LifeInWeeks</h1>
        <input value={age} type="text" >Enter your age</input>
        <button onClick={Age}><img src="images/search.png" alt="search-img" /></button>
    </div>
}

export default LifeInWeeks;