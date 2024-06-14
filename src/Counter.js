import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/counterActions';


const Counter = ({ count, increment, decrement }) => {
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const mapStateProps = state => ({
   count: state.counter.count
});
                        
export default connect(mapStateProps, { increment,decrement })(Counter);