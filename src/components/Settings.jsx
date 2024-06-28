import React, {useState} from 'react'
import { IoSettings } from "react-icons/io5";
import Weatherr from './Weatherr';
import '../App.css';

const Settings = ({ onClick }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [toggle, setToggle] = useState();

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const showToggle = () => {
    setToggle(!toggle);
    setToggle(toggle === 'block' ? 'none' : 'block');
  }

  return (
    <>
      <IoSettings className='settings' onClick={handleClick}/>
      {showOptions && ( 
        <div className='settings-options'>
        <div class="form-check form-switch">
        <button onClick={showToggle} type="button" class="btn btn-primary">Primary</button>
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        {toggle && (<Weatherr></Weatherr>)}
        <label class="form-check-label" for="flexSwitchCheckDefault">Todo List</label>
        </div>

        <div class="form-check form-switch">
        <input onClick={handleClick} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">LifeInWeeks</label>
        </div>
        <div class="form-check form-switch">
        <input onClick={handleClick} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">Weather</label>
        </div>
      </div>
      )}
    </>
  );
};

export default Settings;

