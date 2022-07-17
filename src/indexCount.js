import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Child({handleClick}) {
  return <button onClick={handleClick}>Increment</button>;
}

export default function Game() {
  const [count, setCount] = useState(0);

  function handleClick(event, num) {
    setCount(count + num);
  }

  return (
    <div>
      <h2>Count is: {count}</h2>

      <Child handleClick={event => handleClick(event, 100)} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);