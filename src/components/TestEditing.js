import React, {Component} from "react";
import {connect} from "react-redux";

import TextBox from "../shared-components/TextBox";
import ComboBox from "../shared-components/ComboBox";

import {setStatement, setOp1, setOp2, setOp3, setOp4, setCorrectAnswer} from "../reducers/actions";

// render function is written here as lambda
//const TestEditingComponent = ({questions}) => (
class TestEditingComponent extends Component {
    constructor(props) {
        super(props);
        this.items = [
            {text: "One", value: 1},
            {text: "Two", value: 2},
            {text: "Three", value: 3},
            {text: "Four", value: 4}
        ];
    }

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Statemenet</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Option 3</th>
                        <th>Option 4</th>
                        <th>Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.questions.map((question, index) => 
                        <tr key={index}>
                            <td>
                                <TextBox placeholder="Enter Statement" value={question.statement} onComplete={(value) => this.props.setStatement(value, question)} />
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 1" value={question.op1} onComplete={(value) => this.props.setOp1(value, question)} />
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 2" value={question.op2} onComplete={(value) => this.props.setOp2(value, question)} />
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 3" value={question.op3} onComplete={(value) => this.props.setOp3(value, question)} />
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 4" value={question.op4} onComplete={(value) => this.props.setOp4(value, question)} />
                            </td>
                            <td>
                                <ComboBox items={this.items} selectedValue={question.correct} onItemSelected={(value) => this.props.setCorrectAnswer(value, question)} />
                            </td>
                        </tr>   
                    )}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = store => ({questions: store.testReducer.questions});
const TestEditing = connect(mapStateToProps, {setStatement, setOp1, setOp2, setOp3, setOp4, setCorrectAnswer})(TestEditingComponent);

export default TestEditing;
