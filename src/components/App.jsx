import React, {Fragment} from 'react';
import Weatherr from './Weatherr';
import Main from './Main';
import Copyright from "./Copyright";
import TodoList from './TodoList';
import Background from './Background';
import LocationWeather  from './LocationWeather';
import Settings from './Settings';
// import Header from './Header';

function App() {
  return ( <Fragment>
        {/* <Header></Header> */}
        <LocationWeather />
        <Background />
        <TodoList />
        <Settings />
        <Copyright />
        <Main />
        <Weatherr /> 
    </Fragment>
  );
}

export default App;
