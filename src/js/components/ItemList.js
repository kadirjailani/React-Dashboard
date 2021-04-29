import React, { Component } from 'react';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           title: 'Title',
           description: 'Test',
           status: 'Active'
        };
    }

    componentDidMount() { }
    componentWillUnmount() { }
    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <p>{ this.state.description}</p>
                <p>{ this.state.status }</p>
            </div>
        );
    }
}

export default ItemList;