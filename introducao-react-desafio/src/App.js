import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import PostList from './components/PostList'

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <PostList />
                </div>
            </>
        )
    }
}

export default App