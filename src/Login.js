import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import React, { Component } from 'react';
import Todo from './Todo.js';
import SignUp from './SignUp.js';

//import './App.css'
//import { Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uniqueId: 1,
                id: '',
                username: '',
                password: '',
                error: null,
        }
    }

    onSubmitHandle = (e) => {
        e.preventDefault(); 
        const { 
            username: { value: username = '' } = {},
            password: { value: password = '' } = {} 
        } = e.target;

        fetch(`http://localhost:8080/api/v1/users/login?username=${username}&password=${password}`).then(results => 
        {
            return results.json();


        }).catch( (err) => {
            console.warn('Wrong password');
        }).then(data => {
           console.log(data); 
        });
        

    }



    render() {
        return (
            <nav>
                <Router>
                    <div id="Login">
                        <h2> Login</h2>
                        <form onSubmit={this.onSubmitHandle}>
                            <input id="username" type="text" name="username" className="username" placeholder="user"  />
                            <input id="password" type="password" name="pass" className="pass" placeholder="password" />
                            <button type="submit">Signin</button>  
                        </form>
                        <button>Sign Up</button>
                    </div>

                    <Route exact path="/Todo" component={Todo} />
                </Router>
            </nav>
        )
    }
}