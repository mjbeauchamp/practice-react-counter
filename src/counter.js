import React, {Component} from 'react';

class Counter extends Component{
    constructor(props) {
        super(props);
        //Create state object
        this.state = {num: 0}
        //Make "this" in increase() point to the right place
        this.increase = this.increase.bind(this);
        //Make "this" in decrease() point to the right place
        this.decrease = this.decrease.bind(this);
    }
    increase(){
        // alert("You increased");
        this.setState({
            num: this.state.num + 1
        });
    };

    decrease() {
        // alert("You decreased");
        this.setState({
            num: this.state.num - 1
        });
    };

    render(){
        return (
            <div>
                <h2>{this.state.num}</h2>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}

export default Counter;