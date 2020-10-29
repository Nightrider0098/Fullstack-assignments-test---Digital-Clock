import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import '../styles/App.css';

const App = () => {

  let cDate = new Date;
  let renderString = "" + cDate.getHours() % 12 + ":" + cDate.getMinutes() + ":" + cDate.getMilliseconds() % 100 + " "
  if (cDate.getHours() % 12)
    renderString += 'AM'
  else
    renderString += 'PM'
  var [time, setTime] = useState(renderString);


  let setintervalID;

  useEffect(() => {
    let setintervalID = setInterval(() => {
      const cDate = new Date;
      let renderString = "" + cDate.getHours() % 12 + ":" + cDate.getMinutes() + ":" + cDate.getMilliseconds() % 100 + " "
      if (cDate.getHours() % 12)
        renderString += 'AM'
      else
        renderString += 'PM'
      setTime(renderString)
      // alert(cDate+renderString+'ites')
    }, 1000);

    return () => clearInterval(setintervalID);
  })
  return (
    <div>{time}</div>
  )
}


export default App;
