import React, { Component } from 'react';

export default class List extends Component {
    constructor(list)
    {
        super();
        this.state = {
            name: list.name
        }
    }
}