import { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.name + 'child constructor called')
    }

    componentDidMount(){
        console.log(this.props.name + 'child componentDidMount called')
    }
    render() {
        console.log(this.props.name +'child render called')
        return (
            <div>
                <h1>Child Component</h1>
            </div>
        );
    }   
}
export default ChildComponent;


