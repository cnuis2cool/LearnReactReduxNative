import {Component} from "react";

export class TextBox extends Component {
    constructor(/* this */ props) {
        super(props);
        this.state = {value: props.value || ""};   // local state
    }

    onTextChanged(/* this */ event) {
        this.setState({value: event.target.value});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value})
    } 

    render(/* this */) {
        return (
            <input type="text" 
                className="form-control" 
                placeholder={this.props.placeholder} 
                value={this.state.value} 
                onChange={(event) => this.onTextChanged(event)} 
                onBlur={(event) => this.props.onComplete && this.props.onComplete(event.target.value)} />
        );
    }
}