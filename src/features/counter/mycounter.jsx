import React from 'react';
// These are the two key hooks for connecting React to Redux
import { useSelector, useDispatch } from 'react-redux';

// Import the actions we created in our slice
import { decrement, increment, incrementByAmount } from './myCounterSlice.jsx';

export default function Counter() {
  // useSelector reads a value from the store.
  // The function you pass it is called a "selector".
  const count = useSelector((state) => state.counter.value);

  // useDispatch gives you the store's dispatch function.
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Counter: {count}</h1>
        <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
          aria-label="Increment by 5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

