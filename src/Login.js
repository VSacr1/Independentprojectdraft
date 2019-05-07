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
                error: null,
               
                
        }
        this.state = { redirect: false  }
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
            this.setState({ redirect: true }); 
            
        });
        
        

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
                            <input id="username" type="text" name="username" className="username" placeholder="user"  />
                            <input id="password" type="password" name="pass" className="pass" placeholder="password" />
                            <button type="submit" onClick={this.onSubmitHandle}>Signin</button>  
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