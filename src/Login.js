import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { BrowserRouter as Router, Route, NavLink, Link, Switch, Redirect } from "react-router-dom";
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
                
        }
        this.state = { redirect: false  }
    }

    onSubmitHandle = (e) => {
        e.preventDefault(); 
        let username = e.target.username.value;  
        let password = e.target.password.value;     

        console.log(username)
        console.log(password); 

        fetch(`http://localhost:8080/api/v1/users/login?username=${username}&password=${password}`).then(results => 
        { 
            return results.json();

        }).then(data => {
            this.setState({ redirect: true }); 
            
        }).catch( (err) => {
            console.warn('Wrong password');
        

        }); 

    }

    onSubmitChange = (e) =>
    {
        this.setState({
            [e.target.username]: e.target.value,
        })
    }


    render() {
        if(this.state.redirect === true)
            {
                return <Redirect to="/Todo"/> 
            }
        return (
            <nav>
                <Router>
                    <div id="Login">
                        <h2> Login</h2>
                        <form onSubmit={this.onSubmitHandle}>
                            <input id="username" type="text" name="username" className="username" placeholder="enter username"  />
                            <input id="password" type="password" name="pass" className="pass" placeholder="enter password" />
                            <button type="submit" onClick={this.onSubmitChange}>Signin</button>  
                        </form>
                        <button><Link to="/SignUp">Sign Up</Link></button>
                    </div>
                
                <Switch> 
                    <Route path="/SignUp" component = {SignUp} />
                </Switch> 
                </Router>

                
            </nav>
        )
    }
}