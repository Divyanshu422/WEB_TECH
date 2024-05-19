import React from 'react';
import ChildComponent from './ChildComponent';                                                                                                                

class Parent extends React.Component {
    constructor(props) {
        super(props);
        console.log('parent constructor called')
    }

    componentDidMount(){
        console.log('parent componentDidMount called')
    }
    render() {
        console.log('parent render called')
        return (
            <div>
                <h1>Parent component</h1>
                <ChildComponent name = {'first'}/>   
                <ChildComponent name = {'second'}/>     
            </div>
        );
    }

}

export default Parent;












