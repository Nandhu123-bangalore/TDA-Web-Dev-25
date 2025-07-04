import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">  
      <h1 className="title">Counter</h1>
      <div>
        <span class="display">{count}</span>
      </div>
      <div className="buttons">
        <button className= "btn play" onClick={() => setCount(count + 1)}>Increment</button>
        <button className= "btn mylist" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className= "btn reset" onClick={() => setCount(0)}>Reset</button>
      </div>
      <p className="text">Click the buttons to change the counter value</p>
      <footer className="footer">
        <p>Made with ❤️ by Nandhitha</p>
      </footer>
    </div>
  );
}

export default Counter;