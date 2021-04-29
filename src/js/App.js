import React, { Component } from 'react';

//Layout
import TopHeader from './components/TopHeader';
import ItemList from './components/ItemList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() { }
    componentWillUnmount() { }
    render() {
        return (
            <div>
                < TopHeader />
                < ItemList />
                <h1>Hello, world!</h1>
                <h2>{ this.state.date }</h2>
            </div>
        );
    }
}

export default App;