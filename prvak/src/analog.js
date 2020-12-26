import * as React from "react";
import {Link} from 'react-router-dom'
class AnalogClock extends React.Component {
  constructor() {
      super();
      this.state = this.getDate();
  }


  getDate() {
      var newDate = new Date();
      var date = {};
      date.hours = newDate.getHours();
      date.minutes = newDate.getMinutes();
      date.seconds = newDate.getSeconds();
      return date;
  }

  updateDate() {
      this.setState(this.getDate());
  }


  updateClock() {
      let angleSeconds = this.state.seconds
      let angleMinutes = this.state.minutes * 6;
      let angleHours =  (this.state.hours  / 12) * 360;
      document.getElementById('js-seconds').style.transform = "translate(-50%, -100%) rotate(" + angleSeconds + "deg)";
      document.getElementById('js-minutes').style.transform = "translate(-50%, -100%) rotate(" +  angleMinutes + "deg)";
      document.getElementById('js-hours').style.transform = "translate(-50%, -100%) rotate(" +  angleHours + "deg)";
  }

  componentDidMount() {
      this.updateClock();
      let timeInterval = setInterval(() => {
          this.updateDate();
          this.updateClock();
      }, 1000);
  }

  componentWillUnmount() {
     // clearInterval(timeInterval);
  }


  render() {
      return (
          <div>
             
              <Link to="/digital">Digital Clock</Link>
        <div className="c-clock">    
        <div id ="js-hours" className="c-clock__tick c-clock__tick--hours"></div>
        <div id ="js-minutes" className="c-clock__tick c-clock__tick--minutes"></div>
        <div id ="js-seconds" className="c-clock__tick c-clock__tick--seconds"></div>
      </div>
      </div>
      );
  }
}



export default AnalogClock