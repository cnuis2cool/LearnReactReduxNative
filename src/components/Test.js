import React, {Component} from "react";
import {connect} from "react-redux";
import RadioButton from "../shared-components/RadioButton";

// render function written as Lambda
//const TestComponent = ({questions}) => (
class TestComponent extends Component {
    constructor(props) {
        super(props);
    }

    finish(/* this = ref of TestComponent object */) {

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
                                <RadioButton text={question.op1} value={1} name={index} />
                            </div>

                            <div className="form-group">
                                <RadioButton text={question.op2} value={2} name={index} />
                            </div>

                            <div className="form-group">
                                <RadioButton text={question.op3} value={3} name={index} />
                            </div>

                            <div className="form-group">
                                <RadioButton text={question.op4} value={4} name={index} />
                            </div>
                        </div>
                    </div>
                )}

                <div classname="form-group">
                    <button className="btn btn-success" onClick={() => this.finish()}>Finish</button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = store => ({questions: store.testReducer.questions});
const Test = connect(mapStateToProps)(TestComponent);

export default Test;