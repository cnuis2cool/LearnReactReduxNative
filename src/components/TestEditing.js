import {connect} from "react-redux";

const TestEditingComponent = ({questions}) => (
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
            {questions.map(question => 
                <tr key={question.statement}>
                    <td>{question.statement}</td>
                    <td>{question.op1}</td>
                    <td>{question.op2}</td>
                    <td>{question.op3}</td>
                    <td>{question.op4}</td>
                    <td>{question.correct}</td>
                </tr>   
            )}
        </tbody>
    </table>
);

let mapStateToProps_TestEditing = store => ({questions: store.testReducer.questions});
export default connect(mapStateToProps_TestEditing)(TestEditingComponent);