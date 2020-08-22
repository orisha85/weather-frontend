import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Forecast2 from "./components/Forecast/Forecast2";


function App() {
 return (
   <div classname="App"> 
    <main> <Forecast /></main>     
    <main><Forecast2 /></main>       
  </div>
 );
}

export default App;
