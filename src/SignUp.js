import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Todo from './Todo.js'
//import './App.css'
//import { Button } from 'react-bootstrap';

let counter = 0; 
let uniqueid = counter++;

export default class SignUp extends Component
{
    

    constructor(props)
    {
        super(props)
        this.state = {
            uniqueid: 0, 
            userData: [{
            id: 0,
            username: '',
            email: '',
            password: '', 
            }]
        }
    }

    //C
    onSubmitHandle = (event) => {
        event.preventDefault(); 
        fetch('http://localhost:8080/api/v1/users', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                userid: uniqueid, 
                password: event.target.password.value,
                email: event.target.email.value,
                user: event.target.user.value,
               
               
              
            })
        });
    }


    render(){
        return(
        <nav> 
            <Router> 
            <div> 
                <h2> SignUp</h2>
                <form onSubmit={this.onSubmitHandle}>
                    <input type = "email" name = "email" className = "email" placeholder = "email"/>
                    <br />
                    <input type = "text" name = "user" className = "user" placeholder = "Username"/>
                    <br />
                    <input type = "password" name = "password" className = "password" placeholder = "password"/>
                    <br />
                    <button> Sign up</button>
                </form> 
            </div>
            </Router>
        </nav> 
        )
    }
}