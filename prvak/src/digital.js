import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import AnalogClock from './analog'

class  DigitalClock extends React.Component{
  
  
  
  constructor() {
    super();
   
    this.state = { time: new Date(),
        radioValue:1 }; 
        this.handleRadioChange = this.handleRadioChange.bind(this)
}

componentDidMount() { 
  document.getElementById("inlineRadio2").checked=true
    this.update = setInterval(() => {
        this.setState({ time: new Date()
         });
    }, 1 * 1000); 
}

componentWillUnmount() { 
   // clearInterval(this.update);
}
handleRadioChange(event) {
    event.preventDefault()

 if(event.target.value==="option1")
 {
  document.getElementById("timediv1").hidden=false
  document.getElementById("timediv2").hidden=true
   
    }
    if(event.target.value==="option2")
 {
  document.getElementById("timediv1").hidden=true
  document.getElementById("timediv2").hidden=false

   
 }
  
}
render() {
    const { time } = this.state; 

    return (
      <form onSubmit={this.onSubmit}>
    <div>
    <Link to="/analog">Analog Clock</Link>
    
                
        <h1 id="timediv2">  {time.toLocaleTimeString()}</h1>
        <h1 id="timediv1" hidden="true">  {time.toLocaleTimeString('en-US', { hour: 'numeric',minute:'numeric',second:'numeric', hour12: true })}</h1>
        <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio"  onChange={this.handleRadioChange} name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
  <label className="form-check-label" for="inlineRadio1">12 Hour Clock</label>
  <input className="form-check-input" type="radio"  onChange={this.handleRadioChange} name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
  <label className="form-check-label" for="inlineRadio2">24 Hour Clock</label>
  
</div>

         </div>
    </form>);

}
}
export default DigitalClock