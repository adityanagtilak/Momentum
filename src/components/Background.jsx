import React from 'react';
import '../App.css';

const Backgound = () => {

  //Function to keep track of time and generate images accordingly for morning , evening and night using loreum picsum id use time to change the image id

  return (
    <div onLoad={Backgound}>
      <img className="background" src="https://picsum.photos/1262/585" alt="background-img" /> 
      {/* <img className='background' src="images/background.jpg" alt="coep" /> */}
    </div>
  )
}

export default Backgound
