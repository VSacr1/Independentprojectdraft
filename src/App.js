import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {  Link, Switch } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import './App.css'
import Todo from './Todo.js'
import Login from './Login.js'
import SignUp from './SignUp.js'
import Menu from './menu.js'

class App extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      show: false 
    };
  }

  render() {
    //use todo component inside render method
    return (
      
        <div id = "mainheader">
          <div class = "title">
          <Container>
            <Row> 
              <Col><h1>Lists</h1></Col>
            </Row> 
          </Container> 
          </div> 
          <div id = "menu"> 
          <Router>
            <Container> 
            <Row> 
              <ButtonToolbar className = "mb-3" aria-label = "Toolbar with Button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button variant = "secondary"><Link to= "/Login" style ={{color:'white'}}>Log in</Link></Button>
                  <Button variant = "secondary"><Link to="/SignUp" style = {{color: 'white'}}>Sign up</Link></Button>
                </ButtonGroup>
              </ButtonToolbar> 
            </Row>
          </Container> 
          
          <Switch>
          <Route path="/Todo" component = {Todo} />
          <Route path="/SignUp" component = {SignUp} />
          <Route path="/Login" component = {Login} />

          </Switch>
          </Router>
          </div> 
                {/* <div className = "header"> 
                    <h1> Task List <br></br>{this.state.date} </h1>  
                    
                        <h2> To complete </h2> 
                </div> 

               

                <div className = "menu">
                    <button>Logout</button>
                    <button>CompleteList</button>
                </div> */}
           {/* <Login/> */}

         
        </div> 
       

    )};
  }

  export default App;


