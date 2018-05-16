import React, {Component} from 'react';

class Counter extends Component{
    // constructor() {
    //     super();
    //     //makes "this" work for increase button
    //     this.increaseClick = this.increaseClick.bind(this);
    //     //makes "this" work for decrease button
    //     this.decreaseClick = this.decreaseClick.bind(this);
    // }
    increase(){
        alert("You increased");
    };

    decrease() {
        alert("You decreased");
    };

    render(){
        return (
            <div>
                <h2>0</h2>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}

export default Counter;