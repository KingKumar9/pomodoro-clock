import React from 'react'
import './App.css'
import './App.scss';

// COMPONENTS:
class TimerLengthControl extends React.Component {
    render() {
      return (
        <div className="length-control">
          <div id={this.props.titleID}>{this.props.title}</div>
          <div className='lengthController'>
            <button
                className="btn-level"
                id={this.props.minID}
                onClick={this.props.onClick}
                value="-"
            >
                -
            </button>
            <div className="btn-level" id={this.props.lengthID}>
                {this.props.length}
            </div>
            <button
                className="btn-level"
                id={this.props.addID}
                onClick={this.props.onClick}
                value="+"
            >
                +
            </button>
          </div>
        </div>
      );
    }
  }

  export default TimerLengthControl