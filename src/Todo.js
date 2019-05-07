import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
// import './App.css'
import { Button } from 'react-bootstrap';

import {DatePicker} from 'react-bootstrap'; 

 let counter = 0;
 let uniqueid = counter++;
 
export default class Todo extends Component {

    constructor(props)
    {
        
        super(props);
        this.state = {
            uniqueid: 1, 
            toDoData: [{
                id: 0,
                item: 'Enter a task here',
                complete: false, 
                dateSet: ''
            }]
          
        }
    }

    //R
    componentDidMount =()=>  {
        fetch('http://localhost:8080/api/v1/todo').then(results =>{
            return results.json();
            
        }).then(data => {
            this.setState({
                toDoData: data,
            })
                console.log(data)
        });
    }
    
    //C
    onSubmitHandle = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/v1/todo', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: uniqueid,
                item: event.target.list.value,
                iscomplete: event.target.list.value,
                dateSet: event.target.date.value,
            })
        });
    }


    //D
    onDeleteHandle = (id) =>  {
        
        console.log(id);
        this.setState({
            toDoData:this.state.toDoData.filter(list => {
                    if(list.id !== id)
                        {
                            return list; 
                        }
                
                })
        });
        fetch("http://localhost:8080/api/v1/todo/" + id, {method: "DELETE"});
    }

    //U
    onCompleteHandle = (e) =>{
        let id = e.target.className;
        let number = e.target.id
        console.log(id);
        fetch('http://localhost:8080/api/v1/todo/'+ id, {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                item: this.state.toDoData[number].item,
                complete: !this.state.toDoData.complete,
                dateSet: this.state.toDoData.date,
            })
        });

        this.setState({
            toDoData:this.state.toDoData.filter(list => {
                    
                if(list.id === id)
                    {
                        
                        if(list.complete === false)
                        {
                            list.complete = true; 
                            {console.log(list.id)}
                        }
                       
                    }
                     return list; 
            })
        });
        
    }
    
     render()
    {
        return(
            <div id = "todo"> 
                
                <div className= "input">
                    <form onSubmit={this.onSubmitHandle}>
                        <input id = "list" type= "text" name="list" className="list" placeholder = "write to do list here"/>
                        <input type = "date" name="date" className="date" />
                        <button variant="secondary" size="lg" className = "button-add">Add</button>
                    </form>
                </div>
                

                <div className = "tasks">
                    <h3 id = "listheading"> Current tasks </h3> 
                    {this.state.toDoData.map((list, number) => (
                        <li id = "mainlist" key={list.id}>
                        {/* {list.id + " "}  */}
                        {list.item + " "}
                        {list.complete + " "}
                        {list.dateSet + " "}
                        <button onClick = {() => this.onDeleteHandle(list.id)}>Delete</button>
                        <button id={number} className = {list.id} onClick = {this.onCompleteHandle}>Complete</button>
                        </li> 
                     ))}

                </div> 
            </div> 
        )
    }

}