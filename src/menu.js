import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import './App.css'
import Todo from './Todo.js';
import Login from './Login.js';

export default class Menu extends Component 
{
    render() {
    //use todo component inside render method
    return (
          <nav> 
            <Router> 
                  <div className = "App"> 
                    {/* <div className = "header"> 
                        { <h1> Task List</h1> }
                    
                        <h2> To complete </h2> 
                    </div>   */}
               

                    <div className = "menu">
                        <button>Login</button>
                        <button><NavLink to="/Todo">List</NavLink></button>
                    </div>
                    <Route exact path="/Todo" component={Todo}/>
                    <Route exact path="/Login" component={Login}/>

                </div> 
      
            </Router> 
        </nav> 
    )};
  }
