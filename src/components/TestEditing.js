import React, {Component} from "react";
import {connect} from "react-redux";

import TextBox from "../shared-components/TextBox";
import ComboBox from "../shared-components/ComboBox";

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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.questions.map((question, index) => 
                        <tr key={index}>
                            <td>
                                <TextBox placeholder="Enter Statement" value={question.statement} onComplete={(value) => console.log(value)} />
                                {question.statement}
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 1" value={question.op1} onComplete={(value) => console.log(value)} />
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 2" value={question.op2} onComplete={(value) => console.log(value)} />
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 3" value={question.op3} onComplete={(value) => console.log(value)} />
                            </td>
                            <td>
                                <TextBox placeholder="Enter Option 4" value={question.op4} onComplete={(value) => console.log(value)} />
                            </td>
                            <td>
                                <ComboBox items={this.items} selectedValue={question.correct} onItemSelected={(value) => console.log(value)} />
                            </td>
                            <th>
                                <button className="btn btn-link">Edit</button>
                            </th>

                        </tr>   
                    )}
                </tbody>
            </table>
        );
    }


}

const mapStateToProps = store => ({questions: store.testReducer.questions});
const TestEditing = connect(mapStateToProps)(TestEditingComponent);

export default TestEditing;



// <tbody>
//             {questions.map((question, index) => 
//                 <tr key={index}>
//                     <td>
//                         <TextBox placeholder="Enter Statement" value={question.statement} onComplete={this.setStatement} />
//                         {question.statement}
//                     </td>
//                     <td>
//                         {question.op1}
//                     </td>
//                     <td>
//                         {question.op2}
//                     </td>
//                     <td>
//                         {question.op3}
//                     </td>
//                     <td>
//                         {question.op4}
//                     </td>
//                     <td>
//                         {question.correct}
//                     </td>
//                 </tr>   
//             )}
//         </tbody>