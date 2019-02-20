import {Component} from "react";


export class ComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.selectedValue};
    }

    onSelectionChanged(event) {
        this.setState({value: event.target.value});
        this.props.onItemSelected(event.target.value);
    }

    componentWillReceiveProps(nextProps) {
        // Check if it's a new value, you can also use some unique property, like the ID
        if(this.state.value !== nextProps.selectedValue)
        {
            this.setState({value: nextProps.selectedValue})
        }
    } 

    render() {
        return (
            <select className="form-control" 
                value={this.state.value} 
                onChange={(event) => this.onSelectionChanged(event)}>
                {
                    this.props.items.map((item) =>
                        <option key={item.value} value={item.value}>
                            {item.text}
                        </option>)
                }
            </select>
        );
    }
}