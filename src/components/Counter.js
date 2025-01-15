// src/components/Counter.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
  const [localCount, setLocalCount] = useState(0);

  const globalCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Local Counter</h2>
      <p>{localCount}</p>
      <button onClick={() => setLocalCount(localCount + 1)}>Increment</button>
      <button onClick={() => setLocalCount(localCount - 1)}>Decrement</button>

      <h2>Global Counter (Redux)</h2>
      <p>{globalCount}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
