import React, {Component} from "react";

class RadioButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>
                <input type="radio" value={this.props.value} 
                name={this.props.name} 
                onChange={() => this.props.onSelected(this.props.value)}/> 
                &nbsp; {this.props.text}
            </label>
        );
    }
}

export default RadioButton;