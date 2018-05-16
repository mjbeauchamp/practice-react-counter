import React, {Component} from 'react';

class Counter extends Component{
    render(){
        return (
            <div>
                <h2>0</h2>
                <button>Increase</button>
                <button>Decrease</button>
            </div>
        );
    }
}

export default Counter;