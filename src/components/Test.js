import {connect} from "react-redux";

const TestComponent = ({questions}) => (
    <div>
        {questions.map(
            question => 
            <div className="card card-primary">
                <div className="card-header">
                    {question.statement}
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>
                            <input type="radio" />
                            {question.op1}
                        </label>
                    </div>
                </div>
            </div>
        )}
    </div>
);

let mapStateToProps_Test = store => ({questions: store.testReducer.questions});
export default connect(mapStateToProps_Test)(TestComponent);
