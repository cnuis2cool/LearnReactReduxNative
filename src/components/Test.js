import React, {Component} from "react";
import {connect} from "react-redux";
import RadioButton from "../shared-components/RadioButton";

import {setUserOption} from "../reducers/actions";

// render function written as Lambda
//const TestComponent = ({questions}) => (
class TestComponent extends Component {
    constructor(props) {
        super(props);
        //this.finishWithBind = this.finish.bind(this);
    }

    onOptionSelected = (userOption, question) => {
        this.props.setUserOption(userOption, question);
    }

    finish = (/* this = ref of TestComponent object */) => {
        let userMarks = 0;
        let totalMarks = 0;

        for(let question of this.props.questions) {
            totalMarks += 1;

            if(question.userOption == question.correct) {
                userMarks += 1;                
            }
        }
        alert(`You obtain ${userMarks} out of ${totalMarks}`);
    }

    render(/* this = ref of TestComponent object */) {
        return (
            <div>
                {this.props.questions.map((question, index) => 
                    <div className="card card-primary" key={index} style={{marginBottom: 10}}>
                        <div className="card-header">
                            {question.statement}
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <RadioButton text={question.op1} value={1} name={index} 
                                            onSelected={(value) => this.onOptionSelected(value, question)} />
                            </div>

                            <div className="form-group">
                                <RadioButton text={question.op2} value={2} name={index} 
                                            onSelected={(value) => this.onOptionSelected(value, question)} />
                            </div>

                            <div className="form-group">
                                <RadioButton text={question.op3} value={3} name={index} 
                                            onSelected={(value) => this.onOptionSelected(value, question)} />
                            </div>

                            <div className="form-group">
                                <RadioButton text={question.op4} value={4} name={index} 
                                            onSelected={(value) => this.onOptionSelected(value, question)} />
                            </div>
                        </div>
                    </div>
                )}

                <div className="form-group">
                    <button className="btn btn-success" onClick={this.finish}>Finish</button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = store => ({questions: store.testReducer.questions});
const Test = connect(mapStateToProps, {setUserOption})(TestComponent);

export default Test;