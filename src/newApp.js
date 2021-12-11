/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-eval */
import React from 'react';
import $ from 'jquery'
import './App.css';
import Countdown from 'react-countdown';

let play = false

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      break: 'break',
      breakLength: '5',
      breakMin: '5',
      breakSec: '00',
      session: 'session',
      sessionLength: '25',
      sessionMin: '25',
      sessionSec: '00'
    }
    this.reset = this.reset.bind(this)
    this.decrement = this.decrement.bind(this)
    this.increment = this.increment.bind(this)
    this.startStop = this.startStop.bind(this)
  }

  reset = () => {
    this.setState({
      breakLength: '5',
      breakMin: '5',
      breakSec: '00',
      sessionLength: '25',
      sessionMin: '25',
      sessionSec: '00'
    })
    play = false
  }

  decrement = (e) => {
    if (e.target.id === "break-decrement" && this.state.breakMin > '1') {
      this.setState({
        breakLength: eval(`${ this.state.breakLength } - 1`),
        breakMin: eval(`${ this.state.breakMin } - 1`)
      })
    } else if (e.target.id === "session-decrement" && this.state.sessionMin > '1') {
      this.setState({
        sessionLength: eval(`${ this.state.sessionLength } - 1`),
        sessionMin: eval(`${ this.state.sessionMin } - 1`)
      })
    }
  }

  increment = (e) => {
    if (e.target.id === "break-increment" && this.state.breakMin < '60') {
      this.setState({
        breakLength: eval(`${ this.state.breakLength } + 1`),
        breakMin: eval(`${ this.state.breakMin } + 1`)
      })
    } else if (e.target.id === "session-increment" && this.state.sessionMin < '60') {
      this.setState({
        sessionLength: eval(`${ this.state.sessionLength } + 1`),
        sessionMin: eval(`${ this.state.sessionMin } + 1`)
      })
    }
  }

  startStop = () => {
    let that = this
    play = !play
    let interval = setInterval(function() {
      if (that.state.sessionMin > '10' && play) {
        if (that.state.sessionSec > '10' && play) {
          that.setState({
            sessionSec: eval(`${ that.state.sessionSec } - 1`)
          })
        } else if (that.state.sessionSec > '00' && play) {
          let firstNum = parseInt(that.state.sessionSec)
          let equation = eval(`${ firstNum } - 1`)
          that.setState({
            sessionSec: [0, equation].join('')
          })
        } else if (that.state.sessionSec === '00' && play) {
          that.setState({
            sessionSec: '59',
            sessionMin: eval(`${ that.state.sessionMin } - 1`)
          })
        } else {
          clearInterval(interval)
        }
      } else if (that.state.sessionMin === 10 && play) {
        if (that.state.sessionSec > '10' && play) {
          that.setState({
            sessionSec: eval(`${ that.state.sessionSec } - 1`)
          })
        } else if (that.state.sessionSec > '00' && play) {
          let firstNum = parseInt(that.state.sessionSec)
          let equation = eval(`${ firstNum } - 1`)
          that.setState({
            sessionSec: [0, equation].join('')
          })
        } else if (that.state.sessionSec === '00' && play) {
          let firstNum = parseInt(that.state.sessionMin)
          let equation = eval(`${ firstNum } - 1`)
          that.setState({
            sessionSec: '59',
            sessionMin: [0, equation].join('')
          })
        } else {
          clearInterval(interval)
        }
      } else if (that.state.sessionMin > '00' && play) {
        let minFirstNum = parseInt(that.state.sessionMin)
        that.setState({
          sessionMin: [0, minFirstNum].join('')
        })
        if (that.state.sessionSec > '10' && play) {
          that.setState({
            sessionSec: eval(`${ that.state.sessionSec } - 1`)
          })
        } else if (that.state.sessionSec > '00' && play) {
          let firstNum = parseInt(that.state.sessionSec)
          let equation = eval(`${ firstNum } - 1`)
          that.setState({
            sessionSec: [0, equation].join('')
          })
        } else if (that.state.sessionSec === '00' && play) {
          let firstNum = parseInt(that.state.sessionMin)
          let equation = eval(`${ firstNum } - 1`)
          that.setState({
            sessionSec: '59',
            sessionMin: [0, equation].join('')
          })
        } else {
          clearInterval(interval)
        }
      } else if (that.state.sessionMin === '00' && play) {
        if (that.state.sessionSec > '10' && play) {
          that.setState({
            sessionSec: eval(`${ that.state.sessionSec } - 1`)
          })
        } else if (that.state.sessionSec > '00' && play) {
          let firstNum = parseInt(that.state.sessionSec)
          let equation = eval(`${ firstNum } - 1`)
          that.setState({
            sessionSec: [0, equation].join('')
          })
        } else if (that.state.sessionSec === '00' && play) {
                   
          
          if (that.state.breakMin > '10' && play) {
            if (that.state.breakSec > '10' && play) {
              that.setState({
                breakSec: eval(`${ that.state.breakSec } - 1`)
              })
            } else if (that.state.breakSec > '00' && play) {
              let firstNum = parseInt(that.state.breakSec)
              let equation = eval(`${ firstNum } - 1`)
              that.setState({
                breakSec: [0, equation].join('')
              })
            } else if (that.state.breakSec === '00' && play) {
              that.setState({
                breakSec: '59',
                breakMin: eval(`${ that.state.breakMin } - 1`)
              })
            } else {
              clearInterval(interval)
            }
          } else if (that.state.breakMin === 10 && play) {
            if (that.state.breakSec > '10' && play) {
              that.setState({
                breakSec: eval(`${ that.state.breakSec } - 1`)
              })
            } else if (that.state.breakSec > '00' && play) {
              let firstNum = parseInt(that.state.breakSec)
              let equation = eval(`${ firstNum } - 1`)
              that.setState({
                breakSec: [0, equation].join('')
              })
            } else if (that.state.breakSec === '00' && play) {
              let firstNum = parseInt(that.state.breakMin)
              let equation = eval(`${ firstNum } - 1`)
              that.setState({
                breakSec: '59',
                breakMin: [0, equation].join('')
              })
            } else {
              clearInterval(interval)
            }
          } else if (that.state.breakMin > '00' && play) {
            let minFirstNum = parseInt(that.state.breakMin)
            that.setState({
              breakMin: [0, minFirstNum].join('')
            })
            if (that.state.breakSec > '10' && play) {
              that.setState({
                breakSec: eval(`${ that.state.breakSec } - 1`)
              })
            } else if (that.state.breakSec > '00' && play) {
              let firstNum = parseInt(that.state.breakSec)
              let equation = eval(`${ firstNum } - 1`)
              that.setState({
                breakSec: [0, equation].join('')
              })
            } else if (that.state.breakSec === '00' && play) {
              let firstNum = parseInt(that.state.breakMin)
              let equation = eval(`${ firstNum } - 1`)
              that.setState({
                breakSec: '59',
                breakMin: [0, equation].join('')
              })
            } else {
              clearInterval(interval)
            }
          } else if (that.state.breakMin === '00' && play) {
            if (that.state.breakSec > '10' && play) {
              that.setState({
                breakSec: eval(`${ that.state.breakSec } - 1`)
              })
            } else if (that.state.breakSec > '00' && play) {
              let firstNum = parseInt(that.state.breakSec)
              let equation = eval(`${ firstNum } - 1`)
              that.setState({
                breakSec: [0, equation].join('')
              })
            } else if (that.state.breakSec === '00' && play) {
              that.setState({
                breakMin: that.state.breakLength,
                breakSec: '00',
                sessionMin: that.state.sessionLength,
                sessionSec: '00'
              })
            } else {
              clearInterval(interval)
            }
          } else {
            clearInterval(interval)
          }


        } else {
          clearInterval(interval)
        }
      } else {
        clearInterval(interval)
      }



      


    }, 1000)

    
  }

  componentDidMount() {
    $("#timer-label").html(this.state.session)
    $("#time-left").html(`${ this.state.sessionMin }:${ this.state.sessionSec }`)
  }

  componentDidUpdate() {
    if (this.state.sessionMin === '00' && this.state.sessionSec === '00') {
      $("#timer-label").html(this.state.break)
      $("#time-left").html(`${ this.state.breakMin }:${ this.state.breakSec }`)
    } else {
      $("#timer-label").html(this.state.session)
      $("#time-left").html(`${ this.state.sessionMin }:${ this.state.sessionSec }`)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="clock">
          <div className="lengthContainer">
            <div className="length">
              <h3 id="break-label">break length</h3>
              <div className="setters">
                <button onClick={ this.decrement } id="break-decrement" className="valueDecrement" />
                <h2 id="break-length">{ this.state.breakLength }</h2>
                <button onClick={ this.increment } id="break-increment" className="valueIncrement" />
              </div>
            </div>
            <div className="length">
              <h3 id="session-label">session length</h3>
              <div className="setters">
                <button onClick={ this.decrement } id="session-decrement" className="valueDecrement" />
                <h2 id="session-length">{ this.state.sessionLength }</h2>
                <button onClick={ this.increment } id="session-increment" className="valueIncrement" />
              </div>
            </div>
          </div>
          
          <div className="timerContainer">
            <h1 id="timer-label"></h1>
            <h1 id="time-left"></h1>
            <Countdown date={ Date.now() + 10000 } />
          </div>

          <div className="controlsContainer">
            <button onClick={ this.startStop } id="start_stop">Start</button>
            <button onClick={ this.reset } id="reset">Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
