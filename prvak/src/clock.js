import React from 'react';
import {Link} from 'react-router-dom'
class Clock extends React.Component{
    render()
    {
        return(
            <div>
            
                {/* <AnalogClock/> */}
              
                <Link to="/analog">Analog Clock</Link>
                <Link to="/digital">Digital Clock</Link>
            </div>
        )
    }
}
export default Clock