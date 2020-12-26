import logo from './logo.svg';
import './App.css';
import React from 'react';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Clock from './clock'
import Contact from './contact'
import About from './about'
import DigitalClock from './digital';
import Menu from './menu'
import AnalogClock from './analog'
class App extends React.Component{
   
  render(){
  return (
    <BrowserRouter>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="clock">Clock</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="menu">Menu </a>
            </li>
            
            
        </ul>
    </div>
    <div class="mx-auto order-0">
    <img src={logo} style={{width:100, marginTop: -7}} />
    
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="about">About</a>
            </li>
           
        </ul>
    </div>
</nav>
    
    <div className="form-group">
                    <div className="row">
                        <div className="col-1">
                        
                        <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

            {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>Sidebar</span>
            </button> */}

        </div>
    </nav>
</div>
      
        <nav id="sidebar" className="navbar navbar-expand-lg navbar-dark bg-dark"  >
            
    
            <ul class="list-unstyled components ">
               
                <li class="active">
                    <a href="Home" data-toggle="collapse" aria-expanded="false" >Home</a>
                    
                </li>

          



                <li>
                    <a href="about">About</a>
                </li>
               
                
                <li>
                    <a href="contact">Contact</a>
                </li>
                      
                    </ul>
        </nav>







                    </div>
                    
                  
                    <div className="col-11">

    <div className="App">

      <Switch>
      <Route path="/Home" exact={true}><Home/></Route>
     
        <Route path="/clock" exact={true}><Clock /></Route>
        
       
        <Route path="/" exact={true}><Home/></Route>
        <Route path="/contact" exact={true}><Contact/></Route>
        <Route path="/digital" exact={true}><DigitalClock/></Route>
        <Route path="/menu" exact={true}><Menu/></Route>
        <Route path="/about" exact={true}><About/></Route>
       
        <Route path ="/analog" exact={true}><AnalogClock/></Route>
      </Switch>
      </div>
      </div>
      
    </div>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
