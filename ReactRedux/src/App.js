import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from "./components/Test";
import TestEditing from "./components/TestEditing";
import AddQuestion from "./components/AddQuestion";

import {addQuestion} from "./reducers/actions";
import {connect} from "react-redux";

import ServerProxy from "./server-comm/ServerProxy";


// Only the render function written as Lambda
class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {busy: false};
    }

    processResponse(response) {
        let questions = JSON.parse(response);

        for (let question of questions) {
            //store.dispatch(addQuestion());
            this.props.addQuestion(question.statement, question.op1, question.op2, question.op3, question.op4, question.correct);   // Dispatch to store
        }
    }

    getQuestionsFromServer = () => {

        ServerProxy.get("http://localhost:3050/questions").then((response) => {
                                this.processResponse(response);
                                this.setState({busy: false});
                            }).catch(() => {
                                this.setState({busy: false});
                            });
        this.setState({busy: true});
    }

    // // Another way of doing - not used now a days
    // getQuestionsFromServer = () => {

    //     ServerProxy.get("http://localhost:3050/questions", 
    //                         (response) => {
    //                             this.processResponse(response);
    //                             this.setState({busy: false});
    //                         }, 
    //                         () => {
    //                             this.setState({busy: false});
    //                         }
    //                     );
    //     this.setState({busy: false});
    // }

    // // Unorganized
    // getQuestionsFromServer = () => {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("get", "http://localhost:3050/questions", true);
        
    //     // When response comes, this is excuted by main thread
    //     xhr.onload = () => {
    //         let response = xhr.responseText;
    //         let questions = JSON.parse(response);

    //         for (let question of questions) {
    //             //store.dispatch(addQuestion());
    //             this.props.addQuestion(question.statement, question.op1, question.op2, question.op3, question.op4, question.correct);   // Dispatch to store
    //         }

    //         this.setState({busy: false});
    //     }
    //     xhr.send(); // Mian thread does not wait for the response

    //     this.setState({busy: true});
    // }

    render() {
        return (
        <div className="container-fluid" style={{marginTop:10}}>
            <h3>Online Test Application</h3>
            <hr/>
                <button className="btn btn-success" 
                    onClick={this.getQuestionsFromServer}
                    hidden={this.state.busy}>
                    Get Questions from Server
                </button>
                {/* <b hidden={!this.state.busy}>Please wait...</b> */}
                <img hidden={!this.state.busy} src="loader.gif" style={{width: 50}} />
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
