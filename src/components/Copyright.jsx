import React, {useState, useEffect} from 'react';
import '../App.css';

let currentYear = new Date().getFullYear();

const Copyright = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
        }
      )

  },[]);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
        }
      )
  }
  return (
    <div>
        {isHovered && (
          <div className="copyright-quote">
            <p>{quote}</p>
         </div>
        )}
        <br />
         <button className='copyright' onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>Created with ❤️ by ADITYA NAGTILAK © {currentYear} </button>
    </div>
  );
}

export default Copyright;