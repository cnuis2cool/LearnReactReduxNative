import React, {Component} from "react";
import {connect} from "react-redux";
import TextBox from "../shared-components/TextBox";
import ComboBox from "../shared-components/ComboBox";
import {addQuestion} from "../reducers/actions";

class AddQuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {statement: "", op1: "", op2: "", op3: "", op4: "", correct: 1};
        
        this.items = [
            {text: "One", value: 1},
            {text: "Two", value: 2},
            {text: "Three", value: 3},
            {text: "Four", value: 4}
        ];
    }

    setStatement(/* this = ref of AddQuestionComponent object */ value) {
        this.setState({statement: value});
    }

    setOp1(/* this = ref of AddQuestionComponent object */ value) {
        this.setState({op1: value});
    }

    setOp2(/* this = ref of AddQuestionComponent object */ value) {
        this.setState({op2: value});
    }

    setOp3(/* this = ref of AddQuestionComponent object */ value) {
        this.setState({op3: value});
    }

    setOp4(/* this = ref of AddQuestionComponent object */ value) {
        this.setState({op4: value});
    }

    addQuestionToStore(/* this = ref of AddQuestionComponent object */) {
        this.props.addQuestion(this.state.statement, this.state.op1, this.state.op2, this.state.op3, this.state.op4, this.state.correct);
        this.setState({statement: "", op1: "", op2: "", op3: "", op4: "", correct: 1});
    }

    setCorrectAnswer(/* this = ref of AddQuestionComponent object */ value) {
        this.setState({correct: Number(value)});
    }

    render() {
        return (
            <div className="card card-primary">
            <div className="card-header">
                Add Question
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Statement:</label>
                    <TextBox placeholder="Enter Statement" value={this.state.statement} onComplete={(value) => this.setStatement(value)} />
                </div>
                <div className="form-group">
                    <label>Option 1:</label>
                    <TextBox placeholder="Option 1" value={this.state.op1} onComplete={(value) => this.setOp1(value)} />
                </div>
                <div className="form-group">
                    <label>Option 2:</label>
                    <TextBox placeholder="Option 2" value={this.state.op2} onComplete={(value) => this.setOp2(value)} />
                </div>
                <div className="form-group">
                    <label>Option 3:</label>
                    <TextBox placeholder="Option 3" value={this.state.op3} onComplete={(value) => this.setOp3(value)} />
                </div>
                <div className="form-group">
                    <label>Option 4:</label>
                    <TextBox placeholder="Option 4" value={this.state.op4} onComplete={(value) => this.setOp4(value)} />
                </div>
                <div className="form-group">
                    <label>Correct Answer:</label>
                    <ComboBox items={this.items} selectedValue={this.state.correct} onItemSelected={(value) => this.setCorrectAnswer(value)} />
                </div>
                
                <button className="btn btn-primary" onClick={() => this.addQuestionToStore()}>Add Question</button>
            </div>
        </div>
        )
    }
}

const AddQuestion = connect(null, {addQuestion})(AddQuestionComponent);

export default AddQuestion;