import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from "./components/Test";
import TestEditing from "./components/TestEditing";
import AddQuestion from "./components/AddQuestion";

import {addQuestion} from "./reducers/actions";
import {connect} from "react-redux";


// Only the render function written as Lambda
class AppComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {busy: false};
    }

    getQuestionsFromServer = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("get", "http://localhost:3050/questions", true);
        
        // When response comes, this is excuted by main thread
        xhr.onload = () => {
            let response = xhr.responseText;
            let questions = JSON.parse(response);

            for (let question of questions) {
                //store.dispatch(addQuestion());
                this.props.addQuestion(question.statement, question.op1, question.op2, question.op3, question.op4, question.correct);   // Dispatch to store
            }

            this.setState({busy: false});
        }
        xhr.send(); // Mian thread does not wait for the response

        this.setState({busy: true});
    }

    render() {
        return (
        <div className="container-fluid" style={{marginTop:10}}>
            <h3>Online Test Application</h3>
            <hr/>
                <button className="btn btn-success" onClick={this.getQuestionsFromServer}>Get Questions from Server</button>
            <hr/>
            <div className="row">
                <div className="col-2">
                    <Test/>
                </div>
                <div className="col-7">
                    <TestEditing/>
                </div>
                <div className="col-3">
                    <AddQuestion/>
                </div>
            </div>
        </div>
        );
    }
}

const App = connect(null, {addQuestion})(AppComponent);

export default App;
