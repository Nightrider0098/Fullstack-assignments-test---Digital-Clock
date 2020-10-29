import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time:'',
      intervalID:''
    }
    this.updatetime = this.updatetime.bind(this)
  }

  componentDidMount() {
    this.setState({
      time: (new Date).toLocaleTimeString(), intervalID: setInterval(() => {
        this.updatetime();
      }, 1000)
    })
  }

  updatetime() {
    this.setState({ time: (new Date).toLocaleTimeString() })
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID)
  }
  render() {
    return (
      <div>
        <h3 id='time'>{this.state.time}</h3>
      </div>
    )
  }
}

export default App

