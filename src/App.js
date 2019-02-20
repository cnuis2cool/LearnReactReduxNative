import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from "./components/Test";
import TestEditing from "./components/TestEditing";
import AddQuestion from "./components/AddQuestion";

// Only the render function written as Lambda
const App = () => (
    <div className="container-fluid" style={{marginTop:10}}>
        <h3>Online Test Application</h3>
        <hr/>
        <div className="row">
            <div className="col-4">
                <Test/>
            </div>
            <div className="col-5">
                <TestEditing/>
            </div>
            <div className="col-3">
                <AddQuestion/>
            </div>
        </div>
    </div>
);

export default App;
