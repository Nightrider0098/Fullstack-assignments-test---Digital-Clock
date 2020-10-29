import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import '../styles/App.css';

const App = () => {

  let cDate = new Date;
  var [time, setTime] = useState(cDate.toLocaleTimeString());


  let setintervalID;

  useEffect(() => {
    let setintervalID = setInterval(() => {
      const cDate = new Date;
      let renderString = cDate.toLocaleTimeString()
      setTime(renderString)
    }, 1000);

    return () => clearInterval(setintervalID);
  })
  return (
    <div>
    <h3 id='time'>{time}</h3>
    </div>
  )
}


export default App;
